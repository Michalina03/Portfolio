import React from 'react'
import { Linkedin, Mail, Github } from "lucide-react";

function Contact() {
  return(
    <section className="contact">
      <div className="contact__content">
        <h2 className="contact__title">Skontaktuj się ze mną</h2>
        <p className="contact__subtitle">
          Chętnie porozmawiam o projektach, pomysłach i współpracy!
        </p>

        <div className="contact__links">
          <a
            href="https://www.linkedin.com/in/michalina-janowska-24205b29b"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--linkedin"
          >
            <Linkedin size={28} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Michalina03"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--github"
          >
            <Github size={28} />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:michalina.janowska3@gmail.com"
            className="contact__link contact__link--email"
          >
            <Mail size={28} />
            <span>E-mail</span>
          </a>
        </div>
      </div>

      <div className="contact__background">
        <div className="contact__blob"></div>
      </div>
    </section>
  );
}

export default Contact