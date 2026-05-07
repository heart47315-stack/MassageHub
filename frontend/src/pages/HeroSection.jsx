import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Find Professional Massage Therapists Across the UK
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Trusted by 350K+ Happy Clients
      </p>
      <div className="flex space-x-4">
        <input type="text" placeholder="Enter Location" className="px-4 py-2 border rounded-md" />
        <input type="text" placeholder="Massage Type" className="px-4 py-2 border rounded-md" />
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">Search</button>
      </div>
    </section>
  );
}
