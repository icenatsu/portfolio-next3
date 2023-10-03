"use client";

import styles from "./DownloadButton.module.scss";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { animationSlideScrollToBottom } from "@animation/gsapAnimation";

const DownloadButton = (): JSX.Element => {
  // Création du lien du téléchargement
  const handleDownload = () => {
    const fileUrl = "/cv/cv.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "cv.pdf";
    link.click();
  };

  // Animation gsap
  useEffect(() => {
    animationSlideScrollToBottom("downloadButton", 0.3, 0.2, 0, 75, 25);
  }, []);

  return (
    <div id="downloadButton" className={styles.container}>
      <Icon
        className={styles.icone}
        onClick={handleDownload}
        icon="line-md:download-loop"
      />
      <button className={styles.button}>Télécharger mon CV</button>
    </div>
  );
};

export default DownloadButton;
