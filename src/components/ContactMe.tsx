import "../Styles/ContactMe.css";

function ContactMe() {
  return (
    <>
      <div className="background-color-2">
        <div className="container">
          <h1 className="headline">Contact me</h1>
          <div className="contact-container">
            <div className="contact-info">
              <p>
                <span className="label">PHONE:</span> <br></br> +46 72-3415884
              </p>
              <p>
                <span className="label">ADDRESS:</span> <br></br> Göteborg
              </p>
              <p>
                <span className="label">EMAIL:</span> <br></br>{" "}
                sebastian.englund92@gmail.com
              </p>
            </div>
            <div className="contact-form">
              <form>
                <input type="text" name="name" placeholder="Name"></input>
                <input type="email" name="email" placeholder="Email"></input>
                <input type="text" name="subject" placeholder="Subject"></input>
                <textarea name="message" placeholder="Message"></textarea>
                <button className="main-button" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
