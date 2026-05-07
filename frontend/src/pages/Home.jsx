import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import TherapistCard from "../components/TherapistCard";
import MassageTypes from "../components/MassageTypes";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

const therapists = [
  { name: "Brazilian Certified Therapist", location: "London", price: 65 },
  { name: "Deep Tissue Specialist", location: "Feltham", price: 105 },
  { name: "Sports Massage Pro", location: "Manchester", price: 85 },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Therapist Listings */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Therapists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {therapists.map((t, i) => (
            <TherapistCard key={i} therapist={t} />
          ))}
        </div>
      </section>

      {/* Massage Types */}
      <MassageTypes />

      {/* Testimonials */}
      <Testimonials />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
