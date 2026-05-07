import './Explore.css'

const therapists = [
  {
    name:'Sophia',
    location:'London',
    image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974'
  },
  {
    name:'Emma',
    location:'Manchester',
    image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1970'
  },
  {
    name:'Olivia',
    location:'Birmingham',
    image:'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1974'
  }
]

export default function Explore() {
  return (
    <section className="section container">

      <div className="section-title">
        <span>Featured</span>
        <h2>Top Therapists</h2>
      </div>

      <div className="therapist-grid">

        {therapists.map((item,index)=>(

          <div className="card therapist-card" key={index}>

            <img src={item.image} alt="" />

            <div className="therapist-content">

              <h3>{item.name}</h3>

              <p>{item.location}</p>

              <button className="btn">
                View Profile
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}