import React, { useState, useContext, useMemo } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Divider,
  CardActionArea,
  CardActions,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { handleClick } from "../utils/helper";
import { ProductContext } from "../context/ProductsProvider";
import { useNavigate } from "react-router-dom";
import { VscHeartFilled } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
export default function ProductCard() {
  const [activeProduct, setActiveProduct] = useState("Headphones");
  const [showFeatured, setShowFeatured] = useState([]);
  const navigate = useNavigate();
  const {
    Products,
    setCartData,
    setNotify,
    setMessage,
    setType,
    setFavourite,
    favourite,
  } = useContext(ProductContext);

  useMemo(() => {
    const filteredProducts = Products.filter(
      (product) => product.category === activeProduct
    );
    setShowFeatured(filteredProducts);
  }, [Products, activeProduct]);

  function handleTopProducts(productType) {
    setActiveProduct(productType);
  }

  function handleFavourite(id) {
    const isAlreadyFav = favourite.some((item) => item.id === id);
    if (isAlreadyFav) {
      setFavourite(favourite.filter((item) => item.id !== id));
    } else {
      const favProduct = Products.find((item) => item.id === id);
      setFavourite([...favourite, favProduct]);
      setNotify(true);
      setMessage("Added to favourites");
      setType("success");
    }
  }

  return (
    <>
      {showFeatured.map((product) => {
        return (
          <Card
            sx={{
              width: 275,
              borderRadius: 0,
              backgroundColor: "#1B1B1B",
              color: "#f1f1f1",
              transition: "0.3s",
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "#1B1B1B",
                boxShadow: 12,
              },
            }}
            key={product.id}
          >
            <CardActionArea>
              <CardMedia
                onClick={() => navigate(`/product/${product.id}`)}
                component="img"
                height="200"
                image={product.images[0]}
                alt="product image 01"
                sx={{ objectFit: "contain", backgroundColor: "#f1f1f1" }}
              />

              <CardContent onClick={() => navigate(`/product/${product.id}`)}>
                <Box>
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
                    <Stack sx={{ display: "flex", flexDirection: "row" }}>
                      {" "}
                      <AttachMoneyIcon fontSize="small" />
                      <Typography
                        variant="body2"
                        sx={{ color: "#f1f1f1", fontWeight: "bold", ml: 0 }}
                      >
                        {product.finalPrice}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Divider sx={{ backgroundColor: "#f1f1f135" }} />
                  <Box
                    sx={{
                      color: "#f1f1f1",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  ></Box>
                </Box>
              </CardContent>
              <CardContent sx={{ p: 0 }}>
                <CardActions
                  sx={{ p: 1, pt: 0, justifyContent: "space-evenly" }}
                >
                  <Stack>
                    <ShoppingCartCheckoutIcon
                      style={{ fontSize: "24px" }}
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
                    />
                  </Stack>

                  <Stack onClick={() => handleFavourite(product.id)}>
                    {favourite.some((item) => item.id === product.id) ? (
                      <VscHeartFilled
                        style={{
                          fontSize: "24px",
                          color: "red",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FaRegHeart
                        style={{
                          fontSize: "24px",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Stack>
                  <Typography
                    variant="p"
                    sx={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      opacity: 0.5,
                    }}
                  >
                    Rating: {product.ratings}
                  </Typography>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
