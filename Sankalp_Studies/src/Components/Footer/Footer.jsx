// Footer.jsx
import React from "react";
import { Link } from "react-router";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            संकल्प अभ्यासिका
          </h2>
          <p className="text-sm leading-relaxed">
            A peaceful study point for students, offering clean facilities,
            high-speed Wi-Fi, and a focused environment. We also provide LIC
            services for your financial security.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/licservices" className="hover:text-white transition">
                LicServices
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Sankalp Study Point, Nanded, Maharashtra</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <a href="tel:+91 8857850611">
              +91 8857850611</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:maheshgopchhade@gmail.com">
                contact@studypoint.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
  <p>
    © {new Date().getFullYear()} संकल्प अभ्यासिका | All Rights Reserved
  </p>
  <p className="mt-1">
    This webapp is created with <span className="text-red-500">❤️</span> by Gopchade Omkar | 
    Contact: <a href="tel:9689158926" className="text-blue-400 hover:underline">9689158926</a>
  </p>
</div>

    </footer>
  );
};

export default Footer;
