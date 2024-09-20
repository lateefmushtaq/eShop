import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Chip,
  Divider,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { FaStar } from "react-icons/fa";
import { handleClick } from "../utils/helper";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";

export default function ProductCard({ filteredProducts }) {
  const { Products, setCartData, setNotify, setMessage, setType } =
    useContext(ProductContext);

  const productsToDisplay = filteredProducts || Products;
  return (
    <>
      {productsToDisplay.map((product) => {
        return (
          <Card
            sx={{
              width: 345,
              borderRadius: 0,
              backgroundColor: "#1B1B1B",
              color: "#f1f1f1",
              boxShadow: 2,
              transition: "0.3s",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "#1B1B1B",
                boxShadow: 12,
              },
            }}
            key={product.id}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={product.images[0]}
                alt="product image 01"
                sx={{ objectFit: "contain", backgroundColor: "#f1f1f1" }}
              />
              <CardActions sx={{ justifyContent: "space-between", pt: 2 }}>
                <Typography gutterBottom variant="p" component="div">
                  {[...Array(product.rateCount || 0)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  Ratings: {product.ratings}
                </Typography>{" "}
              </CardActions>
              <CardContent>
                <Box sx={{ p: 1 }}>
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {product.title}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" sx={{ color: "#f1f1f1" }}>
                    {product.info}
                  </Typography>
                </Box>
                <Box sx={{ pt: 1, color: "#f1f1f1" }}>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label={product.category}
                      size="small"
                      sx={{ color: "#f1f1f1", backgroundColor: "#f1f1f116" }}
                    />
                    <Chip
                      label={product.type}
                      size="small"
                      sx={{ color: "#f1f1f1", backgroundColor: "#f1f1f116" }}
                    />
                    <Chip
                      label={product.connectivity}
                      size="small"
                      sx={{ color: "#f1f1f1", backgroundColor: "#f1f1f116" }}
                    />
                  </Stack>
                </Box>
              </CardContent>
              <Divider sx={{ backgroundColor: "#f1f1f135" }} />
              <Box sx={{ p: 2, color: "#f1f1f1", display: "flex" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#f1f1f1", fontWeight: "bold" }}
                >
                  Price:
                </Typography>
                <AttachMoneyIcon fontSize="small" />
                <Typography
                  variant="body2"
                  sx={{ color: "#f1f1f1", fontWeight: "bold" }}
                >
                  {" "}
                  {product.finalPrice}
                </Typography>
              </Box>

              <CardActions>
                <Button
                  sx={{
                    width: 345,
                    borderRadius: 0,
                    backgroundColor: "#202020",
                    color: "#f1f1f1",
                    boxShadow: 12,
                    transition: "0.3s",
                    border: "1px solid #f1f1f1",
                    "&:hover": {
                      backgroundColor: "#fff8f8",
                      color: "#1B1B1B",
                      boxShadow: 20,
                      elevation: 0,
                      border: "1px solid black",
                    },
                    "&.MuiPaper-root": {
                      elevation: 0,
                    },
                  }}
                  onClick={() =>
                    handleClick(
                      product.id,
                      setCartData,
                      setNotify,
                      setMessage,
                      setType,
                      Products
                    )
                  }
                  fullWidth
                  startIcon={<AddIcon />}
                >
                  Add to cart
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
