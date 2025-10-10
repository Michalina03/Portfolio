import { useState } from "react";

export default function Home() {
  const [happiness, setHappiness] = useState(10);
  const [energy, setEnergy] = useState(10);
  const [alive, setAlive] = useState(true);

  const pet = () => {
    if (!alive) return;
    setHappiness(happiness + 1);
  };

  const feed = () => {
    if (!alive) return;
    setEnergy(energy + 1);
    setHappiness(happiness + 2);
  };

  const hitEye = () => {
    if (!alive) return;
    const newEnergy = energy - 2;
    const newHappiness = happiness - 3;
    setEnergy(newEnergy);
    setHappiness(newHappiness);

    if (newEnergy <= 0) setAlive(false);
  };

  return (
    <section className="creature-game">
      {/* Intro z Michaliną */}
      <div className="creature-game__intro">
        <h1>Cześć, jestem Michalina</h1>
        <h2>Fullstack Developer 👩‍💻</h2>
        <h3>Zapraszam do obejrzenia mojego portfolio oraz profili:</h3>
        <div className="creature-game__intro__links">
          <a href="https://github.com/michalina03" target="_blank" className="creature-game__link">GitHub</a>
          <a href="https://www.linkedin.com/in/michalina-janowska-24205b29b/" target="_blank" className="creature-game__link">LinkedIn</a>
        </div>
      </div>

      {/* Sekcja ze stworkiem */}
      <div className="creature-game__creature-section">
        <div className="creature-game__content">
          <h2 className="creature-game__content__title">Twój stworek</h2>
          <p className="creature-game__content__text">
            Nie wiedziałam co tu dać więc pogłaszcz sobie stworka 
          </p>
          <div className="creature-game__content__stats">
            <p>💖 Szczęście: {happiness}</p>
            <p>⚡ Energia: {energy}</p>
            {!alive && <p className="creature-game__content__dead">☠️ Twój stworek umarł...</p>}
          </div>
          <div className="creature-game__content__actions">
            <button onClick={feed} className="creature-game__content__btn">🍪 Nakarm ciastkiem</button>
          </div>
        </div>

        <div className="creature-game__creature" onClick={pet}>
          <div
            className={`creature 
              ${!alive ? "creature--dead" : ""}
              ${happiness > 20 && energy > 15 && alive ? "creature--super" : "creature--happy"}`}
          >
            <div
              className="creature__eye creature__eye--left"
              onClick={(e) => { e.stopPropagation(); hitEye(); }}
            ></div>
            <div
              className="creature__eye creature__eye--right"
              onClick={(e) => { e.stopPropagation(); hitEye(); }}
            ></div>
            <div className="creature__mouth"></div>
            <div className="creature__hand creature__hand--left"></div>
            <div className="creature__hand creature__hand--right"></div>
          </div>
          {alive ? (
            <p className="creature-game__hint">(w ciało = 🐾, w oczy = krzywda 👊)</p>
          ) : (
            <p className="creature-game__hint">odśwież stronę, aby zacząć od nowa</p>
          )}
        </div>
      </div>
    </section>
  );
}
