import { IconButton, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Category } from "../../../types";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CreateProductForm from "../forms/CreateProductForm";

export interface CreateProductModalProps {
  onSubmit: any;
  category: Category;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateProductModal: React.FC<CreateProductModalProps> = ({
  onSubmit,
  category,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmitHandler = () => {
    handleClose();
    onSubmit();
  };

  return (
    <>
      <IconButton size="large" aria-label="add" onClick={handleOpen}>
        <AddCircleIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography component="h4" variant="h6">
            Create a new Product in category {category.name}
          </Typography>
          <hr />
          <CreateProductForm
            category={category}
            onSubmitHandler={onSubmitHandler}
          />
        </Box>
      </Modal>
    </>
  );
};

export default CreateProductModal;
