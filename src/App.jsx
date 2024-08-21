import { AppProvider } from "./context/ProductsProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const MyCart = lazy(() => import("./pages/MyCart"));
const FavouriteProducts = lazy(() => import("./pages/FavouriteProducts"));
const Product = lazy(() => import("./pages/Product"));
const SearchResults = lazy(() => import("./components/Search"));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/favourite" element={<FavouriteProducts />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </AppProvider>
  );
}

export default App;
