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

const PendingProductCard: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Loading...
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default PendingProductCard;
