import { Link } from "react-router-dom";
import Ja from '../img/your-image.JPG';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__subtitle">Witaj na mojej stronie</p>

        <h1 className="hero__title">
          Cześć, jestem <span className="highlight">Michalina</span>, <br />
          Frontend <span className="accent">Developer.</span>
        </h1>

       <p className="hero__description">
  Tworzę strony internetowe, aplikacje komputerowe i mobilne, realizując różnorodne projekty technologiczne.  
  Jeśli chcesz zobaczyć, w czym mogę pomóc lub masz pomysł na współpracę, zapraszam do zapoznania się z moimi projektami i kontaktu.
</p>

        <div className="hero__buttons">
          <Link to="/projekty" className="btn btn--primary">
            Zobacz moje projekty
          </Link>

          <Link to="/o mnie" className="btn btn--outline">
            O mnie
          </Link>
        </div>
      </div>

      <div className="hero__image">
        <div className="image-wrapper">
          <img src={Ja} alt="Moje zdjęcie" className="about__intro-pic" />
        </div>
      </div>
    </section>
  );
}