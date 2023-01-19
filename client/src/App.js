import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowProducts from "./screens/ShowProducts";
import EditProduct from "./screens/EditProduct";
import AddProduct from "./screens/AddProduct";
import ProductDetails from "./screens/ProductDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/addProduct" element={<AddProduct />} />
        <Route path="/products" element={<ShowProducts />} />
        <Route exact path="/product/edit/:id" element={<EditProduct />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
