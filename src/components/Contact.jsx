import React, { useState } from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const ContactLink = ({ href, Icon, label, external, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className={`contact__link contact__link--${label.toLowerCase()}`}
  >
    <Icon size={28} />
    <span>{label}</span>
  </a>
);

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'michalina.janowska3@gmail.com';

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, '_blank');
  };

  const links = [
    {
      href: 'https://www.linkedin.com/in/michalina-janowska-24205b29b',
      Icon: Linkedin,
      label: 'LinkedIn',
      external: true
    },
    {
      href: 'https://github.com/Michalina03',
      Icon: Github,
      label: 'GitHub',
      external: true
    },
    {
      href: `mailto:${email}`,
      variant: 'email',
      Icon: Mail,
      label: copied ? 'Skopiowano!' : 'E-mail',
      external: false,
      onClick: handleEmailClick
    }
  ];

  return (
    <section className="contact">
      <div className="contact__content">
        <h2 className="contact__title">Skontaktuj się ze mną</h2>
        <p className="contact__subtitle">
          Napisz na e-mail{' '}
          <span className="contact__email-text" onClick={handleEmailClick}>
            {email}
          </span>{' '}
          jeśli chcesz porozmawiać o projektach, pomysłach i współpracy!
        </p>
        <div className="contact__links">
          {links.map((link) => (
            <ContactLink
              key={link.label}
              href={link.href}
              Icon={link.Icon}
              label={link.label}
              external={link.external}
              onClick={link.onClick}
            />
          ))}
        </div>
      </div>

      <div className="contact__background">
        <div className="contact__blob"></div>
      </div>
    </section>
  );
}

export default Contact;