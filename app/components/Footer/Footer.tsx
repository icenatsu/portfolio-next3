"use client";
import styles from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer id="footer" className={styles.footer}>
      <p className={styles.infos}>@Design fait maison - Marseille</p>
    </footer>
  );
};

export default Footer;
