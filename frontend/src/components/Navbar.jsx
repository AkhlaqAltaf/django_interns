import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  // Mapping category IDs to category names
  const categoryMapping = {
    2: "Jeans",
    8: "Jackets",
    9: "Shirts",
    10: "T-Shirts",
    11: "Shoes"
  };

  // Fetch unique categories
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((response) => {
        if (response.data.products) {
          const uniqueCategories = response.data.products.reduce((acc, product) => {
            const categoryName = categoryMapping[product.category] || product.category;
            if (!acc.some((c) => c.name === categoryName)) {
              acc.push({ id: product.category, name: categoryName, slug: product.category_slug });
            }
            return acc;
          }, []);
          setCategories(uniqueCategories);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <nav className="bg-gray-100 py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          E-com
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <div className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center w-full lg:w-auto`}>
          <ul className="lg:flex space-y-4 lg:space-y-0 lg:space-x-6 text-gray-700">
            <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link to="/deals" className="hover:text-gray-900">Deals</Link></li>

            {/* Dropdown Menu */}
            <li className="relative group">
              <button className="hover:text-gray-900">
                Category ▾
              </button>
              <ul className="absolute hidden group-hover:block bg-white shadow-md py-2 rounded-md w-40">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        to={`/store/products/${category.slug}/`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">Loading...</li>
                )}
              </ul>
            </li>

            <li><Link to="/store" className="hover:text-gray-900">Store</Link></li>
            <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
            <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
          </ul>
        </div>

        {/* Search Bar */}
        <form className="hidden lg:flex items-center border rounded-md overflow-hidden">
          <input type="text" placeholder="Search" className="px-3 py-1 focus:outline-none" />
          <button className="bg-green-500 text-white px-4 py-1">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
