import { NavLink } from "react-router-dom";

const ServicesDropdown = () => {
  return (
    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl z-50">
      <NavLink to="/services#design" className="dropdown-item">Design</NavLink>
      <NavLink to="/services#consulting" className="dropdown-item">Consulting</NavLink>
      <NavLink to="/services#building" className="dropdown-item">Building Construction</NavLink>
      <NavLink to="/services#infrastructure" className="dropdown-item">Infrastructure</NavLink>
      <NavLink to="/services#rmc" className="dropdown-item">RMC Supply</NavLink>
      <NavLink to="/services#solar" className="dropdown-item">Solar Services</NavLink>
      <NavLink to="/services#material" className="dropdown-item">Material Supplier</NavLink>
    </div>
  );
};

export default ServicesDropdown;
