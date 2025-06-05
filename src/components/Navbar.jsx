import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="fixed items-center flex justify-around top-4 left-10 right-10 text-white ">
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
        <button className="bg-white mr-2 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer">
          Signup
        </button>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer">
          Signin
        </button>
      </div>
    </div>
  );
};

export default Navbar;
