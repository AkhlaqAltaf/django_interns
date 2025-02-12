import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-center text-3xl font-bold">About Us</h1>
      <p className="text-gray-600 text-center mt-2">
        Learn more about our company and mission.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <p>
          Welcome to our e-commerce store! We are committed to providing the best
          products at great prices.
        </p>
        <p className="mt-2">
          Our mission is to make online shopping easy and enjoyable for everyone.
        </p>
      </div>
      <h2 className="text-center text-2xl font-semibold mt-6">Follow Us</h2>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:underline">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" className="text-blue-400 hover:underline">
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank" className="text-pink-600 hover:underline">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default About;