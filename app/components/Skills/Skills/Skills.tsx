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
      paragraphs: [
        "Intégrer du contenu conformément à une maquette",
        "Implémenter une interface responsive",
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
      paragraphs: [
        "Mettre en œuvre des effets CSS graphiques avancés",
        "Assurer la cohérence graphique d'un site web",
        "Mettre en place une structure de navigation pour un site web",
        "Utilisation du préprocesseur Sass",
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
      ],
      classList: "css",
    },
    {
      name: "github",
      paragraphs: [
        "Utiliser un système de gestion de versions pour le suivi du projet et son hébergement",
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
      paragraphs: [
        "Assurer l'accessibilité d'un site web",
        "Optimiser la taille et la vitesse d’un site web",
        "Optimiser le référencement d'un site web",
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
      paragraphs: [
        "Créer un plan de test pour une application",
        "Valider des données issues de sources externes",
        "Interagir avec un web service avec JavaScript",
        "Gérer des événements JavaScript",
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
      paragraphs: [
        "Mettre en œuvre des opérations CRUD de manière sécurisée",
        "Implémenter un modèle logique de données conformément à la réglementation",
        "Stocker des données de manière sécurisée",
        "Authentifier un utilisateur et maintenir sa session",
        "Implémenter un stockage de données sécurisé en utilisant une base de données noSQL",
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
      paragraphs: [
        "Initialiser une application",
        "Configurer la navigation entre les pages de l'application avec React Router",
        "Développer des éléments de l'interface d'un site web grâce à des composants React",
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
      paragraphs: [
        "Arborer un typage statique pour détecter et prévenir les erreurs de type",
        "Améliorer la robustesse et la maintenabilité du code JavaScript",
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

  // Animations gsap
  // useEffect(() => {
  //   animationSlideScrollToBottom("skills", 0, 0.1, 20, 85, 40);
  // }, []);

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
