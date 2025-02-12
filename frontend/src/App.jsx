import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [products, setProducts] = useState([]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setProducts={setProducts} />} />
        <Route path="/products/:category/:productSlug" element={<ProductDetails products={products} />} />
        <Route path="/deals" element={<h1 className="text-3xl font-bold underline">Deals</h1>} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
