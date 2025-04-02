import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <nav className="flex space-x-8 ml-8">
        <a href="#" className="text-white text-lg hover:text-gray-300">Home</a>
        <a href="#" className="text-white text-lg hover:text-gray-300">About</a>
        <a href="#" className="text-white text-lg hover:text-gray-300">Services</a>
        <a href="#" className="text-white text-lg hover:text-gray-300">Contact</a>
      </nav>
      <div className="px-6 py-3 pt-6 flex justify-end bg-transparent">

        <Button
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 
          transition-transform duration-300 items-center rounded-full text-base 
          text-white shadow-lg px-6 py-2">
          Connect
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
