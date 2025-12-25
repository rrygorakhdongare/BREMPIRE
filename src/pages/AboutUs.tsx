import React from "react";
import {
  Eye,
  Target,
  ShieldCheck,
  Users,
  Clock,
  Smile,
  Award,
  Layers,
  Truck,
  Leaf,
  Handshake
} from "lucide-react";
import aboutImg from "../assets/images/about-us.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 overflow-hidden font-sans">

      {/* ================= ABOUT SECTION ================= */}
      <div className="min-h-screen py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#a855f7] mb-6">
              About Us
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Delivering comprehensive construction and infrastructure solutions
              with quality, precision, and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                BR Empire Pvt. Ltd.
              </h2>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At <strong className="text-gray-900">BR Empire Private Limited</strong>,
                we believe strong foundations build stronger futures. We deliver
                world-class infrastructure solutions with quality, innovation,
                and reliability.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Material Supply Excellence
              </h3>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We are a trusted supplier of high-quality construction and
                infrastructure materials, ensuring timely procurement, quality
                assurance, and seamless logistics.
              </p>

              <ul className="space-y-4">
                {[
                  "Certified construction materials & aggregates",
                  "Strict quality testing & compliance standards",
                  "Efficient logistics & on-time delivery",
                  "Support for residential, commercial & infrastructure projects",
                  "Reliable supply chain management",
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <span className="w-7 h-7 bg-[#a855f7] text-white rounded-full flex items-center justify-center font-bold shadow-md">
                      ✓
                    </span>
                    <span className="text-gray-700 text-lg hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative flex justify-center">
              <div className="absolute -inset-6 bg-purple-100 blur-3xl opacity-30"></div>
              <div className="relative animate-bounce-slow">
                <div className="absolute inset-0 bg-[#a855f7] rounded-3xl -z-10 translate-x-6 translate-y-6 shadow-xl"></div>
                <img
                  src={aboutImg}
                  alt="About BR Empire"
                  className="rounded-3xl shadow-2xl w-full max-w-md lg:max-w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= VISION & MISSION ================= */}
      <div className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-[#1e1b4b] text-white rounded-3xl p-12 text-center shadow-xl border border-gray-800">
            <div className="w-16 h-16 bg-[#a855f7] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/20">
              <Eye size={30} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be a trusted leader in infrastructure by delivering sustainable,
              innovative, and reliable construction solutions.
            </p>
          </div>

          <div className="bg-[#1e1b4b] text-white rounded-3xl p-12 text-center shadow-xl border border-gray-800">
            <div className="w-16 h-16 bg-[#a855f7] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/20">
              <Target size={30} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To deliver high-quality infrastructure services with integrity,
              technical excellence, and customer satisfaction.
            </p>
          </div>

        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#a855f7] font-semibold tracking-widest uppercase text-sm mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Trust. Delivering Value.
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-16 leading-relaxed">
            BR Empire Pvt. Ltd. combines engineering expertise, quality-driven
            execution, and a customer-first approach to deliver dependable
            infrastructure solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Handshake, title: "Trust & Integrity", desc: "Transparent communication and ethical practices at every stage." },
              { icon: Award, title: "Engineering Excellence", desc: "Experienced engineers delivering precise and efficient solutions." },
              { icon: ShieldCheck, title: "Quality & Safety", desc: "Strict quality control and safety compliance across all projects." },
              { icon: Layers, title: "Reliable Materials", desc: "Certified materials sourced from trusted vendors." },
              { icon: Truck, title: "Timely Delivery", desc: "Disciplined planning ensures on-time project completion." },
              { icon: Users, title: "Customer-Centric", desc: "Customized solutions aligned with client goals." },
              { icon: Leaf, title: "Sustainable Practices", desc: "Eco-conscious, future-ready infrastructure development." },
              { icon: Smile, title: "Client Satisfaction", desc: "Exceeding expectations and building long-term relationships." },
              { icon: Clock, title: "Efficient Execution", desc: "Optimized workflows for speed, accuracy, and consistency." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#a855f7] flex items-center justify-center shadow-md">
                  <item.icon size={30} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#a855f7] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default AboutUs;
