import { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/services`);
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Failed to load services");
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-900">
            Tailoring Services
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Discover expert tailors and premium stitching services
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-2xl shadow hover:shadow-2xl transition overflow-hidden"
            >
              {/* IMAGE */}
     <img
  src={`${process.env.REACT_APP_API_URL}${service.image}`}
  alt={service.title}
  className="h-56 w-full object-cover rounded-t-2xl"
/>


              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {service.description}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  Tailor:{" "}
                  <span className="font-semibold">
                    {service.provider?.name || "Expert Tailor"}
                  </span>
                </p>

                <div className="flex justify-between items-center mt-5">
                  <span className="text-lg font-bold text-yellow-500">
                    ₹ {service.price}
                  </span>

                  <a
                    href="/appointment"
                    className="bg-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
