import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-bold text-white tracking-wide"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          MassageHub
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 text-white uppercase tracking-[2px] text-sm">

          <Link
            to="/"
            className="hover:text-[#d6a86a] transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/explore"
            className="hover:text-[#d6a86a] transition duration-300"
          >
            Explore
          </Link>

          <Link
            to="/therapists"
            className="hover:text-[#d6a86a] transition duration-300"
          >
            Therapists
          </Link>

          <Link
            to="/blog"
            className="hover:text-[#d6a86a] transition duration-300"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#d6a86a] transition duration-300"
          >
            Contact
          </Link>

        </nav>

        {/* BOOK BUTTON */}
        <button className="hidden md:block bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] text-white px-7 py-3 rounded-full font-medium hover:scale-105 transition duration-300 shadow-lg">
          Book Now
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#2d1b15]/95 backdrop-blur-xl border-t border-white/10">

          <nav className="flex flex-col gap-5 p-6 text-white uppercase tracking-[2px] text-sm">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d6a86a] transition"
            >
              Home
            </Link>

            <Link
              to="/explore"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d6a86a] transition"
            >
              Explore
            </Link>

            <Link
              to="/therapists"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d6a86a] transition"
            >
              Therapists
            </Link>

            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d6a86a] transition"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d6a86a] transition"
            >
              Contact
            </Link>

            <button className="mt-4 bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] text-white py-3 rounded-full font-medium">
              Book Now
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}