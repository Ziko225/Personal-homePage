import { useState, useEffect } from "react";

const useToggleTheme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(JSON.parse(localStorage.getItem("darkTheme") || false));

    useEffect(() => {
        localStorage.setItem("darkTheme", isDarkTheme);
    }, [isDarkTheme]);

    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

    return { isDarkTheme, toggleTheme };
};

export default useToggleTheme;