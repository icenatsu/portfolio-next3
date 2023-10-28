"use client";
import { useState, useEffect, useRef, useContext } from "react";
import styles from "./Chatbot.module.scss";
import { Icon } from "@iconify/react";
import { useWindowSizeResize } from "@Hooks/Window/useWindowSizeResize";
import { LanguageContext } from "@context/Language/Language";

interface Message {
  text: string;
  type: "user" | "bot";
}

const ChatBot: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const { windowWidth } = useWindowSizeResize();
  const languageContext = useContext(LanguageContext);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const showChatbot = () => {
    setVisible((curr) => (curr = !visible));
  };

  // Style du chatbot
  useEffect(() => {
    if (windowWidth <= 1530) {
      if (visible && document.getElementsByClassName("chatbot") !== null) {
        document.getElementById("chatbot")?.classList.add(styles.visible);
        document
          .getElementById("chatbot")
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        document.getElementById("chatbot")?.classList.remove(styles.visible);
      }
    } else {
      if (visible && document.getElementsByClassName("chatbot") !== null) {
        document.getElementById("chatbot")?.classList.add(styles.visible);
      } else {
        document.getElementById("chatbot")?.classList.remove(styles.visible);
      }
    }
  }, [visible]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const lastBotMessage: HTMLDivElement | null = document.querySelector(
        `.${styles.bot}:last-child`,
      );
      if (lastBotMessage) {
        const containerHeight = messagesEndRef.current.clientHeight;
        const lastBotMessageHeight = lastBotMessage.scrollHeight;

        if (lastBotMessageHeight > containerHeight) {
          messagesEndRef.current.scrollTop =
            lastBotMessage.offsetTop -
            (lastBotMessage.offsetHeight - messagesEndRef.current.offsetHeight);
        } else {
          messagesEndRef.current.scrollTop =
            messagesEndRef.current.scrollHeight - containerHeight;
        }
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Normalisation du message entrée par l'utilisateur
  const normalizeString = (input: string) => {
    return input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage: Message = {
      text: input,
      type: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    handleBotResponse(input);
  };

  useEffect(() => {
    const welcomeMessage: Message = {
      text: languageContext?.isFrenchLanguage
        ? "Bonjour, Je serai ravie de répondre à toutes les questions que vous pourriez avoir à mon sujet."
        : "Hello, I'll be delighted to answer any questions you might have about me.",
      type: "bot",
    };
    setMessages([welcomeMessage]);
  }, [languageContext?.isFrenchLanguage]);

  const handleBotResponse = (input: string) => {
    const normalizedInput = normalizeString(input);
    let response: string;

    if (languageContext?.isFrenchLanguage) {
      if (
        normalizedInput.includes("bonjour") ||
        normalizedInput.includes("salut") ||
        normalizedInput.includes("coucou")
      ) {
        response =
          "Bonjour et enchantée, bienvenue sur mon portfolio, si vous avez des questions n'hésitez pas";
      } else if (
        normalizedInput.includes("teletravail") ||
        normalizedInput.includes("presentiel")
      ) {
        response =
          "Je suis ouverte à travailler aussi bien en présentiel qu'en télétravail.";
      } else if (
        normalizedInput.includes("habite") ||
        normalizedInput.includes("reside")
      ) {
        response = "J'habite à Marseille.";
      } else if (
        normalizedInput.includes("age") &&
        !normalizedInput.includes("demenagement")
      ) {
        response = "J'ai 38ans.";
      } else if (
        normalizedInput.includes("mobilite") ||
        normalizedInput.includes("demenagement") ||
        normalizedInput.includes("deplace") ||
        normalizedInput.includes("emplacement")
      ) {
        response =
          "Si le travail se fait en présentiel, je suis particulièrement intéressée par des opportunités à Marseille. C'est là que je souhaite travailler.";
      } else if (
        normalizedInput.includes("appelle") ||
        normalizedInput.includes("nomme")
      ) {
        response = "Enchantée, Je m'appelle Gaëlle Blanchard.";
      } else if (normalizedInput.includes("prenom")) {
        response = "Enchantée, je me nomme Gaëlle.";
      } else if (normalizedInput.includes("nom")) {
        response = "Enchantée, mon nom de famille est Blanchard.";
      } else if (
        normalizedInput.includes("contrat") ||
        normalizedInput.includes("emploi")
      ) {
        response =
          "Je recherche un emploi en développement web, de préférence un CDI mais ne suis pas contre un CDD, du moment que je peux vous être utile :)";
      } else if (
        normalizedInput.includes("technologie") ||
        normalizedInput.includes("stack") ||
        normalizedInput.includes("competence") ||
        normalizedInput.includes("skill")
      ) {
        response =
          "Je connais le HTML, CSS, JavaScript, TypeScript, Nodesjs, React et Next.js. Je suis également compétente en SEO.";
      } else if (
        normalizedInput.includes("hobby") ||
        normalizedInput.includes("loisir")
      ) {
        response =
          "J'aime par-dessus tout coder, mais j'aime aussi les randonnées et l'éducation canine.";
      } else if (
        normalizedInput.includes("qualite") ||
        normalizedInput.includes("defaut") ||
        normalizedInput.includes("fort") ||
        normalizedInput.includes("faible")
      ) {
        response =
          "Je suis passionnée par le développement web et j'apprécie particulièrement résoudre des problèmes. Je considère que cette qualité est essentielle dans notre domaine.\n Cependant, parfois, cette passion peut devenir accablante.\n Si je ne parviens pas à résoudre un problème à la fin de la journée, il occupe mes pensées et peut même me hanter pendant la nuit. Je suis consciente qu'il est parfois nécessaire de prendre du recul pour mieux aborder les défis, mais cela peut être difficile pour moi.\n Néanmoins, je travaille constamment sur cette capacité d'accepter les situations et de trouver un équilibre entre la persévérance et le lâcher-prise.\n Je suis également perfectionniste, une caractéristique que je possède, bien que cela puisse parfois être un défaut.\n Pour remédier à cela, j'apprends à évaluer les priorités afin de ne pas investir inutilement du temps sur des détails moins importants.";
      } else if (
        normalizedInput.includes("parcour") ||
        normalizedInput.includes("parlez") ||
        normalizedInput.includes("experience") ||
        normalizedInput.includes("precedent")
      ) {
        response =
          "J'ai suivi des études en informatique et acquis de l'expérience dans le domaine technique. Durant mon dernier emploi, j'avais la responsabilité d'un enfant en situation de handicap. Bien que ce travail fût enrichissant, mon désir de stimuler mon esprit et d'acquérir de nouvelles compétences était plus fort.\n C'est cette aspiration qui a motivé ma décision de me tourner vers le développement web.";
      } else if (
        normalizedInput.includes("salaire") ||
        normalizedInput.includes("pretention") ||
        normalizedInput.includes("salarial")
      ) {
        response =
          "Avant d'aborder le sujet du salaire, je tiens à souligner mon profond intérêt pour rejoindre une entreprise.\n Mon aspiration principale est de partager mes connaissances, d'apprendre continuellement et surtout de mettre mes compétences au service d'une entreprise pour y épanouir mon potentiel.\n Je suis passionnée par le travail d'équipe et je crois fermement en l'importance de collaborer harmonieusement.\n Cependant, comme tout individu, il est essentiel de trouver un équilibre entre passion et réalité financière. C'est donc pourquoi c'est un sujet qu'il vaudra mieux aborder lors de l'entretien.\n Je suis convaincue que cette démarche nous permettra de bâtir une collaboration fructueuse et enrichissante pour les deux parties.";
      } else {
        response = "Je ne comprends pas la question.";
      }

      const botMessage: Message = {
        text: response,
        type: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } else {
      if (normalizedInput.includes("hello") || normalizedInput.includes("Hi")) {
        response =
          "Hello and delighted, welcome to my portfolio. If you have any questions, feel free to ask.";
      } else if (
        normalizedInput.includes("telecommuting") ||
        normalizedInput.includes("telework") ||
        normalizedInput.includes("remote") ||
        normalizedInput.includes("onsite") ||
        normalizedInput.includes("on the spot")
      ) {
        response = "I am open to working both onsite and remotely.";
      } else if (
        normalizedInput.includes("live") ||
        normalizedInput.includes("reside") ||
        normalizedInput.includes("stay")
      ) {
        response = "I live in Marseille.";
      } else if (
        normalizedInput.includes("age") ||
        normalizedInput.includes("old")
      ) {
        response = "I am 38 years old.";
      } else if (
        normalizedInput.includes("mobility") ||
        normalizedInput.includes("mov") ||
        normalizedInput.includes("location")
      ) {
        response =
          "If the work is onsite, I am particularly interested in opportunities in Marseille. That's where I want to work.";
      } else if (
        normalizedInput.includes("name") ||
        normalizedInput.includes("first") ||
        normalizedInput.includes("last")
      ) {
        response = "Nice to meet you, my name is Gaëlle Blanchard.";
      } else if (
        normalizedInput.includes("condition") ||
        normalizedInput.includes("contract") ||
        normalizedInput.includes("job")
      ) {
        response =
          "I am looking for a job in web development, preferably a permanent position (CDI) but I am open to a fixed-term contract (CDD) as long as I can be of help :)";
      } else if (
        normalizedInput.includes("technology") ||
        normalizedInput.includes("stack") ||
        normalizedInput.includes("competence") ||
        normalizedInput.includes("skill") ||
        normalizedInput.includes("ability")
      ) {
        response =
          "I know HTML, CSS, JavaScript, TypeScript, Node.js, React, and Next.js. I am also proficient in SEO.";
      } else if (
        normalizedInput.includes("hobby") ||
        normalizedInput.includes("leisure") ||
        normalizedInput.includes("pastime")
      ) {
        response =
          "I love coding above all, but I also enjoy hiking and dog training.";
      } else if (
        normalizedInput.includes("strength") ||
        normalizedInput.includes("strong") ||
        normalizedInput.includes("weak")
      ) {
        response =
          "I am passionate about web development and I particularly enjoy solving problems. I believe this quality is essential in our field.\n However, sometimes this passion can become overwhelming.\n If I can't solve a problem by the end of the day, it occupies my thoughts and can even haunt me at night. I am aware that it is sometimes necessary to step back to approach challenges better, but it can be difficult for me.\n Nonetheless, I am constantly working on the ability to accept situations and find a balance between persistence and letting go.\n I am also a perfectionist, a trait I possess, although it can sometimes be a flaw.\n To address this, I am learning to assess priorities to avoid investing unnecessary time in less important details.";
      } else if (
        normalizedInput.includes("background") ||
        normalizedInput.includes("speak") ||
        normalizedInput.includes("experience") ||
        normalizedInput.includes("previous")
      ) {
        response =
          "I studied computer science and gained experience in the technical field. In my last job, I was responsible for a child with disabilities. Although this job was rewarding, my desire to stimulate my mind and acquire new skills was stronger.\n It is this aspiration that motivated my decision to turn to web development.";
      } else if (
        normalizedInput.includes("salary") ||
        normalizedInput.includes("requirement") ||
        (normalizedInput.includes("wage") && !normalizedInput.includes("age"))
      ) {
        response =
          "Before discussing the topic of salary, I want to emphasize my deep interest in joining a company.\n My main aspiration is to share my knowledge, continuously learn, and above all, put my skills at the service of a company to fulfill my potential there.\n I am passionate about teamwork and firmly believe in the importance of collaborating harmoniously.\n However, like every individual, it is essential to find a balance between passion and financial reality. That's why it's a topic best discussed during the interview.\n I am convinced that this approach will enable us to build a fruitful and mutually enriching collaboration.";
      } else {
        response = "I don't understand the question.";
      }

      const botMessage: Message = {
        text: response,
        type: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <div className={styles.openBot} onClick={showChatbot}>
        <Icon icon="fluent:chat-32-filled" />
      </div>
      {visible ? (
        <div id="chatbot" className={styles["chatbot"]}>
          <div className={styles["chatbot-container"]}>
            <div className={styles["chatbot-entilted"]}>
              <Icon
                className={styles["chatbot-entilted__icon"]}
                icon="tabler:message-chatbot"
              />
              <h2 className={styles["chatbot-entilted__title"]}>ChatBot</h2>
            </div>
            <div className={styles["chatbot-messages"]} ref={messagesEndRef}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={[
                    styles["message"],
                    styles[`${message.type}`],
                  ].join(" ")}
                  data-id={index}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <form
              onSubmit={handleFormSubmit}
              className={styles["chatbot-form"]}
            >
              <span id="label"></span>
              <input
                aria-labelledby="label"
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder={
                  languageContext?.isFrenchLanguage
                    ? "Posez votre question..."
                    : "Ask your question..."
                }
              />
              <button type="submit">
                {languageContext?.isFrenchLanguage ? "Envoyer" : "Send"}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ChatBot;
