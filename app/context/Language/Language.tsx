"use client";
import { createContext, useState, PropsWithChildren } from "react";

export interface LanguageContext {
  isFrenchLanguage: boolean;
  switchLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContext | null>(null);

const LanguageContextProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [isFrenchLanguage, setIsFrenchLanguage] = useState<boolean>(
    navigator.language === "fr-FR" && true
  );

  const switchLanguage = () => {
    setIsFrenchLanguage((curr) => (curr = !curr));
  };

  return (
    <LanguageContext.Provider value={{ isFrenchLanguage, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
