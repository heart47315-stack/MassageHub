export default function TherapistCard({ therapist }) {
  return (
    <div className="card therapist-card">
      <img src={therapist.image} alt="" />

      <div className="content">
        <h3>{therapist.name}</h3>

        <p>{therapist.location}</p>

        <button className="btn">
          View Profile
        </button>
      </div>
    </div>
  )
}