import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">MassagesMe</h3>
          <p>Find trusted massage therapists across the UK.</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <span>🌐</span>
            <span>🐦</span>
            <span>📘</span>
          </div>
        </div>
      </div>
      <p className="text-center mt-6 text-gray-400">© 2026 MassagesMe UK</p>
    </footer>
  );
}
