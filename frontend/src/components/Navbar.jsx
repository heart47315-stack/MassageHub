import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Cozy Street
      </div>

      <div className="nav-links">
        <a href="">Home</a>
        <a href="">Explore</a>
        <a href="">Therapists</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>

      <button className="btn">
        Book Now
      </button>
    </nav>
  )
}