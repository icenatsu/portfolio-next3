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
  // const roueRef = useRef(null);
  // const bubble1Ref = useRef(null);
  // const bubble2Ref = useRef(null);
  // const dropRef = useRef(null);
  // const rainRef = useRef(null);

  // useEffect(() => {
  //   const roue = roueRef.current;
  //   const bubble1 = bubble1Ref.current;
  //   const bubble2 = bubble2Ref.current;
  //   const drop = dropRef.current;
  //   const rain = rainRef.current;

  //   console.log(bubble1);

  //   // Animation de la roue
  //   let tl = gsap.timeline();
  //   tl.to(roue, {
  //     duration: 1.2,
  //     repeat: -1,
  //     rotation: "+=360", // Rotation de 360 degrés
  //     ease: "power1.easeinOut", // Ease in out pour une transition plus fluide
  //   }).to(rain, {
  //     keyframes: {
  //       "0%": { x: 100, y: -80 },
  //       "25%": { x: 0, y: -90 },
  //       "50%": { x: 0, y: -90 }, // finetune with individual eases
  //       "100%": { x: 50, y: 50 },
  //       easeEach: "expo.inOut", // ease between keyframes
  //     },
  //     ease: "none", // ease the entire keyframe block
  //     duration: 2,
  //   });
  //   // .to(bubble1, {
  //   //   duration: 1.9,
  //   //   x: 0,
  //   //   y: 0,
  //   //   scale: 3,
  //   //   // ease: "power1.linear",
  //   //   // keyframes: [
  //   //   //   { x: 0, y: 0, scale: 0 },
  //   //   //   { x: 8, y: 16, scale: 0 },
  //   //   //   { x: 8, y: 16, scale: 0.2 },
  //   //   //   { x: 17, y: 33, scale: 0.6 },
  //   //   //   { x: 17, y: 33, scale: 0 },
  //   //   //   { x: 0, y: 0, scale: 0 },
  //   //   // ],
  //   //   // repeat: -1, // Répétez l'animation indéfiniment
  //   // });

  //   // // Animation de la goutte
  //   // gsap.fromTo(
  //   //   drop,
  //   //   { scale: 0, y: 24 },
  //   //   {
  //   //     scale: 1,
  //   //     y: -36,
  //   //     transformOrigin: "center",
  //   //     repeat: -1,
  //   //     yoyo: true,
  //   //     duration: 0.5,
  //   //   }
  //   // );

  //   // // Animation de la pluie
  //   // gsap.fromTo(
  //   //   rain,
  //   //   { opacity: 0, y: -80 },
  //   //   {
  //   //     opacity: 1,
  //   //     y: 52 * 16,
  //   //     duration: 1.9,
  //   //     delay: 0.1,
  //   //     ease: "linear",
  //   //     repeat: -1,
  //   //   }
  //   // );
  // }, []); // Le tableau vide signifie que ce useEffect ne s'exécutera qu'une seule fois après le premier rendu

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
        <div className={styles.roue}>
          <Image
            // ref={roueRef}
            className={styles.roueImg}
            src={Roue}
            alt="Dessin d'une roue"
          />
        </div>
        <div className={styles.rain}>
          <Image
            className={styles.bannerbg}
            src={BannerBg}
            alt="Image animée de code"
            width={80}
            height={80}
          />
        </div>
        <div className={styles.bubbles}>
          <div className={styles.bubble}></div>
          <div className={styles.bubble}></div>
        </div>
        <div className={styles.drop}></div>
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
