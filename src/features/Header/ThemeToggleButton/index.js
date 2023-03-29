import { useDispatch, useSelector } from "react-redux";
import { StyledThemeIco, ThemeCaption, ThemeContainer, ThemeButton } from "./styled";
import { selectTheme, toggleTheme } from "./themeSlice";

const ThemeToggleButton = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectTheme);
    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
    };

    return (
        <ThemeContainer>
            <ThemeCaption>DARK MODE</ThemeCaption>
            <ThemeButton onClick={toggleThemeHandler}><StyledThemeIco $darkThememe={isDarkTheme} /></ThemeButton>
        </ThemeContainer>
    )
};

export default ThemeToggleButton;