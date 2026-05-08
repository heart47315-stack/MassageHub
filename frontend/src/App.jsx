import { Routes, Route, Link } from "react-router-dom";

/* ================= NAVBAR ================= */
function Navbar() {
  return (
    <nav className="bg-[#3e2723] text-white px-8 py-5 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">MassageHub</h1>

      <div className="flex gap-6 text-sm md:text-base">
        <Link to="/" className="hover:text-[#d7ccc8] transition">Home</Link>
        <Link to="/explore" className="hover:text-[#d7ccc8] transition">Explore</Link>
        <Link to="/therapists" className="hover:text-[#d7ccc8] transition">Therapists</Link>
        <Link to="/blog" className="hover:text-[#d7ccc8] transition">Blog</Link>
        <Link to="/contact" className="hover:text-[#d7ccc8] transition">Contact</Link>
      </div>
    </nav>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="min-h-[85vh] bg-[#efebe9] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-[#3e2723] mb-6">
        Relax Your Body
      </h1>

      <p className="max-w-2xl text-[#5d4037] text-lg md:text-xl mb-8">
        Professional massage therapists ready to help you relax, recover, and feel your best.
      </p>

      <div className="flex gap-4">
        <Link
          to="/explore"
          className="bg-[#5d4037] text-white px-8 py-4 rounded-full hover:bg-[#4e342e] transition"
        >
          Explore Services
        </Link>

        <Link
          to="/contact"
          className="border-2 border-[#5d4037] text-[#5d4037] px-8 py-4 rounded-full hover:bg-[#5d4037] hover:text-white transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

/* ================= HOME ================= */
function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#3e2723] mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#efebe9] p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Professional Therapists</h3>
            <p>Highly trained massage specialists with years of experience.</p>
          </div>

          <div className="bg-[#efebe9] p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Relaxing Experience</h3>
            <p>Comfortable environment designed for full relaxation.</p>
          </div>

          <div className="bg-[#efebe9] p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Easy Booking</h3>
            <p>Book appointments quickly with our online system.</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= PAGES ================= */
function Explore() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#efebe9] text-4xl font-bold">
      Explore Services
    </div>
  );
}

function Therapists() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-4xl font-bold">
      Our Therapists
    </div>
  );
}

function Blog() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#efebe9] text-4xl font-bold">
      Blog & Wellness
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-4xl font-bold">
      Contact Us
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <div className="font-sans">
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