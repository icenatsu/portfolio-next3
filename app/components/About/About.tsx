"use client";

import styles from "./About.module.scss";
import { useEffect, useContext } from "react";
import { animationSlideScrollToBottom } from "@animation/gsapAnimation";
import Image from "next/image";
import Splash from "@public/img/splash.svg";
import Parchment from "@public/img/parchemin.webp";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const About = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);

  // Animations gsap
  useEffect(() => {
    animationSlideScrollToBottom("background", 0, 0.5, 10, 85, 40);
  }, []);

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
            src={Parchment}
            alt="circuit intégré"
            fill={true}
            style={{ objectFit: "cover" }}
            loading="lazy"
          ></Image>
        </picture>
      </div>
      <h2 id="aboutTitle" className={styles.title}>
        A propos de moi
      </h2>
      <div id="aboutDescription" className={styles.presentation}>
        <p>
          Je me nomme Gaëlle et suis passionnée par la création de sites web et
          de nouvelles technologies.
          <br />
          <br />
          Vous trouverez ici les projets que j&apos;ai pu mener autant lors de
          ma formation qu&apos;à titre personnel ainsi que les compétences que
          j&apos;ai pu acquérir au fil du temps.
          <br />
          J&apos;éprouve un réel plaisir à apprendre de nouveaux langages de
          programmation.
          <br />
          <br />
          Ces derniers étant en constante évolution, je pratique une veille
          technologique à la fois pour rester à la page, mais aussi pour
          approfondir mes connaissances.
          <br />
          <br />
          Si vous êtes intéressés par mon travail, n&apos;hésitez pas à me
          contacter !
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
          <defs>
            {themeContext.isDarkMode ? (
              <linearGradient
                id="mon-degrade"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="700%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#242424", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#1e4481", stopOpacity: 1 }}
                />
              </linearGradient>
            ) : (
              <linearGradient
                id="mon-degrade"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="700%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#DDD", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FFFF", stopOpacity: 1 }}
                />
              </linearGradient>
            )}
          </defs>
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
