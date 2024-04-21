import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import getProductsAPI from "../services/getProductsAPI";
import JewerlyProducts from "./JewerlyProducts";
import MensClothing from "./MensClothing";
import Electronics from "./Electronics";
import WomensClothing from "./WomensClothing";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import "../styles/App.scss";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsAPI().then((productsData) => {
      setProducts(productsData);
      console.log(productsData);
    });
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/womensclothing"
          element={<WomensClothing products={products} />}
        />
        <Route
          path="/mensclothing"
          element={<MensClothing products={products} />}
        />
        <Route
          path="/jewerlyproducts"
          element={<JewerlyProducts products={products} />}
        />
        <Route
          path="/electronics"
          element={<Electronics products={products} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
