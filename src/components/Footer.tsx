import "../Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="background-color-2">
        <div className="footer-container">
          <a
            href="https://www.linkedin.com/in/sebastian-englund-b73955194/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="social-media-icon"
              icon={faLinkedin}
              style={{ color: "#ffffff" }}
            />
          </a>
          <a
            href="https://github.com/simbasang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="social-media-icon"
              icon={faGithub}
              style={{ color: "#ffffff" }}
            />
          </a>
          <a
            href="https://www.facebook.com/sebastian.l.englund/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="social-media-icon"
              icon={faFacebook}
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
