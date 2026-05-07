import React from "react";

export default function TherapistCard({ therapist }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold text-gray-800">{therapist.name}</h3>
      <p className="text-gray-600">{therapist.location}</p>
      <p className="text-gray-900 font-bold mt-2">From £{therapist.price}</p>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
        Book Now
      </button>
    </div>
  );
}
