import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">MassagesMe</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explore">Find Massage</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded">Login</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Post Ad</button>
        </div>
      </div>
    </nav>
  );
}
