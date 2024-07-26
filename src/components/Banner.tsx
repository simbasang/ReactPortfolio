import mePicture from "../assets/mesmall.png";
import "../Styles/Banner.css";
import MediaBar from "./MediaBar";

function Banner() {
  return (
    <>
      <div className="banner-container  ">
        <div className="banner-text ">
          <h1>
            I'm <span className="highlight-bold"> SEBASTIAN</span>
          </h1>
          <h2>Fullstack developer </h2>
          <button className="contact-button">Contact Me</button>
        </div>
        <img className="banner-picture" src={mePicture} alt="" />
        <MediaBar />
      </div>
    </>
  );
}

export default Banner;
