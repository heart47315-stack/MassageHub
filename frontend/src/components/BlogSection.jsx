import './BlogSection.css'

const blogs = [
  {
    title:'Benefits of Thai Massage',
    image:'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1974'
  },
  {
    title:'Relaxation & Wellness',
    image:'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1974'
  },
  {
    title:'Luxury Spa Experience',
    image:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070'
  }
]

export default function BlogSection() {
  return (
    <section className="section container">

      <div className="section-title">
        <span>Blog</span>
        <h2>Latest Articles</h2>
      </div>

      <div className="blog-grid">

        {blogs.map((item,index)=>(

          <div className="card blog-card" key={index}>

            <img src={item.image} alt="" />

            <div className="blog-content">

              <h3>{item.title}</h3>

              <button className="btn">
                Read More
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}