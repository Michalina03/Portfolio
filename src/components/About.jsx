import React from 'react'
import ProfilePic from '../img/about/me.JPG'; // przykładowe zdjęcie
import PetPic from '../img/about/piano.jpg'; // zdjęcie zwierzaka
import HobbyPic from '../img/about/programing.png'; // zdjęcie hobby
function About() {
  return   (
<section className="about" id="about">
      <div className="about__container">
        <div className="about__intro">
          <img src={ProfilePic} alt="Moje zdjęcie" className="about__intro-pic" />
          <div className="about__intro-text">
            <h2 className="about__title">O mnie</h2>
            <p className="about__description">
  Jestem uczennicą liceum o profilu matematyczno-fizyczno-informatycznym. 
  Choć nie mam jeszcze dużego doświadczenia, bardzo lubię angażować się w organizację różnych wydarzeń i łączyć kreatywne pomysły z praktycznym planowaniem. 
  Współpracuję z klubem sportowym{" "}
  <a href="https://victoriagrochow.pl/" target="_blank" rel="noopener noreferrer">
    UKS Vistoria Grochów
  </a>
  , gdzie odpowiadam głównie za kwestie organizacyjne i z rozwijającą się organizacją{" "}
  <a href="https://zanurzeniwbogu.pl/" target="_blank" rel="noopener noreferrer">
    Zanurzeni w Bogu
  </a>.
</p>
          </div>
        </div>

        <div className="about__details">
          <div className="about__card">
            <img src={HobbyPic} alt="Hobby" className="about__card-pic" />
            <h3 className="about__card-title">Programowanie</h3>
            <p className="about__card-text">
              Programowaniem zajmuję się od około czterech lat. Zaczynałam od backendu, pracując w C#, a następnie rozwijałam się w Pythonie. Z czasem skierowałam się w stronę tworzenia stron internetowych, gdzie najlepiej odnajduję się łącząc technologię z estetyką. Ukończyłam kursy w gotoit, które pozwoliły mi uporządkować wiedzę i zdobyć praktyczne umiejętności pracy projektowej. Stale rozwijam swoje kompetencje i chętnie podejmuję nowe wyzwania.
</p>
          </div>

          <div className="about__card">
            <img src={PetPic} alt="Zwierzaki" className="about__card-pic" />
            <h3 className="about__card-title">Muzyka</h3>
            <p className="about__card-text">
              Jedną z moich pasji jest też muzyka. Gram od 7. roku życia. Ukończyłam szkołę muzyczną I stopnia, gdzie uczyłam się gry na pianinie i akordeonie oraz śpiewu.

Po szkole miałam przerwę i moje drogi z muzyką lekko się rozeszły, ale w ostatnim czasie wróciłam do niej i znowu zaczęłam się rozwijać. Obecnie czasami gram jako organistka w kościele, co daje mi dużo satysfakcji. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About