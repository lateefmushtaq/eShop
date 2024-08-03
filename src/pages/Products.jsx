import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="main" style={{ display: "flex" }}>
        <ProductCard />
        <div></div>
      </div>
    </>
  );
}
