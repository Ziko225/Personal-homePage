import { useDispatch, useSelector } from "react-redux";
import { StyledThemeIco, ThemeCaption, ThemeContainer, ThemeSwitcher } from "./styled";
import {toggleDarkMode} from "./themeSlice"

const ThemeButton = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.value)

    return (
        <ThemeContainer>
            <ThemeCaption >DARK MODE {"OFF"}</ThemeCaption>
            <ThemeSwitcher onClick={() => dispatch(toggleDarkMode())}><StyledThemeIco mode={mode ? "active" : null} /></ThemeSwitcher>
        </ThemeContainer>
    )
};

export default ThemeButton;