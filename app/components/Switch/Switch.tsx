import styles from "./Switch.module.scss";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Toogletheme from "@components/ToogleTheme/ToogleTheme";

const Switch = (): JSX.Element => {
  const { switchTheme } = Toogletheme();
  const [darkModeActive, setDarkModeActive] = useState<boolean>(false);

  useEffect(() => {
    if (document.body.classList.contains("dark")) {
      setDarkModeActive(true);
    } else {
      setDarkModeActive(false);
    }
  }, [switchTheme]);

  return (
    <div id="label" className={styles.switch}>
      <input
        aria-labelledby="label"
        className={styles.input}
        type="checkbox"
        checked={!darkModeActive}
        onChange={switchTheme}
        id="switch"
        name="switch"
        aria-label="switch theme"
      />
      <span id="sunmoon" className={styles.sunmoon}>
        <Icon icon="radix-icons:moon" aria-label="Mode sombre" hFlip={true} />
        <Icon icon="humbleicons:sun" aria-label="Mode clair" />
      </span>
    </div>
  );
};

export default Switch;
