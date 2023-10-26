"use client";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useWindowSizeResize } from "@Hooks/Window/useWindowSizeResize";
import Switch from "../Switch/Switch";

const NavBar = (): JSX.Element => {
  const windowSize = useWindowSizeResize();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const container = useRef<HTMLDivElement>(null);
  const navbar = useRef<HTMLElement>(null);

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
        if (showMenu) {
          navbar.current.style.display = "flex";
          setTimeout(() => {
            if (navbar.current !== null && container.current !== null) {
              container.current.style.minHeight = "21rem";
              navbar.current.style.transition = "opacity 1s 0.8s";
              navbar.current.style.opacity = "1";
            }
          }, 100);
        } else {
          navbar.current.style.transition = "none";
          container.current.style.minHeight = "6rem";
          navbar.current.style.opacity = "0";
          setTimeout(() => {
            if (navbar.current !== null) {
              navbar.current.style.display = "none";
            }
          }, 100);
        }
      } else if (windowSize.windowWidth > 992 && window.innerWidth > 992) {
        if (navbar.current !== null && container.current !== null) {
          console.log(windowSize.windowWidth);
          console.log("coucou");
          navbar.current.style.display = "flex";
          container.current.style.minHeight = "6rem";
          setShowMenu(false);
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
              Projets
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link
              onClick={() => scrollToAnchor("skills")}
              href="/#skills"
              scroll={false}
            >
              Compétences
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
