import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import OurServices from "../pages/OurServices";
import OurProjects from "../pages/OurProjects";
import BoardOfDirectors from "../pages/BoardOfDirectors";
import Careers from "../pages/Careers";
import ContactUs from "../pages/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/projects" element={<OurProjects />} />
      <Route path="/team" element={<BoardOfDirectors />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;
