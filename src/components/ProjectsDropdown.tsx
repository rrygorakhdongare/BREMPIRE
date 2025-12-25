import { NavLink } from "react-router-dom";
import "./navbar.css";

const ProjectsDropdown = () => {
  return (
    <div className="dropdown">
      <NavLink to="/projects/ongoing">
        Ongoing Projects
      </NavLink>
      <NavLink to="/projects/completed">
        Completed Projects
      </NavLink>
    </div>
  );
};

export default ProjectsDropdown;
