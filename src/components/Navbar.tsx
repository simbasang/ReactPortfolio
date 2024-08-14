import "../Styles/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar-container container">
        <img src={logo} alt="logo" className="logo" />
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <Link className="nav-link" to="about" onClick={handleLinkClick}>
            About
          </Link>
          <Link className="nav-link" to="skills" onClick={handleLinkClick}>
            Skills
          </Link>
          <Link className="nav-link" to="portfolio" onClick={handleLinkClick}>
            Portfolio
          </Link>
          <Link className="nav-link" to="experience" onClick={handleLinkClick}>
            Experience
          </Link>
          <Link className="nav-link" to="contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
