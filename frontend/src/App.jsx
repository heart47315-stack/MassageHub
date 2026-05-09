import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

/* ================= NAVBAR ================= */
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link to="/" className="text-3xl md:text-4xl font-bold text-white"
          style={{ fontFamily: "Cormorant Garamond" }}>
          MassageHub
        </Link>

        <nav className="hidden md:flex gap-10 text-white uppercase text-xs tracking-[3px]">

          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/therapists">Therapists</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>

        </nav>

        <button className="hidden md:block bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] px-6 py-3 rounded-full text-white">
          Book Now
        </button>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-3xl">
          ☰
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-black/80 text-white p-6 flex flex-col gap-4">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/therapists">Therapists</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}

    </header>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center text-center text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2400&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl px-6">

        <h1 className="text-6xl md:text-8xl font-bold"
          style={{ fontFamily: "Cormorant Garamond" }}>
          Luxury Spa Experience
        </h1>

        <p className="mt-6 text-white/80 text-lg">
          Relax your body, refresh your mind, restore your energy.
        </p>

        <Link to="/explore"
          className="mt-10 inline-block bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] px-10 py-4 rounded-full">
          Explore Services
        </Link>

      </div>
    </section>
  );
}

/* ================= HOME (WITH IMAGES) ================= */
function Home() {

  const services = [
    {
      title: "Swedish Massage",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800"
    },
    {
      title: "Deep Tissue Therapy",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800"
    },
    {
      title: "Thai Massage",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800"
    },
    {
      title: "Hot Stone Therapy",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800"
    },
    {
      title: "Aromatherapy",
      img: "https://images.unsplash.com/photo-1556228578-dd6f16c1b2b8?w=800"
    },
    {
      title: "Sports Massage",
      img: "https://images.unsplash.com/photo-1551892589-865f69869476?w=800"
    }
  ];

  return (
    <>
      <Hero />

      <section className="py-28 bg-[#f7efe7] px-6">

        <h2 className="text-5xl text-center font-bold mb-14"
          style={{ fontFamily: "Cormorant Garamond" }}>
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {services.map((s, i) => (
            <div key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">

              <img src={s.img} className="h-52 w-full object-cover" />

              <div className="p-5 text-center font-medium text-[#3e2723]">
                {s.title}
              </div>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}

/* ================= EXPLORE ================= */
function Explore() {

  const items = [
    "Luxury Spa Session",
    "Deep Back Relief",
    "Stress Detox Therapy",
    "Full Body Healing",
    "Energy Balance Reset",
    "Head Massage",
    "Foot Reflex Relax",
    "Pregnancy Massage",
    "Muscle Recovery Boost",
    "Holistic Healing"
  ];

  return (
    <div className="min-h-screen pt-32 bg-white px-6">

      <h1 className="text-4xl text-center font-bold mb-12">Explore</h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

        {items.map((i, idx) => (
          <div key={idx}
            className="bg-[#f7efe7] p-6 rounded-xl shadow flex items-center gap-4">

            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200"
              className="w-16 h-16 rounded-full object-cover"
            />

            {i}

          </div>
        ))}

      </div>

    </div>
  );
}

/* ================= THERAPISTS ================= */
function Therapists() {

  const list = [
    { name: "Emily Carter", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300" },
    { name: "Sophie Walker", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300" },
    { name: "Olivia Bennett", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300" },
    { name: "Chloe Morgan", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" },
    { name: "Jessica Turner", img: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=300" },
    { name: "Hannah Lewis", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300" },
    { name: "Grace Wilson", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" },
    { name: "Lily Thompson", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300" },
    { name: "Mia Roberts", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300" },
    { name: "Ava Collins", img: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=300" }
  ];

  return (
    <div className="min-h-screen pt-32 bg-[#f7efe7] px-6">

      <h1 className="text-4xl text-center font-bold mb-12">Therapists</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {list.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow">

            <img src={t.img} className="h-64 w-full object-cover" />

            <div className="p-4 font-medium text-center">{t.name}</div>

          </div>
        ))}

      </div>

    </div>
  );
}

/* ================= BLOG ================= */
function Blog() {

  const posts = [
    "Massage Benefits",
    "Deep Tissue Guide",
    "Stress Relief Tips",
    "Sleep Better Guide",
    "Spa Lifestyle",
    "Muscle Recovery",
    "Aromatherapy Healing",
    "Mental Wellness",
    "Thai Massage",
    "Self Care Routine"
  ];

  return (
    <div className="min-h-screen pt-32 bg-white px-6">

      <h1 className="text-4xl text-center font-bold mb-12">Blog</h1>

      <div className="max-w-5xl mx-auto grid gap-4">

        {posts.map((p, i) => (
          <div key={i} className="bg-[#f7efe7] p-5 rounded-xl flex gap-4 items-center">

            <img
              src="https://images.unsplash.com/photo-1556228578-dd6f16c1b2b8?w=200"
              className="w-14 h-14 rounded-full object-cover"
            />

            {p}

          </div>
        ))}

      </div>

    </div>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <div className="min-h-screen pt-32 bg-[#f7efe7] px-6">

      <h1 className="text-4xl text-center font-bold mb-12">Contact</h1>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">

        <input className="w-full p-3 border mb-4 rounded" placeholder="Name" />
        <input className="w-full p-3 border mb-4 rounded" placeholder="Email" />
        <textarea className="w-full p-3 border mb-4 rounded" placeholder="Message"></textarea>

        <button className="w-full bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] text-white p-3 rounded-full">
          Send
        </button>

      </div>

    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/therapists" element={<Therapists />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}