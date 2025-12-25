import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Slide Images */
import slide1 from "../assets/images/slides/slide1.jpg";
import slide2 from "../assets/images/slides/slide2.jpg";
import slide3 from "../assets/images/slides/slide3.jpg";
import slide4 from "../assets/images/slides/slide4.jpg";
import slide5 from "../assets/images/slides/slide5.jpg";
import slide6 from "../assets/images/slides/slide6.jpg";
import slide7 from "../assets/images/slides/slide7.jpg";

const slides = [
  { image: slide1, title: "Bridging Gaps", subtitle: "Building the future with strength & trust" },
  { image: slide2, title: "Engineering Excellence", subtitle: "Innovation in Construction & Infrastructure" },
  { image: slide3, title: "Strength in Design", subtitle: "Delivering projects that last generations" },
  { image: slide4, title: "Sustainable Solutions", subtitle: "Eco-friendly construction for a better tomorrow" },
  { image: slide5, title: "Smart Infrastructure", subtitle: "Integrating technology for efficient projects" },
  { image: slide6, title: "Reliable Partnerships", subtitle: "Working with trusted suppliers and contractors" },
  { image: slide7, title: "Innovative Techniques", subtitle: "Applying modern methods for superior results" },
];

const HomePage: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goToSlide = (index: number) => setCurrent(index);

  return (
    <>
      {/* ================= HERO SLIDER ================= */}
      <main className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute top-0 right-0 h-full w-full md:w-2/5 bg-black/65 backdrop-blur-sm" />
            {index === current && (
              <div className="relative z-10 h-full flex items-center justify-end">
                <div className="w-full md:w-2/5 px-10 text-white">
                  <p
                    className="uppercase tracking-[0.2em] mb-4 text-3xl font-extrabold"
                    style={{
                      background: "linear-gradient(to right, #e9d5ff, #a855f7, #d8b4fe)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: '"Cinzel", serif',
                    }}
                  >
                    BR Empire
                  </p>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-300 max-w-md">{slide.subtitle}</p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Slider Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#a855f7] text-white p-3 rounded-xl hover:bg-purple-600"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#a855f7] text-white p-3 rounded-xl hover:bg-purple-600"
        >
          <ChevronRight size={28} />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 w-full flex justify-center gap-3 z-20">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "bg-[#a855f7]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </main>

      {/* ================= MATERIAL SUPPLY EXCELLENCE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Material Supply Excellence</h2>
            <p className="text-gray-600 text-lg mb-8">
              We are a trusted supplier of high-quality construction and infrastructure materials, ensuring timely
              procurement, quality assurance, and seamless logistics.
            </p>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold">✓</span> Certified construction materials & aggregates
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold">✓</span> Strict quality testing & compliance standards
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold">✓</span> Efficient logistics & on-time delivery
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold">✓</span> Support for residential, commercial & infrastructure projects
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold">✓</span> Reliable supply chain management
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-3xl p-10 shadow-inner">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">End-to-End Material Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              From sourcing to site delivery, BR Empire ensures consistency, transparency, and efficiency across the entire supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT / MISSION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src={slide4} alt="About BR Empire" className="rounded-3xl shadow-lg" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-4">
              BR Empire is committed to delivering high-quality infrastructure solutions, prioritizing safety, sustainability, and innovation.
            </p>
            <p className="text-gray-600 text-lg">
              We aim to create long-lasting value for communities and clients by combining expert engineering with trusted partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We provide a wide range of construction and infrastructure services to meet every project need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">Construction Management</h3>
              <p className="text-gray-700">Comprehensive planning, supervision, and execution for successful projects.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">Infrastructure Development</h3>
              <p className="text-gray-700">Building roads, bridges, and utilities with precision and reliability.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">Material Supply</h3>
              <p className="text-gray-700">High-quality materials delivered efficiently for all types of projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20 bg-[#a855f7] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8">Contact BR Empire today and let’s build something extraordinary together.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#a855f7] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
