import facebookIcon from "../assets/social-media/facebook.svg";
import githubIcon from "../assets/social-media/github.svg";
import linkedinIcon from "../assets/social-media/linkedin.svg";
import "../Styles/MediaBar.css";

function MediaBar() {
  return (
    <>
      <div className="media-bar-container">
        <div className="media-line" />
        <img className="social-media-icon" src={linkedinIcon} alt="" />
        <img className="social-media-icon" src={githubIcon} alt="" />
        <img className="social-media-icon" src={facebookIcon} alt="" />
      </div>
    </>
  );
}

export default MediaBar;
