import TopProducts from "../components/TopProducts";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import Toast from "../components/Toast";
import Favourite from "../components/Favourite";

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
