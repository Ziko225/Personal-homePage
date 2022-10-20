import { StyledThemeIco, ThemeCaption, ThemeContainer, ThemeSwitcher } from "./styled";

const ThemeButton = () => {
    return (
        <ThemeContainer>
            <ThemeCaption>DARK MODE {"OFF"}</ThemeCaption>
            <ThemeSwitcher><StyledThemeIco /></ThemeSwitcher>
        </ThemeContainer>
    )
};

export default ThemeButton;