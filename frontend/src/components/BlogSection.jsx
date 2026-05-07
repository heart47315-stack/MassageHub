import React from "react";

const blogs = [
  { title: "Benefits of Thai Massage", desc: "Discover how Thai massage improves flexibility.", image: "/assets/blog1.jpg" },
  { title: "Deep Tissue Explained", desc: "Learn why deep tissue massage relieves pain.", image: "/assets/blog2.jpg" },
  { title: "Sports Massage Tips", desc: "How athletes recover faster with massage.", image: "/assets/blog3.jpg" },
];

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((b, i) => (
          <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={b.image} alt={b.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{b.title}</h3>
              <p className="text-gray-600 mt-2">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
