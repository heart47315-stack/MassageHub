import React from "react";
import Navbar from "../components/Navbar";

export default function Explore() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Explore Therapists</h2>
        <p className="text-gray-600">Browse therapists and services available.</p>
      </div>
    </div>
  );
}
