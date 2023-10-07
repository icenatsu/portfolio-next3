"use client";
import styles from "./Footer.module.scss";
import ChatBot from "@components/Chatbot/Chatbot";

const Footer = (): JSX.Element => {
  return (
    <footer id="footer" className={styles.footer}>
      <p className={styles.infos}>@Design fait maison - Marseille</p>
      <ChatBot />
    </footer>
  );
};

export default Footer;
