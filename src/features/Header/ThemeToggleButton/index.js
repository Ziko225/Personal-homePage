import { StyledThemeIco, ThemeCaption, ThemeContainer, ThemeButton } from "./styled";

const ThemeToggleButton = ({ isDarkTheme, onClick }) => {
    return (
        <ThemeContainer>
            <ThemeCaption>DARK MODE</ThemeCaption>
            <ThemeButton onClick={onClick}><StyledThemeIco $darkThememe={isDarkTheme} /></ThemeButton>
        </ThemeContainer>
    )
};

export default ThemeToggleButton;