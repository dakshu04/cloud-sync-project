import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    // <div  className={`fixed flex items-center justify-around top-4 left-10 right-10 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition duration-500 rounded-full px-6 py-3 shadow-lg`}>
    <div className="fixed flex items-center justify-around top-4 left-10 right-10 z-50" >
      <div className="text-2xl font-bold mr-2">
        <Link to="/" className="text-white cursor-pointer text-shadow-lg">☁️CloudSync</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-medium m-6">
        <Link to="/features" className="hover:underline">Features</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/integrations" className="hover:underline">Integrations</Link>
        <Link to="/pricing" className="hover:underline">Pricing</Link>
      </div>

      {/* Auth Buttons */}
      <div>
        <button onClick={() => setDarkMode(!darkMode)} className="bg-white mr-2 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        <button className="bg-white mr-2 shadow-md text-blue-600 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer">
          Signup
        </button>
        <button className="bg-white shadow-md text-blue-600 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer">
          Signin
        </button>
      </div>
    </div>
  );
};

export default Navbar;
