import "../Styles/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="menu">
          <Link className="nav-link" to="about">
            About
          </Link>
          <Link className="nav-link" to="skills">
            Skills
          </Link>
          <Link className="nav-link" to="portfolio">
            Portfolio
          </Link>
          <Link className="nav-link" to="experience">
            Experience
          </Link>
          <Link className="nav-link" to="contact">
            Contact
          </Link>
        </div>
        <h1></h1>
      </nav>
    </>
  );
}

export default Navbar;
