// components/Navbar.jsx
import React from "react";

export const Navbar = () => {
  const navLinks = ["Features", "Pricing", "Integrations", "Contact"];

  return (
    <div className="fixed items-center flex justify-around top-4 left-10 right-10 text-white ">
      {/* Logo */}
      <div className="text-2xl font-bold mr-2">
        <div className="text-white cursor-pointer text-shadow-lg">☁️CloudSync</div>
      </div>

      {/* Nav Links */}
      <div className="flex gap-6 text-sm font-medium m-6">
        {navLinks.map((link) => (
          <div key={link} className="hover:underline cursor-pointer text-shadow-md">
            {link}
          </div>
        ))}
      </div>
      
      <div className="">
        {/* Signup Button */}
        <button className="bg-white mr-2 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ">
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
