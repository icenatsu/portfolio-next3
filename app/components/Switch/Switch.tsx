import styles from "./Switch.module.scss";
import { Icon } from "@iconify/react";
import Toogletheme from "@components/ToogleTheme/ToogleTheme";

const Switch = (): JSX.Element => {
  const { switchTheme } = Toogletheme()
  const darkModeActive = typeof document !== 'undefined' && document.body.classList.contains("dark")


  return (
    <label className={styles.switch} htmlFor="switch">
      <input
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
    </label>
  );
};

export default Switch;
