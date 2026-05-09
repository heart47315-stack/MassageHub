import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

/* ================= NAVBAR ================= */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-bold text-white tracking-wide"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          MassageHub
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-10 text-white uppercase tracking-[2px] text-sm">
          <Link to="/" className="hover:text-[#d6a86a] transition">
            Home
          </Link>

          <Link to="/explore" className="hover:text-[#d6a86a] transition">
            Explore
          </Link>

          <Link to="/therapists" className="hover:text-[#d6a86a] transition">
            Therapists
          </Link>

          <Link to="/blog" className="hover:text-[#d6a86a] transition">
            Blog
          </Link>

          <Link to="/contact" className="hover:text-[#d6a86a] transition">
            Contact
          </Link>
        </nav>

        {/* BUTTON */}
        <button className="hidden md:block bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition duration-300">
          Book Now
        </button>

        {/* MOBILE BUTTON */}
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
          <nav className="flex flex-col p-6 gap-5 text-white uppercase tracking-[2px] text-sm">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/explore" onClick={() => setMenuOpen(false)}>
              Explore
            </Link>

            <Link to="/therapists" onClick={() => setMenuOpen(false)}>
              Therapists
            </Link>

            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <button className="bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] py-3 rounded-full mt-4">
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1800&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 max-w-5xl pt-32">
        <span className="uppercase tracking-[6px] text-[#d6a86a] text-xs md:text-sm">
          Luxury Massage Experience
        </span>

        <h1
          className="text-5xl sm:text-6xl md:text-8xl text-white font-bold leading-tight mt-6"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Relax Your <br /> Body & Mind
        </h1>

        <p className="text-white/80 text-base md:text-xl leading-8 max-w-2xl mx-auto mt-8">
          Experience premium massage therapy with professional therapists,
          elegant ambience, and unforgettable wellness treatments.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
          <Link
            to="/explore"
            className="bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] px-10 py-5 rounded-full text-white font-semibold hover:scale-105 transition duration-300"
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="border border-white/40 backdrop-blur-md px-10 py-5 rounded-full text-white hover:bg-white hover:text-black transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function ServiceCard({ image, title, desc }) {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">
      <img
        src={image}
        alt={title}
        className="h-[300px] w-full object-cover"
      />

      <div className="p-8">
        <h3
          className="text-3xl font-bold text-[#3e2723] mb-4"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          {title}
        </h3>

        <p className="text-[#6d4c41] leading-8">{desc}</p>
      </div>
    </div>
  );
}

/* ================= HOME ================= */
function Home() {
  return (
    <>
      <Hero />

      <section className="py-24 md:py-32 bg-[#f7efe7] px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* TITLE */}
          <div className="text-center mb-20">
            <span className="uppercase tracking-[5px] text-[#b18454] text-sm">
              Why Choose Us
            </span>

            <h2
              className="text-5xl md:text-6xl text-[#3e2723] mt-5 font-bold"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Wellness & Luxury
            </h2>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard
              image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
              title="Professional Therapists"
              desc="Skilled massage experts delivering premium wellness experiences."
            />

            <ServiceCard
              image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"
              title="Relaxing Experience"
              desc="Elegant atmosphere designed to calm your body and mind."
            />

            <ServiceCard
              image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
              title="Easy Booking"
              desc="Book appointments quickly through our online system."
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= PAGES ================= */
function Explore() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7efe7] text-[#3e2723] text-5xl font-bold">
      Explore Services
    </div>
  );
}

function Therapists() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-[#3e2723] text-5xl font-bold">
      Our Therapists
    </div>
  );
}

function Blog() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7efe7] text-[#3e2723] text-5xl font-bold">
      Blog & Wellness
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-[#3e2723] text-5xl font-bold">
      Contact Us
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/therapists" element={<Therapists />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}