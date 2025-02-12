import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-center text-3xl font-bold">Contact Us</h1>
      <p className="text-gray-600 text-center mt-2">We would love to hear from you.</p>
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" id="name" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" className="mt-1 p-2 w-full border rounded-md" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;