import TopProducts from "../components/TopProducts";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import Toast from "../components/Toast";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Toast />
      <LandingPage />
      <FeaturedProducts />
      <TopProducts />
    </div>
  );
}

export default Home;
