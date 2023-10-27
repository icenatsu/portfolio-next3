"use client";

import styles from "./Contact.module.scss";
import { RefObject, useEffect, useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import useNotify from "@components/Notify/UseNotify";
import { animationSlideScrollToBottom } from "@animation/gsapAnimation";
import { Icon } from "@iconify/react";
import { LanguageContext } from "@context/Language/Language";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  objet: string;
  message: string;
}

const Contact = (): JSX.Element => {
  const { showNotification, NotificationComponent } = useNotify();
  const languageContext = useContext(LanguageContext);

  const form: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const schema = yup
    .object({
      lastname: yup
        .string()
        .matches(
          /^([a-zA-Z àâäéèêëïîôöùûüç,.'-]{1,20}-{0,1})?([a-zA-Z àâäéèêëïîôöùûüç,.'-]{3,20})$/,
          languageContext?.isFrenchLanguage
            ? "Veuillez saisir un nom valide."
            : "Please enter a valid name."
        )
        .required(
          languageContext?.isFrenchLanguage
            ? "Veuillez saisir votre nom."
            : "Please enter your name."
        ),
      firstname: yup
        .string()
        .matches(
          /^([a-zA-Z àâäéèêëïîôöùûüç,.'-]{1,20}-{0,1})?([a-zA-Z àâäéèêëïîôöùûüç,.'-]{3,20})$/,
          languageContext?.isFrenchLanguage
            ? "Veuillez saisir un prénom valide."
            : "Please enter a valid first name."
        )
        .required(
          languageContext?.isFrenchLanguage
            ? "Veuillez saisir votre prénom"
            : "Please enter your first name."
        ),
      email: yup
        .string()
        .email("Veuillez entrer un email valide.")
        .matches(
          /^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/,
          languageContext?.isFrenchLanguage
            ? "Veuillez saisir un email valide."
            : "Please enter a valid email."
        )
        .required(
          languageContext?.isFrenchLanguage
            ? "Veuillez saisir votre email."
            : "Please enter your email."
        ),
      tel: yup
        .string()
        .matches(/^(?:(?:\+|00)33|0)\d{9}$/, {
          message: languageContext?.isFrenchLanguage
            ? "Veuillez saisir un numéro de téléphone."
            : "Please enter a valid phone number.",
          excludeEmptyString: true,
        })
        .required(
          languageContext?.isFrenchLanguage
            ? "Veuillez saisir votre numéro de téléphone."
            : "Please enter your phone number."
        ),
      objet: yup
        .string()
        .matches(
          /^.{1,50}$/,
          languageContext?.isFrenchLanguage
            ? "Veuillez saisir un objet comportant entre 1 et 50 caractères."
            : "Please enter a subject containing between 1 and 50 characters."
        )
        .required(
          languageContext?.isFrenchLanguage
            ? "Veuillez entrer un objet."
            : "Please enter a subject."
        ),
      message: yup
        .string()
        .matches(
          /^[\s\S]{0,500}$/,
          languageContext?.isFrenchLanguage
            ? "Veuillez saisir un message comportant entre 1 et 500 caractères."
            : "Please enter a message containing between 1 and 500 characters."
        )
        .required(
          languageContext?.isFrenchLanguage
            ? "Veuillez entrer votre message."
            : "Please enter your message containing between 1 and 500 characters"
        ),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    showNotification(
      "success",
      "Votre message a bien été envoyé. Vous recevrez une réponse prochainement. Merci."
    );
    reset();
  };

  const sendEmail = async () => {
    try {
      await schema.validate(getValues());
      await emailjs.sendForm(
        "service_3q9gau9",
        "template_ydx2aq3",
        form.current as HTMLFormElement,
        "hXMSreLWs3gOf-51k"
      );
    } catch (e) {
      showNotification(
        "error",
        "Vos informations sont incorrectes, veuillez les corriger afin de pouvoir envoyer votre message."
      );
    }
  };

  // Animations gsap
  useEffect(() => {
    animationSlideScrollToBottom("contact", 0.3, 0.5, 0, 75, 25);
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <div id="container" className={styles["container-formulaire"]}>
        <h2 id="contactTitle" className={styles.title}>
          Contact
        </h2>
        <NotificationComponent />
        <form
          ref={form}
          className={styles.form__contact}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={styles.label} htmlFor="lastName">
            {languageContext?.isFrenchLanguage ? "Nom:" : "Name"}
            <input
              className={styles.input}
              placeholder={
                languageContext?.isFrenchLanguage
                  ? "\u{1F464} Saisir votre nom"
                  : "\u{1F464} Enter your name"
              }
              type="text"
              id="lastName"
              {...register("lastname")}
            />
            {errors.lastname && (
              <span className={styles.errors}>{errors.lastname.message}</span>
            )}
          </label>
          <label className={styles.label} htmlFor="firstName">
            {languageContext?.isFrenchLanguage ? "Prénom:" : "First Name:"}
            <input
              className={styles.input}
              placeholder={
                languageContext?.isFrenchLanguage
                  ? "\u{1F464} Saisir votre prénom"
                  : "\u{1F464} Enter your first name"
              }
              type="text"
              id="firstName"
              {...register("firstname")}
            />
            {errors.firstname && (
              <span className={styles.errors}>{errors.firstname.message}</span>
            )}
          </label>
          <label className={styles.label} htmlFor="email">
            E-mail:
            <input
              className={styles.input}
              placeholder={
                languageContext?.isFrenchLanguage
                  ? "\u{2709} Saisir votre email"
                  : "\u{2709} Enter your email"
              }
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <span className={styles.errors}>{errors.email.message}</span>
            )}
          </label>
          <label className={styles.label} htmlFor="tel">
            {languageContext?.isFrenchLanguage ? "Téléphone:" : "Phone Number:"}
            <input
              className={styles.input}
              placeholder={
                languageContext?.isFrenchLanguage
                  ? "\u{1F4F1} Saisir votre téléphone"
                  : "\u{1F4F1} Enter your phone number"
              }
              type="text"
              id="tel"
              {...register("tel")}
            />
            {errors.tel && (
              <span className={styles.errors}>{errors.tel.message}</span>
            )}
          </label>
          <label className={styles.label} htmlFor="objet">
            {languageContext?.isFrenchLanguage ? "Objet:" : "Subject:"}
            <input
              className={styles.input}
              placeholder={
                languageContext?.isFrenchLanguage
                  ? "\u{2712} Saisir l'objet de votre message"
                  : "\u{2712} Enter the subject of your message"
              }
              type="text"
              id="objet"
              {...register("objet")}
            />
            {errors.objet && (
              <span className={styles.errors}>{errors.objet.message}</span>
            )}
          </label>
          <label className={styles.label}>
            Message :
            <textarea
              placeholder={
                languageContext?.isFrenchLanguage
                  ? "\u{2712} Saisir ici votre message"
                  : "\u{2712} Enter your message here"
              }
              className={styles.textarea}
              {...register("message")}
            />
            {errors.message && (
              <span className={styles.errors}>{errors.message.message}</span>
            )}
          </label>
          <button
            className={styles.send}
            type="submit"
            onClick={sendEmail}
            aria-label="Envoyer"
          >
            <Icon icon="cib:telegram-plane" aria-label="Mail" />
          </button>
          <div className={styles.elipse}></div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
