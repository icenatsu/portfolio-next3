import { useState, useEffect } from "react";

export const Toogletheme = (): {
    switchTheme: () => void
} => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDarkMode(true)
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            setIsDarkMode(false)
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }

    }, [])

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => setIsDarkMode(e.matches))

        return (
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => setIsDarkMode(e.matches))
        )
    }, [])




    const switchTheme = () => {
        setIsDarkMode((curr) => (curr = !curr));
    };

    return { switchTheme }
};

export default Toogletheme;