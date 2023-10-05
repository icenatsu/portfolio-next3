"use client";

import styles from "./Loader.module.scss";
import { Icon } from "@iconify/react";

const Loader = (): JSX.Element => {
  return (
    <div id="loader" className={styles.loader}>
      <Icon className={styles.icon} icon="eos-icons:bubble-loading" />
    </div>
  );
};

export default Loader;
