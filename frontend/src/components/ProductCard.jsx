export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
        />

        {/* TAG */}
        {product.tag && (
          <span className="absolute top-5 left-5 bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] text-white text-xs uppercase tracking-[2px] px-4 py-2 rounded-full shadow-lg">
            {product.tag}
          </span>
        )}

      </div>

      {/* CONTENT */}
      <div className="p-8">

        {/* CATEGORY */}
        <p className="text-[#b18454] uppercase tracking-[3px] text-xs font-semibold">
          {product.category}
        </p>

        {/* NAME */}
        <h3
          className="text-3xl font-bold text-[#3e2723] mt-3"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          {product.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[#6d4c41] leading-8 mt-4">
          {product.description}
        </p>

        {/* PRICE */}
        <div className="flex items-center justify-between mt-8">

          <div>
            <p className="text-[#8a5a3b] text-sm">
              Starting From
            </p>

            <h4 className="text-3xl font-bold text-[#3e2723]">
              £{product.price}
            </h4>
          </div>

          {/* BUTTON */}
          <button className="bg-gradient-to-r from-[#d6a86a] to-[#8a5a3b] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Book Now
          </button>

        </div>

      </div>
    </div>
  );
}