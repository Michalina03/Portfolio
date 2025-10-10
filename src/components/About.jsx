import React from 'react'
import ProfilePic from '../img/about/wakacje.jpg'; // przykładowe zdjęcie
import PetPic from '../img/about/monti.jpg'; // zdjęcie zwierzaka
import HobbyPic from '../img/about/hobby.jpg'; // zdjęcie hobby
import CodePic from '../img/about/programowanie.jpeg'; // zdjęcie programowania
function About() {
  return   (
<section className="about" id="about">
      <div className="about__container">
        <div className="about__intro">
          <img src={ProfilePic} alt="Moje zdjęcie" className="about__intro-pic" />
          <div className="about__intro-text">
            <h2 className="about__title">O mnie</h2>
            <p className="about__description">
              Cześć! Zatem troche o mnie. Jak już wiecie uwielbiam prograwmoać, oprócz tego kocham spedzać czas z moimi braćmi pieskiem i przyjaciółmi. W tej sekcji troche luźniej o tym co kocham. 
            </p>
          </div>
        </div>

        <div className="about__details">
          <div className="about__card">
            <img src={HobbyPic} alt="Hobby" className="about__card-pic" />
            <h3 className="about__card-title">Moje hobby</h3>
            <p className="about__card-text">
              Oprócz programowania lubie biegać, spacerować ogólnie spędzać czas pośród natury. Czasem robie biżuterie, sprawia mi przyjemność uczenie się epok i ich kultury.
            </p>
          </div>

          <div className="about__card">
            <img src={PetPic} alt="Zwierzaki" className="about__card-pic" />
            <h3 className="about__card-title">Mój zwierzak</h3>
            <p className="about__card-text">
              Mój wierny towarzysz czworonożny wnosi mnóstwo radości i humoru do mojego dnia. Jest ze mną od niedawna ale kocham go całym serduszkiem.
            </p>
          </div>

          <div className="about__card">
            <img src={CodePic} alt="Programowanie" className="about__card-pic" />
            <h3 className="about__card-title">Programowanie</h3>
            <p className="about__card-text">
              Tworzę aplikacje webowe i mobilne, uczę się nowych frameworków i eksploruję front-end i back-end. A moja ulubiona gra to Minecraft
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About