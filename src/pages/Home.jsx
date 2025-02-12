import TopProducts from "../components/TopProducts";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Headings from "../components/Headings";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Toast />
      <LandingPage />

      <Headings value={"Top Products"} />
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
