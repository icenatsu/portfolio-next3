"use client";

import styles from "./CardSkill.module.scss";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useContext, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { animationSlideScrollToBottom } from "@animation/gsapAnimation";
import { useWindowSizeResize } from "@Hooks/Window/useWindowSizeResize";

interface CardSkill {
  inParagraphs: string[];
  inIcones: iconeDetails[];
  inClassList: string;
}

interface iconeDetails {
  name: string;
  img: string;
}

const CardSkill = ({
  inParagraphs,
  inIcones,
  inClassList,
}: CardSkill): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext!.isDarkMode;

  const { windowWidth } = useWindowSizeResize();

  const cardSkill = useRef<HTMLDivElement>(null)

  const [showSkillDetails, setShowSkillDetails] = useState<boolean>(false)
  const [toggleShowSkillDetails, setTooggleShowSkillDetails] = useState<boolean>(false)


  // Application du dark/light mode
  useEffect(() => {
    if (document.getElementById(inClassList)) {
      const componentForCssChange = [
        {
          htmlElement: document.getElementById(inClassList),
          name: "cardSkill",
          scss: styles,
        },
      ];
      themeContext?.changeDarkLightMode(componentForCssChange);
    }
  }, [themeContext, isDarkMode, inClassList]);

  // Gestion des états controlés par chaque évenements selon le format destinée à l'affichage des descriptions des compétences
  useEffect(() => {
    const addEventdependingOnTheMedia = () => {
      if (typeof window !== 'undefined' && cardSkill.current !== null) {
        cardSkill.current.addEventListener("mouseenter", handleMouseEnter);
        cardSkill.current.addEventListener("mouseleave", handleMouseLeave);
        cardSkill.current.addEventListener("click", handleClick);
      }
    };

    const handleMouseEnter = () => {
      if (window.matchMedia("(min-width: 993px)").matches) {
        setShowSkillDetails(true);
      }
    };

    const handleMouseLeave = () => {
      if (window.matchMedia("(min-width: 993px)").matches) {
        setShowSkillDetails(false);
      }
    };

    const handleClick = () => {
      if (window.matchMedia("(max-width: 992px)").matches) {
        console.log('coucou');
        setTooggleShowSkillDetails((current) => !current);
      }
    };

    addEventdependingOnTheMedia();

    // Fonction de nettoyage
    return () => {
      if (cardSkill.current !== null) {
        cardSkill.current.removeEventListener("mouseenter", handleMouseEnter);
        cardSkill.current.removeEventListener("mouseleave", handleMouseLeave);
        cardSkill.current.removeEventListener("click", handleClick);
      }
    };
  }, []);


  const applyStyleAccordeon = (elem: boolean) => {
    if (elem) {
      cardSkill.current?.classList.add(styles.visible);
    } else {
      cardSkill.current?.classList.remove(styles.visible);
    }
  }

  useEffect(() => {
    if (cardSkill.current !== null) {
      applyStyleAccordeon(toggleShowSkillDetails)
    }
  }, [toggleShowSkillDetails]);

  useEffect(() => {
    if (cardSkill.current !== null) {
      applyStyleAccordeon(showSkillDetails)
    }
  }, [showSkillDetails]);


  useEffect(() => {
    const closeSkillDetails = () => {
      cardSkill.current?.classList.remove(styles.visible);
    }
    closeSkillDetails()
  }, [windowWidth]);


  // Animation gsap
  useEffect(() => {
    animationSlideScrollToBottom(inClassList, 0.3, 0.5, 100, 75, 20);
  }, []);

  return (
    <div id={inClassList} className={styles["cardSkill"]} ref={cardSkill}>
      <div className={styles.container}>
        {inIcones.map((value, index) => (
          <figure className={styles["container__icones"]} key={index}>
            <Icon
              aria-label="icone technologie"
              icon={value.img}
              className={styles.icone}
            ></Icon>
            <span className={styles.nameTechno}>{value.name}</span>
          </figure>
        ))}
        <Icon
          className={styles["slideToBottom"]}
          icon="ic:round-arrow-left"
          rotate={3}
          aria-label="Défilement vers le bas"
        />
      </div>
      <div className={styles["descriptionTechno"]}>
        {inParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className={styles.tilt}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className={styles["tilt-fill"]}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardSkill;
