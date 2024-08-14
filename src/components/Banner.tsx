import mePicture from "../assets/me.png";
import "../Styles/Banner.css";
import MediaBar from "./MediaBar";
import { Link } from "react-scroll";
function Banner() {
  return (
    <>
      <div className="container banner-top-conmtainer">
        <div className="banner-container ">
          <div className="banner-text ">
            <h1>
              I'm <span className="highlight-bold"> SEBASTIAN</span>
            </h1>
            <h2>Fullstack developer </h2>
            <button className="main-button">
              <Link className="nav-link" to="contact">
                Contact Me
              </Link>
            </button>
          </div>
          <img className="banner-picture" src={mePicture} alt="" />
        </div>
        <MediaBar />
      </div>
    </>
  );
}

export default Banner;
