import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { category, productSlug } = useParams();

  // Find the product from props
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500">
        <h2>Product not found!</h2>
        <Link to="/" className="text-blue-500 underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Product Image */}
        <img
          src={`http://127.0.0.1:8000${product.image}`}
          alt={product.product_name}
          className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
        />

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.product_name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4 text-gray-900">${product.price}</p>

          <div className="mt-5">
            <Link
              to="/"
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
            >
              Back to Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
