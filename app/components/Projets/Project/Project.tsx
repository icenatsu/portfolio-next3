"use client";

import styles from "./Project.module.scss";
import { useEffect } from "react";
import { useFetch } from "@Hooks/Fetch/useFetch";
import Loader from "@components/Loader/Loader";
import CardProject from "@/app/components/Projets/CardProject/CardProject";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { animationSlideScrollToBottom } from "@animation/gsapAnimation";

interface IntItems {
  id: number;
  title: string;
  description: string;
  cover: { [key: string]: string };
  technologies: { [key: string]: string };
  site: string;
  code: string;
}

const Project = () => {
  const { items, error } = useFetch<IntItems[]>();

  //Animations gsap
  // animationSlideScrollToBottom(delay, durée, yfrom, topscroll, bottom scroll)
  useEffect(() => {
    animationSlideScrollToBottom("projets", 0, 0.1, 20, 85, 40);
  }, []);

  useEffect(() => {
    animationSlideScrollToBottom("projetTitle", 0.1, 0.2, 0, 75, 25);
  }, []);

  useEffect(() => {
    animationSlideScrollToBottom("caroussel", 0.2, 0.3, 0, 85, 40);
  }, []);

  return (
    <section id="projets" className={styles.container}>
      <h2 id="projetTitle" className={styles["container__title"]}>
        {" "}
        Mes projets
      </h2>
      {error === undefined ? (
        <div id="caroussel" className={styles["container__caroussel"]}>
          {items ? (
            <Swiper
              watchSlidesProgress={true}
              onResize={(swiper) => swiper.slideTo(1)}
              modules={[
                Navigation,
                Pagination,
                EffectCoverflow,
                Scrollbar,
                A11y,
              ]}
              scrollbar={{ draggable: true }}
              className={styles.swiper}
              spaceBetween={2}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                  centeredSlides: false,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 22,
                  centeredSlides: true,
                },
              }}
              pagination={false}
              loop={true}
            >
              {items.map((item: IntItems, index: number) => (
                <SwiperSlide className={styles["swiper__slide"]} key={index}>
                  {({ isActive, isVisible }) => (
                    <CardProject
                      inId={item.title}
                      inData={item}
                      inActive={isActive ? true : false}
                      inVisible={isVisible ? true : false}
                    />
                  )}
                </SwiperSlide>
              ))}
              <div className={styles["touch"]}>
                <Icon icon="icon-park-solid:move" aria-label="touch" />
              </div>
            </Swiper>
          ) : (
            <Loader />
          )}
        </div>
      ) : (
        <div id="errors" className={styles["error"]}>
          <p>Une erreur est survenue. Veuillez réessayer ultérieurement.</p>
        </div>
      )}
    </section>
  );
};

export default Project;
