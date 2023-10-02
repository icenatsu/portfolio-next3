import styles from "./Switch.module.scss";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Switch = (): JSX.Element => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const switchTheme = () => {
    setIsDarkMode((curr) => (curr = !curr));
  };

  if (typeof window !== "undefined") {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setIsDarkMode(e.matches);
      });
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <label className={styles.switch} htmlFor="switch">
      <input
        className={styles.input}
        type="checkbox"
        checked={!isDarkMode}
        onChange={switchTheme}
        id="switch"
        name="switch"
        aria-label="switch theme"
      />
      <span id="sunmoon" className={styles.sunmoon}>
        <Icon icon="radix-icons:moon" aria-label="Mode sombre" hFlip={true} />
        <Icon icon="humbleicons:sun" aria-label="Mode clair" />
      </span>
    </label>
  );
};

export default Switch;
