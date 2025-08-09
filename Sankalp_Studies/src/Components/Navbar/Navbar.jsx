import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/Sankalp1.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? 'text-blue-700' : 'text-black'
    } hover:text-blue-700`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-sky-300 shadow font-bold">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/studyrooms" className={navLinkClass}>Rooms</NavLink>
          <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
          <NavLink to="/licservices" className={navLinkClass}>LIC Services</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>

        {/* Hamburger icon */}
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-sky-300 space-y-3 text-sm font-medium">
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/studyrooms" className={navLinkClass} onClick={() => setIsOpen(false)}>Rooms</NavLink>
          <NavLink to="/pricing" className={navLinkClass} onClick={() => setIsOpen(false)}>Pricing</NavLink>
          <NavLink to="/licservices" className={navLinkClass} onClick={() => setIsOpen(false)}>LIC Services</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
        </div>
      )}
    </header>
  );
}
