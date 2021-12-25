import { gql, useMutation } from "@apollo/client";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { Category } from "../../../types";

export interface CreateProductFormProps {
  onSubmitHandler: any;
  category: Category;
}

const createProductQuery = gql`
  mutation createProduct($title: String!, $price: Float!, $categoryId: ID!) {
    createProduct(
      input: { title: $title, price: $price, categoryId: $categoryId }
    ) {
      product {
        id
      }
      errors
    }
  }
`;

const CreateProductForm: React.FC<CreateProductFormProps> = ({
  category,
  onSubmitHandler,
}) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [createProduct, { data, loading, error }] =
    useMutation(createProductQuery);

  const handleSubmit = () => {
    createProduct({
      variables: {
        title: title,
        price: parseFloat(price),
        categoryId: category.id,
      },
    });

    onSubmitHandler();
  };

  if (loading) return <h3>Submitting...</h3>;
  if (error) return <h3>Submission error! {error.message}</h3>;

  return (
    <FormControl fullWidth>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
        <OutlinedInput
          value={title}
          onChange={(event: SyntheticEvent) => {
            setTitle((event.target as HTMLInputElement).value);
          }}
          label="Title"
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          value={price}
          type="number"
          onChange={(event: SyntheticEvent) => {
            setPrice((event.target as HTMLInputElement).value);
          }}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Button onClick={handleSubmit}>Save</Button>
      </FormControl>
    </FormControl>
  );
};

export default CreateProductForm;
