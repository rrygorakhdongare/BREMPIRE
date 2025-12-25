import React, { useState } from "react";

/* ================= PROJECT DATA ================= */
type ProjectStatus = "all" | "ongoing" | "completed";

const projects = [
  {
    title: "Residential Project",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    status: "ongoing",
  },
  {
    title: "Commercial Complex",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    status: "completed",
  },
  {
    title: "Infrastructure Development",
    image: "https://images.unsplash.com/photo-1496560736447-2d7f1b58b9b8",
    status: "ongoing",
  },
  {
    title: "Industrial Plant",
    image: "https://images.unsplash.com/photo-1581092919534-9a5b2d1c6c5d",
    status: "completed",
  },
  {
    title: "Road Construction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    status: "ongoing",
  },
  {
    title: "Mixed Use Development",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41",
    status: "completed",
  },
];

const filters: { label: string; value: ProjectStatus }[] = [
  { label: "All Projects", value: "all" },
  { label: "Ongoing Projects", value: "ongoing" },
  { label: "Completed Projects", value: "completed" },
];

/* ================= COMPONENT ================= */
const OurProjects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectStatus>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.status === filter);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* ================= HEADER ================= */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#a855f7] mb-6">
          Our Projects
        </h2>

        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Delivering comprehensive construction and infrastructure projects
          with quality, precision, and trust.
        </p>

        {/* ================= FILTER TABS ================= */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {filters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium
                          transition-all duration-200
                          ${
                            filter === item.value
                              ? "bg-purple-600 text-white shadow-md"
                              : "bg-white text-gray-700 border border-gray-300 hover:border-purple-400"
                          }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ================= PROJECT CARDS ================= */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden
                         shadow-sm hover:shadow-xl transition-all duration-300
                         border border-gray-100 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <span
                  className={`text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full
                    ${
                      project.status === "ongoing"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                >
                  {project.status === "ongoing"
                    ? "Ongoing"
                    : "Completed"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= EMPTY STATE ================= */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects found.
          </p>
        )}
      </div>
    </section>
  );
};

export default OurProjects;
