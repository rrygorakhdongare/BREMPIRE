import { useState } from "react";
import { NavLink } from "react-router-dom";
import ServicesDropdown from "./ServicesDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import logo from "../assets/images/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <header className="navbar">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ================= Logo ================= */}
        <img
          src={logo}
          alt="BR Empire"
          className="h-12 cursor-pointer"
        />

        {/* ================= Navigation ================= */}
        <nav className="hidden md:flex items-center gap-8 font-medium">

          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>

          {/* ================= Our Services (Link + Dropdown) ================= */}
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <NavLink
              to="/services"
              className="nav-link flex items-center gap-1 hover:text-[#a855f7] transition"
            >
              Our Services
              <span className="text-sm">▾</span>
            </NavLink>

            {showServices && (
              <div className="absolute top-full left-0 mt-2 z-50">
                <ServicesDropdown />
              </div>
            )}
          </div>

          {/* ================= Our Team ================= */}
          <NavLink to="/team" className="nav-link">
            Our Team
          </NavLink>

          {/* ================= Projects Dropdown ================= */}
          <div
            className="relative"
            onMouseEnter={() => setShowProjects(true)}
            onMouseLeave={() => setShowProjects(false)}
          >
            <span className="nav-link flex items-center gap-1 cursor-pointer hover:text-[#a855f7] transition">
              Our Projects
              <span className="text-sm">▾</span>
            </span>

            {showProjects && (
              <div className="absolute top-full left-0 mt-2 z-50">
                <ProjectsDropdown />
              </div>
            )}
          </div>

          <NavLink to="/careers" className="nav-link">
            Career
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact Us
          </NavLink>

        </nav>

        {/* ================= CTA ================= */}
        <button className="reach-btn">
          Reach Us →
        </button>
      </div>
    </header>
  );
};

export default Navbar;
