import Home from "./pages/Home";
import Products from "./pages/Products";
import { AppProvider } from "./context/ProductsProvider";
import Cart from "./components/Cart";
function App() {
  return (
    <AppProvider>
      <Home />
      <Products />
      <Cart />
    </AppProvider>
  );
}

export default App;
