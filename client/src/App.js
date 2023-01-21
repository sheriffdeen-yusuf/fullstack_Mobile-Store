import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ShowProducts from "./screens/ShowProducts";
import EditProduct from "./screens/EditProduct";
import AddProduct from "./screens/AddProduct";
import ProductDetails from "./screens/ProductDetails";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Main from "./screens/Main";
const App = () => {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route path="/products" element={<ShowProducts />} />
          <Route exact path="/product/edit/:id" element={<EditProduct />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
