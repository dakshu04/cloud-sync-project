import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
export const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false)
  const { darkMode, setDarkMode } = useTheme()
  
  return (
    // <div  className={`fixed flex items-center justify-around top-4 left-10 right-10 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition duration-500 rounded-full px-6 py-3 shadow-lg`}>
    <div className="fixed flex items-center justify-around top-4 left-10 right-10 z-50" >
      <div className="text-2xl font-bold mr-2">
        <Link to="/" className="text-white cursor-pointer text-shadow-lg">☁️CloudSync</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-medium m-6">
        <Link to="/features" className="hover:underline">Features</Link>
        <Link to="/integrations" className="hover:underline">Integrations</Link>
        <Link to="/pricing" className="hover:underline">Pricing</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>

      {/* Auth Buttons */}
      <div>
        <button onClick={() => setDarkMode(!darkMode)}
      className={`px-4 py-2 rounded-full mr-2 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        <button
          className={`mr-2 shadow-md px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ${
            darkMode ? 'bg-gray-900 text-white'  : ' bg-white text-black'
          }`}>
          Signup
        </button>
        <button
          className={`mr-2 shadow-md px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ${
            darkMode ? 'bg-gray-900 text-white'  : ' bg-white text-black'
          }`}>
          Signin
        </button>
      </div>
    </div>
  );
};

export default Navbar;
