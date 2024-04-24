"use client";

import styles from "./Skills.module.scss";
import { useEffect, useContext } from "react";
import CardSkill from "@components/Skills/CardSkill/CardSkill";
import DownloadButton from "@components/DownloadButton/DownloadButton";
import { animationSlideScrollToBottom } from "@animation/gsapAnimation";
import { LanguageContext } from "@context/Language/Language";

interface IntSkill {
  name: string;
  paragraphs: string[];
  icones: iconeDetails[];
  classList: string;
}
interface iconeDetails {
  name: string;
  img: string;
}

const Skills = (): JSX.Element => {
  const languageContext = useContext(LanguageContext);

  // Données des compétences
  const dataSkills: IntSkill[] = [
    {
      name: "htmlCss",
      paragraphs: languageContext?.isFrenchLanguage
        ? [
            "Intégrer du contenu conformément à une maquette graphique",
            "Implémenter une interface responsive",
          ]
        : [
            "Integrate content according to a graphic mockup.",
            "Implement a responsive interface.",
          ],
      icones: [
        {
          name: "html",
          img: "icomoon-free:html-five",
        },
        {
          name: "css",
          img: "uiw:css3",
        },
      ],
      classList: "html-css",
    },
    {
      name: "css",
      paragraphs: languageContext?.isFrenchLanguage
        ? [
            "Mettre en œuvre des effets CSS graphiques avancés",
            "Assurer la cohérence graphique d'un site web",
            "Mettre en place une structure de navigation pour un site web",
            "Utilisation du préprocesseur Sass",
          ]
        : [
            "Implement advanced graphical CSS effects",
            "Ensure the visual consistency of a website",
            "Establish a navigation structure for a website",
            "Utilize the Sass preprocessor",
          ],
      icones: [
        {
          name: "css",
          img: "uiw:css3",
        },
        {
          name: "sass",
          img: "fa6-brands:sass",
        },
        {
          name: "tailwind",
          img: "mdi:tailwind",
        },
      ],
      classList: "css",
    },
    {
      name: "github",
      paragraphs: languageContext?.isFrenchLanguage
        ? [
            "Utiliser un système de gestion de versions pour le suivi du projet et son hébergement",
          ]
        : [
            "Use a version control system for project tracking and hosting purposes.",
          ],
      icones: [
        {
          name: "github",
          img: "uil:github",
        },
      ],
      classList: "github",
    },
    {
      name: "seo",
      paragraphs: languageContext?.isFrenchLanguage
        ? [
            "Assurer l'accessibilité d'un site web",
            "Optimiser la taille et la vitesse d’un site web",
            "Optimiser le référencement d'un site web",
          ]
        : [
            "Ensure the accessibility of a website",
            "Optimize the size and speed of a website",
            "Optimize the SEO of a website",
          ],
      icones: [
        {
          name: "seo",
          img: "icon-park-outline:seo",
        },
      ],
      classList: "seo",
    },
    {
      name: "javascript",
      paragraphs: languageContext?.isFrenchLanguage
        ? [
            "Créer un plan de test pour une application",
            "Valider des données issues de sources externes",
            "Interagir avec un web service avec JavaScript",
            "Gérer des événements JavaScript",
          ]
        : [
            "Create a test plan for an application",
            "Validating data from external sources",
            "Interact with a web service using JavaScript",
            "Manage JavaScript events",
          ],
      icones: [
        {
          name: "javascript",
          img: "akar-icons:javascript-fill",
        },
      ],
      classList: "javascript",
    },
    {
      name: "nodejs",
      paragraphs: languageContext?.isFrenchLanguage
        ? [
            "Mettre en œuvre des opérations CRUD de manière sécurisée",
            "Implémenter un modèle logique de données conformément à la réglementation",
            "Stocker des données de manière sécurisée",
            "Authentifier un utilisateur et maintenir sa session",
            "Implémenter un stockage de données sécurisé en utilisant une base de données noSQL",
          ]
        : [
            "Implement CRUD operations securely",
            "Implement a logical data model in compliance with regulations",
            "Store data securely",
            "Authenticate a user and maintain their session",
            "Implement secure data storage using a NoSQL database",
          ],
      icones: [
        {
          name: "nodejs",
          img: "mdi:nodejs",
        },
        {
          name: "mongodb",
          img: "bxl:mongodb",
        },
      ],
      classList: "nodejs",
    },
    {
      name: "react",
      paragraphs: languageContext?.isFrenchLanguage
        ? [
            "Créer des applications web dynamiques et évolutives.",
            "Intégrer des données externes via des APIs dans les applications",
            "Développer des éléments de l'interface d'un site web grâce à des composants React",
          ]
        : [
          "Creating dynamic and scalable web applications.",
          "Integrating external data via APIs into applications.",
          "Developing website interface elements using React components."
          ],
      icones: [
        {
          name: "react",
          img: "akar-icons:react-fill",
        },
        {
          name: "nextjs",
          img: "teenyicons:nextjs-outline",
        },
      ],
      classList: "react",
    },
    {
      name: "typescript",
      paragraphs: languageContext?.isFrenchLanguage
        ? [
            "Arborer un typage statique pour détecter et prévenir les erreurs de type",
            "Améliorer la robustesse et la maintenabilité du code JavaScript",
          ]
        : [
            "Adopt static typing to detect and prevent type errors",
            "Enhance the robustness and maintainability of JavaScript code",
          ],
      icones: [
        {
          name: "typescript",
          img: "akar-icons:typescript-fill",
        },
      ],
      classList: "typescript",
    },
  ];

  // Séparation des données en deux block d'accordeon
  const dataFirstBlockAccordeon = [];
  const dataSecondBlockAccordeon = [];

  for (let index = 0; index < dataSkills.length; index++) {
    if (index < dataSkills.length / 2) {
      dataFirstBlockAccordeon.push(dataSkills[index]);
    } else {
      dataSecondBlockAccordeon.push(dataSkills[index]);
    }
  }

  useEffect(() => {
    animationSlideScrollToBottom("skillsTitle", 0.1, 0.3, 0, 75, 25);
  }, []);

  return (
    <section id="skills" className={styles.container}>
      <h2 id="skillsTitle" className={styles.title}>
        {languageContext?.isFrenchLanguage ? "Mes compétences" : "Skills"}
      </h2>
      <DownloadButton />
      <div className={styles["container__Accordeons"]}>
        <div className={styles.dataAccordeon}>
          {dataFirstBlockAccordeon.map((value) => {
            return (
              <CardSkill
                key={value.name}
                inParagraphs={value.paragraphs}
                inIcones={value.icones}
                inClassList={value.classList}
              />
            );
          })}
        </div>
        <div className={styles.dataAccordeon}>
          {dataSecondBlockAccordeon.map((value) => {
            return (
              <CardSkill
                key={value.name}
                inParagraphs={value.paragraphs}
                inIcones={value.icones}
                inClassList={value.classList}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
