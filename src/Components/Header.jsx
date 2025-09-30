import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`header ${isHomePage ? "overlay" : "normal"}`}>
        <NavLink to="/"><img src="/Icons/Logo.png" alt="Company Logo" className="logo" /></NavLink>
        <nav className="nav">
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setIsOpen(false)}>Contact
            </NavLink>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? "change" : ""}`}></div>
            <div className={`bar ${isOpen ? "change" : ""}`}></div>
            <div className={`bar ${isOpen ? "change" : ""}`}></div>
          </div>
        </nav>
      </header>
    </>
  );
}

