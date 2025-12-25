import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#243a7d] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* LEFT INFO */}
        <div className="flex flex-wrap items-center gap-4">

          {/* Phone */}
          <a
            href="tel:+918806468402"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <Phone size={14} /> +91 8806468402
          </a>

          {/* Email */}
          <a
            href="mailto:brempirepvt@gmail.com"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <Mail size={14} /> brempirepvt@gmail.com
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps?q=Nashik+Maharashtra+India"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <MapPin size={14} /> Nashik Maharashtra (India)
          </a>

        </div>

        {/* RIGHT SOCIAL */}
        <div className="flex items-center gap-3">

          <span className="hidden md:block text-xs md:text-sm">
            Building Trust, Delivering Excellence
          </span>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Facebook size={16} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Instagram size={16} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Linkedin size={16} />
          </a>

        </div>

      </div>
    </div>
  );
};

export default TopBar;
