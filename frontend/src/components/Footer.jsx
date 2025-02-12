import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h5 className="text-lg font-semibold mb-2">About Us</h5>
            <p className="text-sm">
              We are a leading company offering the best products with great
              features. Our goal is to provide high-quality items to our
              customers.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Contact</h5>
            <ul className="text-sm space-y-2">
              <li>📍 Address: 123 Main Street, City, Country</li>
              <li>📞 Phone: +123 456 7890</li>
              <li>📧 Email: info@company.com</li>
            </ul>
          </div>
          
          {/* Follow Us */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <p className="text-sm mb-2">
              Stay connected with us on social media to get the latest updates,
              offers, and news about our products and services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/YourCompany" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">Facebook</a>
              <a href="https://twitter.com/YourCompany" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">Twitter</a>
              <a href="https://www.instagram.com/YourCompany" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">Instagram</a>
              <a href="https://www.linkedin.com/company/YourCompany" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">LinkedIn</a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center text-sm">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;