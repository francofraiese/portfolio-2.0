import React, { useContext, useState } from "react";
import "./Contact.scss";
import LanguageData from "../../utils/LanguageData";
import { SiWhatsapp, SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import AppContext from "../../context";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [contactForm, setContactForm] = useState(initialState);
  const handleMessage = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setContactForm({ ...contactForm, [key]: value });
  };

  const { lang } = useContext(AppContext);
  const { contact } = LanguageData[lang];
  const { title, text, form, cv } = contact;

  return (
    <div id="Contact" className="contact">
      <h1 className="contact-title">
        {title.white}
        <span className="contact-text-highlight">{title.green}</span>!
      </h1>
      <div className="contact-content">
        <div className="contact-social-media">
          <h3 className="contact-text">
            {text.firstWhite}
            <span className="contact-text-highlight">
              {text.firstGreen}
            </span>{" "}
            {text.secondWhite}
            <span className="contact-text-highlight">{text.secondGreen}</span>.
          </h3>
          <div className="contact-icons">
            <a href="https://wa.me/+542235433194" target="_blank">
              <SiWhatsapp id="whatsapp" className="contact-icon" />
            </a>
            <a href="https://www.linkedin.com/in/francofraiese" target="_blank">
              <SiLinkedin id="linkedin" className="contact-icon" />
            </a>
            <a href="https://www.github.com/francofraiese/" target="_blank">
              <SiGithub id="github" className="contact-icon" />
            </a>
            <a href="mailto:fraancofraiese@gmail.com" target="_blank">
              <SiGmail id="gmail" className="contact-icon" />
            </a>
          </div>
        </div>
        <form className="contact-form">
          <div className="contact-form-div">
            <h3 className="contact-form-titles">{form.name}</h3>
            <input
              onChange={(e) => handleMessage(e)}
              name="name"
              type="text"
              className="contact-form-input"
            />
          </div>
          <div className="contact-form-div">
            <h3 className="contact-form-titles">Email</h3>
            <input
              onChange={(e) => handleMessage(e)}
              name="email"
              type="email"
              className="contact-form-input"
            />
          </div>
          <div className="contact-form-div">
            <h3 className="contact-form-titles">{form.message}</h3>
            <textarea
              name="message"
              onChange={(e) => handleMessage(e)}
              id="form-submit"
              rows={10}
              maxLength={255}
              className="contact-form-input"
            />
          </div>
          <input
            type="submit"
            value={form.submit}
            className="contact-form-send"
          />
        </form>
      <div className="names">
        <h3>{cv?.title}: </h3>
        <div className="navbar-cvs">
          <a
            href="./docs/Franco Fraiese EN CV.pdf"
            target="_blank"
            className="link-cv"
          >
            <h3 className="curriculum">{cv.en}</h3>
          </a>
          <h3 style={{ paddingLeft: 6 }}><span className="navbar-cvs-separator">|</span></h3>
          <a
            href="./docs/Franco Fraiese CV.pdf"
            target="_blank"
            className="link-cv"
          >
            <h3 className="curriculum">{cv.es}</h3>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
