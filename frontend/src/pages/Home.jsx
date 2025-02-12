import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import productImage from "../assets/images.jpg";

const Home = ({ setProducts }) => {
  const { category_slug } = useParams(); // Get category slug from URL
  const [products, setLocalProducts] = useState([]);

  useEffect(() => {
    let apiUrl = "http://127.0.0.1:8000/api/products/";

    if (category_slug) {
      apiUrl += `${category_slug}/`; // Ensure correct URL format
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data.products); // Pass data to parent component (App.jsx)
        setLocalProducts(response.data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category_slug, setProducts]);

  return (
    <div >
      {/* Hero Image */}
      <div className="flex justify-center items-center w-screen h-screen p-5">
        <img
          src={productImage}
          alt="Product Showcase"
          className="w-[85vw] h-[85vh] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Product Listing */}
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mt-5 mb-6">
          {category_slug ? `Products in ${category_slug}` : "All Products"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="flex justify-center">
                <div className="w-72 shadow-lg rounded-lg overflow-hidden bg-white">
                  <img
                    src={`http://127.0.0.1:8000${product.image}`}
                    alt={product.product_name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-neutral-100">
                    <h5 className="font-bold text-lg">{product.product_name}</h5>
                    <p className="text-gray-600 truncate">{product.description}</p>
                    <div className="flex justify-between mt-3 items-center">
                      <span className="text-lg font-semibold text-gray-800">
                        ${product.price}
                      </span>
                      <Link
                        to={`/products/${product.category.slug}/${product.slug}`} // Fixed product link
                        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full text-gray-500">No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
