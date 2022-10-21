import { useDispatch, useSelector } from "react-redux";
import { StyledThemeIco, ThemeCaption, ThemeContainer, ThemeSwitcher } from "./styled";
import {toggleDarkMode} from "./themeSlice";

const ThemeButton = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector((state) => state.theme.value);

    return (
        <ThemeContainer>
            <ThemeCaption >DARK MODE {"OFF"}</ThemeCaption>
            <ThemeSwitcher onClick={() => dispatch(toggleDarkMode())}><StyledThemeIco mode={darkTheme ? "active" : null} /></ThemeSwitcher>
        </ThemeContainer>
    )
};

export default ThemeButton;