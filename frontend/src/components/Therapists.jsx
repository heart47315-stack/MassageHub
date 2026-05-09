import therapists from "../data/therapists";

function Therapists() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      {therapists.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-72 object-cover"
          />

          <div className="p-5">
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>

            <p className="text-gray-600 mb-2">
              📍 {item.location}
            </p>

            <p className="mb-2">
              💆 {item.services.join(", ")}
            </p>

            <p className="mb-2">
              📞 {item.contact}
            </p>

            {item.whatsapp && (
              <p className="mb-1">
                WhatsApp: {item.whatsapp}
              </p>
            )}

            {item.instagram && (
              <p className="mb-1">
                Instagram: {item.instagram}
              </p>
            )}

            {item.telegram && (
              <p className="mb-1">
                Telegram: {item.telegram}
              </p>
            )}

            {item.facebook && (
              <p className="mb-1">
                Facebook: {item.facebook}
              </p>
            )}

            {item.email && (
              <p className="mb-1">
                Email: {item.email}
              </p>
            )}

            {item.line && (
              <p className="mb-1">
                Line: {item.line}
              </p>
            )}

            <button className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Therapists;