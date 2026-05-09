export default function TherapistCard({ therapist }) {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

      {/* IMAGE */}
      <img
        src={therapist.image}
        alt={therapist.name}
        className="w-full h-[350px] object-cover"
      />

      {/* CONTENT */}
      <div className="p-8">

        {/* NAME */}
        <h3
          className="text-3xl font-bold text-[#3e2723]"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          {therapist.name}
        </h3>

        {/* LOCATION */}
        <p className="text-[#8a5a3b] mt-2 font-medium">
          📍 {therapist.location}
        </p>

        {/* SERVICES */}
        <div className="mt-5">

          <p className="font-semibold text-[#3e2723] mb-3">
            Services
          </p>

          <div className="flex flex-wrap gap-2">

            {therapist.services.map((service, index) => (
              <span
                key={index}
                className="bg-[#f3e4d7] text-[#6d4c41] px-4 py-2 rounded-full text-sm"
              >
                {service}
              </span>
            ))}

          </div>
        </div>

        {/* CONTACT */}
        <div className="mt-6 space-y-2 text-[#5d4037]">

          <p>📞 {therapist.contact}</p>

          {therapist.whatsapp && (
            <p>💬 WhatsApp: {therapist.whatsapp}</p>
          )}

          {therapist.instagram && (
            <p>📷 Instagram: {therapist.instagram}</p>
          )}

          {therapist.telegram && (
            <p>✈ Telegram: {therapist.telegram}</p>
          )}

          {therapist.facebook && (
            <p>📘 Facebook: {therapist.facebook}</p>
          )}

          {therapist.email && (
            <p>📧 {therapist.email}</p>
          )}

          {therapist.line && (
            <p>💚 LINE: {therapist.line}</p>
          )}
        </div>

        {/* BUTTON */}
        <button className="w-full mt-8 bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] text-white py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
          Book Appointment
        </button>

      </div>
    </div>
  );
}