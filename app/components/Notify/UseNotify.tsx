"use client";

import { useReducer, useRef, useEffect, useContext } from "react";
import Notify from "./Notify";
import { LanguageContext } from "@context/Language/Language";

interface NotifyState {
  isOpen: boolean;
  variant: "error" | "success";
  message: string;
}

type NotifyAction =
  | { type: "OPEN_MODAL"; variant: "error" | "success"; message: string }
  | { type: "CLOSE_MODAL"; variant: "error"; message: string };

const notifyReducer = (
  state: NotifyState,
  action: NotifyAction,
): NotifyState => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        isOpen: true,
        variant: action.variant,
        message: action.message,
      };
    case "CLOSE_MODAL":
      return {
        isOpen: false,
        variant: "error",
        message: "",
      };
    default:
      return state;
  }
};

const initialState: NotifyState = {
  isOpen: false,
  variant: "error",
  message: "",
};

const useNotify = (): {
  showNotification: (variant: "error" | "success", message: string) => void;
  NotificationComponent: () => JSX.Element;
} => {
  const [state, dispatch] = useReducer(notifyReducer, initialState);

  const languageContext = useContext(LanguageContext);

  const notificationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const showNotification = (variant: "error" | "success", message: string) => {
    dispatch({ type: "OPEN_MODAL", variant, message });
    clearTimeOut();
    notificationTimerRef.current = setTimeout(() => {
      closeNotification();
    }, 5000);
  };

  const closeNotification = () => {
    dispatch({ type: "CLOSE_MODAL", variant: "error", message: "" });
  };

  const clearTimeOut = () => {
    if (notificationTimerRef.current !== null) {
      clearTimeout(notificationTimerRef.current);
    }
  };

  useEffect(() => {
    closeNotification();
  }, [languageContext?.isFrenchLanguage]);

  useEffect(() => {
    return () => {
      clearTimeOut();
    };
  }, []);

  const NotificationComponent = (): JSX.Element => {
    return (
      <>
        {state.isOpen && (
          <Notify
            inVariant={state.variant}
            inMessage={state.message}
            inClose={closeNotification}
          />
        )}
      </>
    );
  };

  return { showNotification, NotificationComponent };
};

export default useNotify;
