import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-900">฿{product.price}</span>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
