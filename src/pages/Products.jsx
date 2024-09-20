import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Toast from "../components/Toast";
import { ProductContext } from "../context/ProductsProvider";
import { useContext, useEffect } from "react";
export default function Products() {
  const { type, message } = useContext(ProductContext);
  return (
    <>
      <Navbar />
      <Toast type={type} message={message} />
      <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "center", marginTop: "12px" }}
        >
          <ProductCard />
        </Grid>
      </Box>
    </>
  );
}
