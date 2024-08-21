import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductsProvider";
import ProductCard from "../components/ProductCard";
import Navbar from "./Navbar";

function SearchResults() {
  const { Products } = useContext(ProductContext);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const filteredProducts = Products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <h4 style={{ textAlign: "center" }}>Search Results for "{query}"</h4>
      <div className="main">
        {filteredProducts.length > 0 ? (
          <ProductCard filteredProducts={filteredProducts} />
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
