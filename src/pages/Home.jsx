import TopProducts from "../components/TopProducts";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import Toast from "../components/Toast";

function Home() {
  return (
    <>
      <Navbar />
      <Toast />
      <LandingPage />
      <FeaturedProducts />
      <TopProducts />
    </>
  );
}

export default Home;
