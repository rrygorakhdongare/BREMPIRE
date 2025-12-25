import React from "react";
import { Briefcase, MapPin, Mail, ArrowRight } from "lucide-react";

/* ================= JOB DATA ================= */
const JOBS = [
  {
    title: "Site Engineer",
    location: "Nashik",
    type: "Full Time",
  },
  {
    title: "Sales Executive",
    location: "Maharashtra",
    type: "Full Time",
  },
  {
    title: "Accounts Executive",
    location: "Nashik",
    type: "Full Time",
  },
];

/* ================= COMPONENT ================= */
const Careers: React.FC = () => {
  return (
    <section className="bg-gray-50 fade-in">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <Briefcase className="mx-auto text-purple-600 mb-6" size={54} />

        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#a855f7] text-center">
          Careers at BR Empire
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Build your career with{" "}
          <strong className="text-gray-900">BR Empire Pvt. Ltd.</strong> — a company
          driven by innovation, integrity, and engineering excellence.
          We believe our people are our strongest foundation.
        </p>
      </div>

      {/* ================= JOB OPENINGS ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Current Openings
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className="bg-white rounded-3xl p-8 border border-gray-100
                         shadow-sm hover:shadow-xl transition-all duration-300
                         flex flex-col group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#a855f7] transition-colors">
                {job.title}
              </h3>

              <div className="text-gray-500 space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-[#a855f7]" />
                  <span className="font-medium text-gray-600">{job.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-[#a855f7]" />
                  <span className="font-medium text-gray-600">{job.type}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 flex-grow">
                We are looking for motivated professionals ready to contribute
                to high-quality construction and infrastructure projects.
              </p>

              <a
                href="mailto:info@brempirepvt.com"
                className="inline-flex items-center justify-center gap-2
                           px-5 py-3 bg-[#a855f7] text-white rounded-xl
                           font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-purple-200"
              >
                Apply Now <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build the Future With Us?
          </h2>

          <p className="text-gray-400 mb-8 text-lg">
            Send your resume and portfolio to our HR team and take the next step
            in your professional journey with BR Empire.
          </p>

          <a
            href="mailto:info@brempirepvt.com"
            className="inline-flex items-center gap-3
                       px-8 py-4 bg-[#a855f7] rounded-full
                       font-bold text-white hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            info@brempirepvt.com
          </a>
        </div>
      </div>

    </section>
  );
};

export default Careers;
