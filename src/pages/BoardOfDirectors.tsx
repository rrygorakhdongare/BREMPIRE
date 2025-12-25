import React from "react";

/* ================= TYPES ================= */
interface Director {
  name: string;
  role: string;
  image: string;
  education: string;
  specialization: string;
  projects: string;
  experience: string;
  achievements?: string;
}

/* ================= DATA ================= */
const DIRECTORS: Director[] = [
  {
    name: "Bhavana Rajendra Shelar",
    role: "Director",
    image: "/src/assets/images/team/bhavana.jpg",
    education: "B.Tech (Civil)",
    specialization: "Architecture, Design, Planning, and Consulting",
    projects: "Residential, Commercial, Industrial, and Infrastructure projects",
    experience: "7+ years",
    achievements:
      "With 7+ years of experience, Bhavana has proven expertise in delivering high-quality residential and commercial projects with timely execution, ensuring client satisfaction and adherence to industry standards.",
  },
  {
    name: "Rama Popat Aanap",
    role: "Director",
    image: "/src/assets/images/team/rama.jpg",
    education: "DCE",
    specialization: "Work Execution and Fund Management",
    projects: "Residential, Commercial, Industrial, and Infrastructure projects",
    experience: "5+ years",
    achievements:
      "With 5+ years of experience, Rama is skilled in managing large-scale projects and budgets efficiently, with a strong record of executing government and private sector works with precision and reliability.",
  },
  {
    name: "Ajinkya Pathade",
    role: "Joint Director",
    image: "/src/assets/images/team/ajinkya.jpg",
    education: "B.Tech (Civil)",
    specialization: "Road Infrastructure",
    projects:
      "NHAI, Metro, Railways, PWD, ZP, Infrastructure, Residential, Commercial, and Industrial projects",
    experience: "10+ years",
    achievements:
      "10+ years of experience in infrastructure, RMC, industrial, and solar projects. Proven track record in executing government tenders and private sector works with quality and timely delivery. Trusted by clients like MES, warehousing corporations, BPCL, and HPCL for reliable project execution.",
  },
  {
    name: "Sanket Deore",
    role: "Independent Director",
    image: "/src/assets/images/team/sanket.jpg",
    education: "Civil Engineer",
    specialization: "Work Execution",
    projects: "Residential, Commercial, Industrial, and Infrastructure projects",
    experience: "5+ years",
    achievements:
      "With 5+ years of experience, Sanket is experienced in managing diverse construction projects, ensuring quality control, timely delivery, and client satisfaction across multiple sectors.",
  },
];

/* ================= COMPONENT ================= */
const BoardOfDirectors: React.FC = () => {
  return (
    <section className="bg-gray-50 px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#a855f7] mb-6">
          Board of Directors
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          The Board of Directors at <strong>BR Empire</strong> brings deep technical
          expertise, strong leadership, and a commitment to excellence across all
          infrastructure and construction projects.
        </p>

        {/* Director Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {DIRECTORS.map((director) => {
            const { name, role, image, education, specialization, projects, achievements } = director;
            return (
              <article
                key={name}
                className="bg-white rounded-3xl shadow-md overflow-hidden
                           hover:shadow-xl transition-shadow duration-300
                           border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="h-[320px] overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover
                               hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                  <p className="text-[#a855f7] font-semibold text-sm uppercase tracking-wide mt-1 mb-4">
                    {role}
                  </p>

                  <div className="text-gray-700 text-sm text-left space-y-2">
                    <p>
                      <strong>Education:</strong> {education}
                    </p>
                    <p>
                      <strong>Specialization:</strong> {specialization}
                    </p>
                    <p>
                      <strong>Project Handling:</strong> {projects}
                    </p>
                    <p>
                      <strong>Achievements:</strong> {achievements}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
