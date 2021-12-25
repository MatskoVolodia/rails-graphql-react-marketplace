import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Category } from "../../types";
import { Scale } from "@mui/icons-material";
import CreateProductModal from "./modals/CreateProductModal";

export interface CreateProductItemProps {
  createProductHandler: any;
  category: Category;
}

const CreateProductCard: React.FC<CreateProductItemProps> = ({
  createProductHandler,
  category,
}) => {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Add a new Product in {category.name}
          </Typography>
        </CardContent>
        <CardActions>
          <CreateProductModal
            category={category}
            onSubmit={createProductHandler}
          />
        </CardActions>
      </Box>
    </Card>
  );
};

export default CreateProductCard;
