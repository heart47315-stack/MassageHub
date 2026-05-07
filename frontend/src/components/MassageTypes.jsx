import React from "react";

const types = [
  "Swedish Massage", "Thai Massage", "Deep Tissue", "Sports Massage",
  "Reflexology", "Shiatsu", "Hot Stone", "Aromatherapy"
];

export default function MassageTypes() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
      {types.map((t, i) => (
        <div key={i} className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200">
          <h4 className="font-semibold text-gray-800">{t}</h4>
        </div>
      ))}
    </section>
  );
}
