import React from "react";
import {
  FaReact,
  FaPython,
  FaJava,
  FaAndroid,
  FaMicrosoft,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import { SiSqlite } from "react-icons/si";

// 🔹 Importujemy wszystkie obrazki
import Book from "../img/book.webp";
import Journal from "../img/journal.webp";
import Shop from "../img/shop.webp";
import Game from "../img/game.webp";
import Dast from "../img/dast.webp";
import Sqlite from "../img/sqlite.png";
import Minecraft from "../img/minecraft.webp";
import Victoria from "../img/victoria.webp";

const projects = [
  {
    name: "BookApp",
    tech: "C#",
    icon: <FaMicrosoft />,
    img: Book,
    type: "Aplikacja desktopowa",
    github: "https://github.com/Michalina03/BookApp",
  },
  {
    name: "Student-Journal",
    tech: "C#",
    icon: <FaMicrosoft />,
    img: Journal,
    type: "Aplikacja desktopowa",
    github: "https://github.com/Michalina03/Student-Journal",
  },
  {
    name: "SmallShop",
    tech: "Python",
    icon: <FaPython />,
    img: Shop,
    type: "Aplikacja do zarządzania małym sklepem",
    github: "https://github.com/Michalina03/SmallShop",
  },
  {
    name: "The Game",
    tech: "Python",
    icon: <FaPython />,
    img: Game,
    type: "Gra napisana w Pythonie",
    github: "https://github.com/Michalina03/TheGame",
  },
  {
    name: "PeopleDatabase",
    tech: "SQLite",
    icon: <SiSqlite />,
    img: Sqlite,
    type: "Baza danych Użytkowników",
    github: "https://github.com/Michalina03/PeopleDatabase",
  },
  {
    name: "Dast",
    tech: "React",
    icon: <FaReact />,
    img: Dast,
    type: "Strona internetowa dla firmy Dast (w procesie)",
    status: "w procesie",
    demo: "https://michalina03.github.io/BackupDast/",
  },
  {
    name: "MinecraftAPI",
    tech: "JavaScript",
    icon: <FaJava />,
    img: Minecraft,
    type: "Strona z API dla gry Minecraft",
    demo: "https://michalina03.github.io/MinecraftAPI/",
  },
  {
    name: "VictoriaGrochów",
    tech: "Android Studio",
    icon: <FaAndroid />,
    img: Victoria,
    type: "Aplikacja mobilna (w procesie)",
    status: "w procesie",
  },
];


function Project() {
  return (
    <section className="projects">
      <div className="projects__content">
        <h2 className="projects__title">Projekty</h2>
        <p className="projects__subtitle">
          Kilka moich aplikacje i stron, stworzone w różnych technologiach.
        </p>

        <div className="projects__list">
          {projects.map((project, index) => (
            <div key={index} className="projects__item">
              <div className="projects__image">
                <img src={project.img} alt={project.name} loading="lazy" />
              </div>

              <div className="projects__info">
                <h3 className="projects__name">{project.name}</h3>
                <p className="projects__type">{project.type}</p>
                {project.status === "w procesie" && (
                  <span className="projects__status">W procesie</span>
                )}
              </div>

              <div className="projects__tech">
                <div className="projects__icon">{project.icon}</div>
                <p className="projects__tech-name">{project.tech}</p>

                <div className="projects__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                      title="Zobacz na GitHubie"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                      title="Zobacz stronę"
                    >
                      <FaGlobe />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projects__background">
        <div className="projects__blob"></div>
      </div>
    </section>
  )
}

export default Project