"use client";
import styles from "./Header.module.scss";
import { useContext, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useWindowSizeResize } from "@Hooks/Window/useWindowSizeResize";
import IntegratedCircuitDark from "@public/img/integercircuit_darkmode.webp";
import IntegratedCircuitLight from "@public/img/integercircuit_lightmode.webp";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const Header = (): JSX.Element => {
  const { windowWidth } = useWindowSizeResize();

  const isDesktop = windowWidth > 768;

  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  const scrollToAnchor = () => {
    const projets = document.getElementById("projets");
    projets?.scrollIntoView({ behavior: "smooth" });
  };

  const headerRef = useRef<HTMLElement>(null);
  const headerProfession = useRef<HTMLParagraphElement>(null);
  const headerTitle = useRef<HTMLHeadingElement>(null);
  const headerButton = useRef<HTMLDivElement>(null);

  // Animations
  /************/
  useEffect(() => {
    if (headerRef.current !== null) {
      headerRef.current?.classList.add(styles.active);
    }
  }, []);

  return (
    <header ref={headerRef} id="header" className={styles.header}>
      <div className={styles["text"]}>
        {isDesktop ? (
          <div className={styles.background}>
            <picture className={styles["background__container"]}>
              <Image
                src={
                  themeContext?.isDarkMode
                    ? IntegratedCircuitDark
                    : IntegratedCircuitLight
                }
                alt="circuit intégré"
                sizes="100vh"
                fill={true}
                priority={true}
                style={{ objectFit: "contain" }}
              />
            </picture>
          </div>
        ) : (
          ""
        )}
        <p
          ref={headerProfession}
          id="headerProfession"
          className={styles.profession}
        >
          Développeuse Web
        </p>
        <h1 ref={headerTitle} id="headerTitle" className={styles.title}>
          Gaëlle Blanchard
        </h1>
        <div ref={headerButton} id="headerLink" className={styles.link}>
          <Link
            className={styles.button}
            onClick={scrollToAnchor}
            href="/#projets"
            scroll={false}
          >
            Voir projets
          </Link>
          <Link
            className={styles.button}
            href="https://www.linkedin.com/in/icenatsu/"
          >
            <Icon className={styles.icon} icon={"bi:linkedin"}></Icon>Linkedin
          </Link>
          <Link className={styles.button} href="https://github.com/icenatsu">
            <Icon className={styles.icon} icon={"uil:github"}></Icon>Github
          </Link>
        </div>
        <div className={styles.round}></div>
      </div>
    </header>
  );
};

export default Header;
