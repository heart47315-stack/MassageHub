import React from "react";

const testimonials = [
  { quote: "Amazing massage, felt so relaxed!", name: "Sarah", location: "London" },
  { quote: "Professional and friendly therapist.", name: "James", location: "Manchester" },
  { quote: "Best deep tissue massage ever!", name: "Emma", location: "Birmingham" },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg">
            <p className="italic text-gray-700">"{t.quote}"</p>
            <h4 className="mt-4 font-semibold text-gray-800">{t.name}</h4>
            <p className="text-gray-600">{t.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
