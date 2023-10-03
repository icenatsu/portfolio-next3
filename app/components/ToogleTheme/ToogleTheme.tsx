import { useState, useEffect } from "react";

export const Toogletheme = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(window.matchMedia("(prefers-color-scheme: dark)").matches);

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            setIsDarkMode(e.matches);
        });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    const switchTheme = () => {
        setIsDarkMode((curr) => (curr = !curr));
    };

    return { switchTheme }
};

export default Toogletheme;