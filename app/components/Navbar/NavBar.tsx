"use client";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { useWindowSizeResize } from "@Hooks/Window/useWindowSizeResize";
import Switch from "@components/Switchs/SwitchTheme/Switch";
import SwitchLanguage from "@components/Switchs/SwitchLanguage/SwitchLanguage";
import { LanguageContext } from "@context/Language/Language";

const NavBar = (): JSX.Element => {
  const windowSize = useWindowSizeResize();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const container = useRef<HTMLDivElement>(null);
  const navbar = useRef<HTMLElement>(null);

  const languageContext = useContext(LanguageContext);

  // Déroulement de la navbar en version mobile et tablette
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (
      container.current !== null &&
      navbar.current !== null &&
      typeof window !== "undefined"
    ) {
      if (windowSize.windowWidth <= 992 && window.innerWidth <= 992) {
        container.current.classList.remove(styles.visible);
        if (showMenu) {
          navbar.current.style.transition = "opacity 1s 1s";
          setTimeout(() => {
            if (container.current !== null) {
              container.current.classList.add(styles.visible);
            }
          }, 100);
        } else {
          navbar.current.style.transition = "none";
          setTimeout(() => {
            if (container.current !== null) {
              container.current.classList.remove(styles.visible);
            }
          }, 200);
        }
      } else if (windowSize.windowWidth > 992 && window.innerWidth > 992) {
        if (container.current !== null) {
          setShowMenu(false);
          container.current.classList.add(styles.visible);
        }
      }
    }
  }, [showMenu, windowSize.windowWidth]);

  const scrollToAnchor = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };

  return (
    <div id="navBar" className={styles.container} ref={container}>
      <Switch />
      <nav className={styles.navbar} ref={navbar}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <Link
              onClick={() => scrollToAnchor("projets")}
              scroll={false}
              href="/#projets"
            >
              {languageContext?.isFrenchLanguage ? "Projets" : "Projects"}
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link
              onClick={() => scrollToAnchor("skills")}
              href="/#skills"
              scroll={false}
            >
              {languageContext?.isFrenchLanguage ? "Compétences" : "Skills"}
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link
              onClick={() => scrollToAnchor("contact")}
              href="/#contact"
              scroll={false}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <SwitchLanguage />
      <div className={styles.burger} onClick={handleClick}>
        <Icon
          aria-label="Afficher le menu"
          icon="icon-park-outline:hamburger-button"
          hFlip={true}
        />
      </div>
    </div>
  );
};

export default NavBar;
