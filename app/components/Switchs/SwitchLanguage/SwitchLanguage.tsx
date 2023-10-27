import styles from "./SwitchLanguage.module.scss";
import { LanguageContext } from "@context/Language/Language";
import { useContext } from "react";

const SwitchLanguage = () => {
  const language = useContext(LanguageContext);

  return (
    <fieldset className={styles.language}>
      <legend aria-hidden="true"></legend>
      <input
        className={styles.input}
        type="radio"
        id="french"
        name="language"
        value="FRA"
        onChange={language?.switchLanguage}
        defaultChecked={language?.isFrenchLanguage ? true : false}
      />
      <label className={styles.label} htmlFor="french">
        FRA
      </label>
      <input
        className={styles.input}
        type="radio"
        id="english"
        name="language"
        value="ENG"
        onChange={language?.switchLanguage}
        defaultChecked={language?.isFrenchLanguage ? false : true}
      />
      <label className={styles.label} htmlFor="english">
        ENG
      </label>
    </fieldset>
  );
};

export default SwitchLanguage;
