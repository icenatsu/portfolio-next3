import styles from "./Banner.module.scss";
import BannerBg from "@public/img/banner_bg.webp";
import Jarre from "@public/img/jarre.svg";
import Image from "next/image";
import Flaque from "@public/img/flaque.svg";
import Roue from "@public/img/roue.svg";
import Tuyau from "@public/img/tuyau.svg";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Banner = (): JSX.Element => {
  const roueRef = useRef<HTMLDivElement>(null);
  const bubble1Ref = useRef<HTMLDivElement>(null);
  const bubble2Ref = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const rainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const roue = gsap.to(roueRef.current, {
      duration: 1.2,
      rotation: "+=360",
      ease: "power1.easeinOut",
    });

    const drop = gsap.to(dropRef.current, {
      keyframes: {
        "0%": { y: "2.4rem", scale: 0 },
        "7%": { y: "2.4rem", scale: 0 },

        "15.44%": { y: "-3.6rem", scale: 1 },

        "27.8%": { y: "2.4rem", scale: 0 },

        "100%": { y: "2.4rem", scale: 0 },

        easeEach: "expo.linear",
      },
      duration: 2,
    });

    const rain = gsap.to(rainRef.current, {
      keyframes: {
        "0%": { y: "-80rem", opacity: 0 },
        "25%": { opacity: 0.5 },
        "50%": { opacity: 1, filter: "brightness(1.8)" },
        "100%": { y: "66rem", opacity: 0.5 },
        easeEach: "expo.easeinOut",
      },
      duration: 2.5,
    });

    const bubble1 = gsap.to(bubble1Ref.current, {
      keyframes: {
        "0%": { x: "1rem", y: "1rem", scale: 0 },
        "45.9%": { x: "-0.8rem", y: "-1.6rem", scale: 0 },

        "46%": { x: "-0.8rem", y: "-1.6rem", scale: 0.2 },

        "50%": { x: "-1.7rem", y: "-3.3rem", scale: 0.6 },

        "50.1%": { x: "-1.7rem", y: "-3.3rem", scale: 0.6 },

        "100%": { x: "0rem", y: "0rem", scale: 0 },

        easeEach: "expo.linear",
      },
      duration: 0.9,
    });

    const bubble2 = gsap.to(bubble2Ref.current, {
      keyframes: {
        "0%": { x: "1rem", y: "1rem", scale: 0 },
        "45.9%": { x: "0.8rem", y: "-1.6rem", scale: 0 },

        "46%": { x: "0.8rem", y: "-1.6rem", scale: 0.2 },

        "50%": { x: "1.7rem", y: "-3.3rem", scale: 0.6 },

        "50.1%": { x: "1.7rem", y: "-3.3rem", scale: 0.6 },

        "100%": { x: "0rem", y: "0rem", scale: 0 },

        easeEach: "expo.linear",
      },
      duration: 0.9,
    });

    let ctx = gsap.context(() => {
      let tl = gsap
        .timeline({ repeat: -1 })
        .add(roue)
        .add(drop, 1.3)
        .add(bubble1, 1.1)
        .add(bubble2, 1.1)
        .add(rain, 0.2);

      tl.play();
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div id="banner" className={styles.banner}>
        <div className={styles.tuyau}>
          <Image
            className={styles.tuyauImg}
            src={Tuyau}
            alt="Dessin d'un tuyau"
          />
        </div>
        <div ref={roueRef} className={styles.roue}>
          <Image
            className={styles.roueImg}
            src={Roue}
            alt="Dessin d'une roue"
          />
        </div>
        <div ref={rainRef} className={styles.rain}>
          <Image
            className={styles.bannerbg}
            src={BannerBg}
            alt="Image animée de code"
          />
        </div>
        <div className={styles.bubbles}>
          <div ref={bubble1Ref} className={styles.bubble1}></div>
          <div ref={bubble2Ref} className={styles.bubble2}></div>
        </div>
        <div ref={dropRef} className={styles.drop}></div>
        <div className={styles.pot}>
          <Image className={styles.PotImg} src={Jarre} alt="Dessin d'un saut" />
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
