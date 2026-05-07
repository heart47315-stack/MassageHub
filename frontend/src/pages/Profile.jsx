import React from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Profile</h2>
        <p className="text-gray-600">Manage your account and settings.</p>
      </div>
    </div>
  );
}
