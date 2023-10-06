import styles from "./Banner.module.scss";
import BannerBg from "@public/img/banner_bg.webp";
import Jarre from "@public/img/jarre.svg";
// import Logo from "@public/img/logo.svg";
import Image from "next/image";
import Flaque from "@public/img/flaque.svg";
import Roue from "@public/img/roue.svg";
import Tuyau from "@public/img/tuyau.svg";

const Banner = (): JSX.Element => {
  return (
    <div className={styles.test}>
      <div id="banner" className={styles.banner}>
        <div className={styles.tuyau}>
          <Image
            className={styles.tuyauImg}
            src={Tuyau}
            alt="Dessin d'un tuyau"
          />
        </div>
        <div className={styles.roue}>
          <Image
            className={styles.roueImg}
            src={Roue}
            alt="Dessin d'une roue"
          />
        </div>

        {/* <div className={styles.logo}>
          <Image
            className={styles.logoImg}
            src={Logo}
            alt="Dessin d'une cruche inclinée"
          />
        </div> */}

        <div className={styles.rain}>
          <Image
            className={styles.bannerbg}
            src={BannerBg}
            alt="Image animée de code"
            width={80}
            height={80}
          />
        </div>
        <div className={styles.pot}>
          <Image
            className={styles.PotImg}
            src={Jarre}
            alt="Dessin d'une jarre"
          />
        </div>
        <div className={styles.flaque}>
          <Image
            className={styles.flaqueImg}
            src={Flaque}
            alt="Dessin d'une flaque d'eau"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
