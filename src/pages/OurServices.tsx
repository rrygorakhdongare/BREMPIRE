import React from "react";
import { servicesData } from "../data/servicesData";

const OurServices: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-16 text-[#a855f7]">
          Our Services
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}   // ⭐ IMPORTANT
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
