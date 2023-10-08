"use client";
import styles from "./Footer.module.scss";
import ChatBot from "@components/Chatbot/Chatbot";

const Footer = (): JSX.Element => {
  return (
    <footer id="footer" className={styles.footer}>
      <ChatBot />
      <p className={styles.infos}>@Design fait maison - Marseille</p>
    </footer>
  );
};

export default Footer;
