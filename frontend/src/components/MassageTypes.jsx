import './MassageTypes.css'

const types = [
  {
    title:'Thai Massage',
    image:'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974'
  },
  {
    title:'Oil Massage',
    image:'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1974'
  },
  {
    title:'Aromatherapy',
    image:'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1974'
  }
]

export default function MassageTypes() {
  return (
    <section className="section container">

      <div className="section-title">
        <span>Categories</span>
        <h2>Massage Services</h2>
      </div>

      <div className="types-grid">

        {types.map((item,index)=>(

          <div className="card type-card" key={index}>

            <img src={item.image} alt="" />

            <div className="type-content">

              <h3>{item.title}</h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}