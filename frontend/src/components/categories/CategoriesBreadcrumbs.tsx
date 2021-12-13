import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { Category } from "../../types";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { gql, useQuery } from "@apollo/client";

export interface CategoriesBreadcrumbsProps {
  category: Category;
}

const parentsQuery = gql`
  query parents($id: ID!) {
    parentCategories(id: $id) {
      id
      name
    }
  }
`;

const CategoriesBreadcrumbs: React.FC<CategoriesBreadcrumbsProps> = ({
  category,
}) => {
  const { data, loading, error } = useQuery(parentsQuery, {
    variables: { id: category.id },
  });

  const breadcrumbs = (categories: [Category]) => {
    let categoriesArray = Array.from(categories);
    let currentCategory = categoriesArray.pop();

    return categoriesArray
      .map((category) => {
        let href = `/${category.id}`;

        return (
          <Link underline="hover" key="1" color="inherit" href={href}>
            {category.name}
          </Link>
        );
      })
      .concat(
        <Typography key="3" color="text.primary">
          {currentCategory?.name}
        </Typography>
      );
  };

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  if (!data.parentCategories.length) return null;

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs(data.parentCategories)}
      </Breadcrumbs>
    </Stack>
  );
};

export default CategoriesBreadcrumbs;
