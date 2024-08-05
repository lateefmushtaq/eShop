import Featured from "../components/Featured";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import TopProducts from "../components/TopProducts";

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <TopProducts />
      <Featured />
    </>
  );
}

export default Home;
