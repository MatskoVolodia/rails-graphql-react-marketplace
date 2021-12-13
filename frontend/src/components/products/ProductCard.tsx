import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../types";

export interface ProductItemProps {
  product: Product;
}

const ProductCard: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="http://placekitten.com/g/300/200"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add To Card
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
