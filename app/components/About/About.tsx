"use client";

import styles from "./About.module.scss";
import { useEffect, useContext } from "react";
import { animationSlideScrollToBottom } from "@animation/gsapAnimation";
import Image from "next/image";
import Splash from "@public/img/splash.svg";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import Bg from "@public/img/bg.webp";
import { LanguageContext } from "@context/Language/Language";

const About = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);

  // Animations gsap
  useEffect(() => {
    animationSlideScrollToBottom("aboutTitle", 0.1, 0.2, 0, 75, 25);
  }, []);

  useEffect(() => {
    animationSlideScrollToBottom("aboutDescription", 0.2, 0.3, 0, 75, 25);
  }, []);

  return (
    <section id="about" className={styles.container}>
      <div id="background" className={styles.background}>
        <picture className={styles["background__container"]}>
          <Image
            src={Bg}
            alt="hexagones"
            fill={true}
            sizes="100vh"
            style={{
              objectFit: "cover",
              opacity: themeContext?.isDarkMode ? 0.04 : 0.08,
            }}
            loading="lazy"
          ></Image>
        </picture>
      </div>
      <h2 id="aboutTitle" className={styles.title}>
        {languageContext?.isFrenchLanguage ? "A propos de moi" : "About Me"}
      </h2>
      <div id="aboutDescription" className={styles.presentation}>
        <p className={styles.paragraph}>
          {languageContext?.isFrenchLanguage
            ? "Je me nomme Gaëlle et suis passionnée par la création de sites web et de nouvelles technologies.\nVous trouverez ici les projets que j'ai pu mener autant lors de ma formation qu'à titre personnel ainsi que les compétences que j'ai pu acquérir au fil du temps.\nJ'éprouve un réel plaisir à apprendre de nouveaux langages de programmation.\n\nCes derniers étant en constante évolution, je pratique une veille technologique à la fois pour rester à la page, mais aussi pour approfondir mes connaissances.\nSi vous êtes intéressés par mon travail, n'hésitez pas à me contacter !"
            : "My name is Gaëlle, and I am passionate about web development and new technologies.\n\nHere, you will find the projects I have worked on, both during my training and on a personal level, as well as the skills I have acquired over time.\n\nI thoroughly enjoy learning new programming languages. Since these technologies are constantly evolving, I engage in technological watch to stay up-to-date and deepen my knowledge.\n\nIf you are interested in my work, feel free to contact me!"}
        </p>
        <div>
          <Image
            className={styles.splashImg}
            src={Splash}
            alt="Dessin d'un splash de peinture"
          />
        </div>
      </div>
      <div className={styles.shape}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {themeContext?.isDarkMode ? (
            <defs>
              <linearGradient
                id="mon-degrade"
                fill="rgba(26, 32, 44, 1)"
                x1="0%"
                y1="700%"
                x2="0%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: "rgb(15, 17, 19)",
                    stopOpacity: 0.973,
                  }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgba(26, 32, 44, 1)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          ) : (
            <defs>
              <linearGradient
                id="mon-degrade"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="700%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#d4d4d4", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#d4d4d4", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          )}
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={`${styles["shape-fill"]}`}
            fill="url(#mon-degrade)"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
