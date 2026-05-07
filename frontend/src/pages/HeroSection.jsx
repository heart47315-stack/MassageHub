import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-subtitle">
          Relax • Unwind • Discover
        </p>

        <h1>
          Find Your Perfect
          Massage Experience
        </h1>

        <p>
          Discover trusted massage therapists
          and wellness services near you.
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search massage services..."
          />

          <button className="btn">
            Search
          </button>

        </div>

      </div>

    </section>
  )
}