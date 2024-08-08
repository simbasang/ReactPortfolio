import "../Styles/MediaBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function MediaBar() {
  return (
    <>
      <div className="media-bar-container">
        <div className="media-line" />
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
          href="https://www.facebook.com/profile.php?id=61564167504236"
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
    </>
  );
}

export default MediaBar;
