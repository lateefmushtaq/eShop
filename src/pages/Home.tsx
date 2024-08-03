import LandingPage from "../components/LandingPage";
import { Navbar } from "../components/Navbar";
import Products from "./Products";

function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Products />
    </div>
  );
}

export default Home;
