import TopProducts from "../components/TopProducts";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import Toast from "../components/Toast";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Toast />
      <LandingPage />
      <FeaturedProducts />

      <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "center", marginTop: "12px" }}
        >
          <TopProducts />
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
