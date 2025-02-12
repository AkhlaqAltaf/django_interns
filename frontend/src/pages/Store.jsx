import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Store = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Mapping category IDs to names
  const categoryMapping = {
    2: "Jeans",
    8: "Jackets",
    9: "Shirts",
    10: "T-Shirts",
    11: "Shoes",
  };

  // Fetch all products
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Extract unique categories from products
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/")
      .then(response => {
        const uniqueCategories = [...new Set(response.data.products.map(product => categoryMapping[product.category] || product.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => (categoryMapping[product.category] || product.category) === selectedCategory)
    : products;

  return (
    <div className="container mx-auto my-2">
      {/* Store Page Button */}
      <h2 className="text-right mb-4">
        Click Here To Render <a href="/store" className="btn btn-primary">Store Page</a>
      </h2>

      {/* Category Section */}
      <h2 className="text-right mb-4">Categories</h2>
      <div className="flex justify-center gap-3 flex-wrap">
        {/* 'All Products' Button */}
        <button 
          onClick={() => setSelectedCategory(null)}
          className={`btn ${selectedCategory === null ? 'btn-primary' : 'btn-outline-secondary'}`}
        >
          All Products
        </button>

        {categories.length > 0 ? (
          categories.map((category, index) => {
            const productCount = products.filter(product => (categoryMapping[product.category] || product.category) === category).length;
            return (
              <button key={index} onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out 
                  ${selectedCategory === category ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>{category}</button>

            );
          })
        ) : (
          <p>No categories available</p>
        )}
      </div>

      {/* Product Section */}
      <h2 className="text-center mt-5 mb-4">
        {selectedCategory ? `${selectedCategory} Products (${filteredProducts.length})` : 'Our Products'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 justify-center items-center mx-auto max-w-7xl ml-5 mr-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="flex justify-center">
              <div className="card h-100 w-72 shadow-md">
                <a href={`/store/products/${product.category_slug}/${product.slug}/`}>
                  <img 
                    src={`http://127.0.0.1:8000${product.image}`}  
                    alt={product.product_name} 
                    className="card-img-top img-fluid rounded-t-2xl"
                  />
                </a>
                <div className="card-body bg-neutral-300 p-4">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text truncate">{product.description}</p>
                  <div className="flex justify-between mt-2 items-center">
                    <span className="text-muted">${product.price}</span>
                    <a href={`/store/products/${product.category_slug}/${product.slug}/`} className="w-30 text-center justify-center rounded-full bg-blue-400">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-full">No products available</p>
        )}
      </div>
    </div>
  );
};

export default Store;
