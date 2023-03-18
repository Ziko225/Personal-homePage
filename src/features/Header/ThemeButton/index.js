import { useDispatch, useSelector } from "react-redux";
import { StyledThemeIco, ThemeCaption, ThemeContainer, ThemeSwitcher } from "./styled";
import { toggleDarkMode } from "./themeSlice";

const ThemeButton = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector((state) => state.theme.value);
    const toggleDarkTheme = () => {
        dispatch(toggleDarkMode());
        localStorage.setItem("darkTheme", !(JSON.parse(localStorage.getItem("darkTheme"))));
    };

    return (
        <ThemeContainer>
            <ThemeCaption >DARK MODE {"OFF"}</ThemeCaption>
            <ThemeSwitcher onClick={() => toggleDarkTheme()}><StyledThemeIco $darkThememe={darkTheme} /></ThemeSwitcher>
        </ThemeContainer>
    )
};

export default ThemeButton;