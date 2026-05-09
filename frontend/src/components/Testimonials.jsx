import "./Testimonials.css";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sophia Williams",
      location: "London, UK",
      review:
        "Absolutely amazing experience. The atmosphere was luxurious and the therapist was highly professional.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      name: "Emma Johnson",
      location: "Manchester, UK",
      review:
        "One of the best massage experiences I’ve ever had. I felt relaxed immediately after the session.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      name: "Olivia Brown",
      location: "Birmingham, UK",
      review:
        "Beautiful ambience, friendly staff, and premium service quality. Highly recommended.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="testimonials-section">

      <div className="testimonials-header">

        <span className="testimonials-subtitle">
          Client Reviews
        </span>

        <h2 className="testimonials-title">
          What Our Clients Say
        </h2>

      </div>

      <div className="testimonials-grid">

        {reviews.map((item) => (
          <div key={item.id} className="testimonial-card">

            <img
              src={item.image}
              alt={item.name}
              className="testimonial-image"
            />

            <div className="testimonial-content">

              <p className="testimonial-review">
                “{item.review}”
              </p>

              <h3 className="testimonial-name">
                {item.name}
              </h3>

              <p className="testimonial-location">
                {item.location}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}