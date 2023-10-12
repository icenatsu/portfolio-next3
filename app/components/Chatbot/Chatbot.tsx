"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Chatbot.module.scss";
import { Icon } from "@iconify/react";

interface Message {
  text: string;
  type: "user" | "bot";
  id: string;
}

const ChatBot: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const lastBotMessage: HTMLDivElement | null = document.querySelector(
        `.${styles.bot}:last-child`
      );
      if (lastBotMessage) {
        const containerHeight = messagesEndRef.current.clientHeight;
        const lastBotMessageHeight = lastBotMessage.scrollHeight;

        if (lastBotMessageHeight > containerHeight) {
          messagesEndRef.current.scrollTop =
            lastBotMessage.offsetTop -
            (lastBotMessage.offsetHeight -
              messagesEndRef.current.offsetHeight +
              50);
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
      id: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    handleBotResponse(input);
  };

  useEffect(() => {
    const welcomeMessage: Message = {
      text: "Bonjour, Je serai ravie de répondre à toutes les questions que vous pourriez avoir à mon sujet.",
      type: "bot",
      id: new Date().toISOString(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleBotResponse = (input: string) => {
    const normalizedInput = normalizeString(input);

    let response: string;
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
      normalizedInput.includes("ville") ||
      normalizedInput.includes("habite")
    ) {
      response = "J'habite à Marseille.";
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
        "Je suis passionnée par le développement web et j'apprécie particulièrement résoudre des problèmes. Je considère que cette qualité est essentielle dans notre domaine. Cependant, parfois, cette passion peut devenir accablante. Si je ne parviens pas à résoudre un problème à la fin de la journée, il occupe mes pensées et peut même me hanter pendant la nuit. Je suis consciente qu'il est parfois nécessaire de prendre du recul pour mieux aborder les défis, mais cela peut être difficile pour moi. Néanmoins, je travaille constamment sur cette capacité d'accepter les situations et de trouver un équilibre entre la persévérance et le lâcher-prise. Je suis également perfectionniste, une caractéristique que je possède, bien que cela puisse parfois être un défaut. Pour remédier à cela, j'apprends à évaluer les priorités afin de ne pas investir inutilement du temps sur des détails moins importants.";
    } else if (
      normalizedInput.includes("parcour") ||
      normalizedInput.includes("parlez") ||
      normalizedInput.includes("experience") ||
      normalizedInput.includes("precedent")
    ) {
      response =
        "J'ai suivi des études en informatique et acquis de l'expérience dans le domaine technique. Durant mon dernier emploi, j'avais la responsabilité d'un enfant en situation de handicap. Bien que ce travail fût enrichissant, mon désir de stimuler mon esprit et d'acquérir de nouvelles compétences était plus fort. C'est cette aspiration qui a motivé ma décision de me tourner vers le développement web.";
    } else if (
      normalizedInput.includes("salaire") ||
      normalizedInput.includes("pretention") ||
      normalizedInput.includes("salarial")
    ) {
      response =
        "Avant d'aborder le sujet du salaire, je tiens à souligner mon profond intérêt pour rejoindre une entreprise. Mon aspiration principale est de partager mes connaissances, d'apprendre continuellement et surtout de mettre mes compétences au service d'une entreprise pour y épanouir mon potentiel. Je suis passionnée par le travail d'équipe et je crois fermement en l'importance de collaborer harmonieusement. Cependant, comme tout individu, il est essentiel de trouver un équilibre entre passion et réalité financière. C'est donc pourquoi c'est un sujet qu'il vaudra mieux aborder lors de l'entretien. Je suis convaincue que cette démarche nous permettra de bâtir une collaboration fructueuse et enrichissante pour les deux parties.";
    } else {
      response = "Je ne comprends pas la question.";
    }

    const botMessage: Message = {
      text: response,
      type: "bot",
      id: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles["chatbot"]}>
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
              className={[styles["message"], styles[`${message.type}`]].join(
                " "
              )}
              data-id={index}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleFormSubmit} className={styles["chatbot-form"]}>
          <span id="label"></span>
          <input
            aria-labelledby="label"
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Posez votre question..."
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
