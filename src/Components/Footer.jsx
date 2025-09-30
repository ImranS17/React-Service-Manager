import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <NavLink to="/"><img src="/Icons/Logo.png" alt="Company Logo" className="footer-logo" /></NavLink>
            <h4>Indulge in aromatherapy massage, facial treatments, yoga sessions, and spa therapies for complete relaxation.</h4>
            <div className="social-icons">
              <img src="/Icons/facebook.png" alt="Facebook Logo" />
              <img src="/Icons/insta.png" alt="Insta Logo" />
            </div>
          </div>
          <div className="footer-col1">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
          </div>
        </div>
        {/* Bottom Bar */}
        <section className="footer-bottom">
          <p>Copyright © {new Date().getFullYear()} Service Manager | All rights reserved.</p>
        </section>
      </footer>
    </>
  );
}
