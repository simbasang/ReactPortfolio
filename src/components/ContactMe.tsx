import "../Styles/ContactMe.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function ContactMe() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5hdivlp", "template_tptp13o", form.current!, {
        publicKey: "ehhIO_sKrkkM6deEs",
      })
      .then(
        () => {
          toast.success("Successfully sent!");
          form.current!.reset();
        },
        (error) => {
          toast.error("somthing went wrong pleas try again");
        }
      );
  };

  return (
    <>
      <div className="light-gray">
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
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Name"></input>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                ></input>
                <input type="text" name="subject" placeholder="Subject"></input>
                <textarea name="message" placeholder="Message"></textarea>
                <button className="main-button" value="Send" type="submit">
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
