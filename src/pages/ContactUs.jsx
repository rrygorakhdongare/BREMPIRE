import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gray-50 fade-in">
      <div className="px-6 py-24 max-w-7xl mx-auto">

        {/* ================= TITLE: Decreased Font Size ================= */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#a855f7] text-center uppercase tracking-tight">
          Contact Us
        </h2>

        {/* ================= CONTACT + MAP ================= */}
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 grid md:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Details */}
          <div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Have questions? Need reliable premium concrete supply? <br />
              <strong className="text-gray-900">BR Empire</strong> is here to support your construction needs.
            </p>

            <div className="space-y-6 text-gray-800">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-[#a855f7] transition-colors duration-300">
                  <Phone className="text-[#a855f7] group-hover:text-white transition-colors" size={24} />
                </div>
                <p className="font-semibold text-gray-700">Phone: +91 8806468402</p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-[#a855f7] transition-colors duration-300">
                  <Mail className="text-[#a855f7] group-hover:text-white transition-colors" size={24} />
                </div>
                <p className="font-semibold text-gray-700">Email: info@brempirepvt.com</p>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#a855f7] transition-colors duration-300">
                  <MapPin className="text-[#a855f7] group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="font-semibold text-gray-700 leading-relaxed">
                  Head Office:<br />
                  <span className="font-normal text-gray-600">
                    1st Floor, Laxmi Enclave, Lane No. 2,<br />
                    Sharanpur Road, Next to Chai Tapri Cafe,<br />
                    Pandit Colony, Nashik,<br />
                    Maharashtra – 422002
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-[360px] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <iframe
              title="BR Empire Head Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.123456789!2d73.77!3d19.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzI0LjAiTiA3M8KwNDYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* ================= BRANCH OFFICES ================= */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Our Branch Offices
          </h3>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Branch 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 group">
              <h4 className="text-lg font-bold mb-4 text-[#a855f7] tracking-wide uppercase">
                NASHIK – HEAD OFFICE
              </h4>
              <p className="text-gray-600 leading-relaxed font-medium">
                1st Floor, Laxmi Enclave, Lane No. 2,<br />
                Sharanpur Road, Next to Chai Tapri Cafe,<br />
                Pandit Colony, Nashik,<br />
                Maharashtra – 422002
              </p>
            </div>

            {/* Branch 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 group">
              <h4 className="text-lg font-bold mb-4 text-[#a855f7] tracking-wide uppercase">
                NASHIK – BRANCH OFFICE
              </h4>
              <p className="text-gray-600 leading-relaxed font-medium">
                Gat No.565,<br />
                Bhangare Mala,Shinde<br />
                Nashik,<br />
                Maharashtra
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;