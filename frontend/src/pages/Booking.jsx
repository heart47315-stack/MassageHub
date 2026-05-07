import React from "react";
import Navbar from "../components/Navbar";

export default function Booking() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Booking</h2>
        <p className="text-gray-600">Book your massage appointment here.</p>
      </div>
    </div>
  );
}
