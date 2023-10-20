"use client";
import styles from "./Header.module.scss";
import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Banner from "@components/Banner/Banner";
import Link from "next/link";
import Image from "next/image";
import IntegratedCircuit from "@public/img/circuit.svg";

const Header = (): JSX.Element => {
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
      {/* <Banner /> */}
      <div className={styles["text"]}>
        <div className={styles.background}>
          <Image
            src={IntegratedCircuit}
            alt="circuit intégré"
            loading="lazy"
            fill={true}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
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
        {/* <Shape /> */}
      </div>
    </header>
  );
};

export default Header;
