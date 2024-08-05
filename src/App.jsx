import Home from "./pages/Home";
import Products from "./pages/Products";
import { AppProvider } from "./context/ProductsProvider";
import MyCart from "./pages/MyCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </AppProvider>
  );
}

export default App;
