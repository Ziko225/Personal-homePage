import { Block, Img, Content, Caption, Title, LeadParagraph, StyledLink } from "./styled";
import { email } from "../../links";
import Button from "../../common/Button";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = ({ isDarkTheme, toggleTheme }) => {
    return (
        <Block>
            <Img src={'https://avatars.githubusercontent.com/u/103639958'} alt={""} />
            <ThemeToggleButton isDarkTheme={isDarkTheme} onClick={toggleTheme} />
            <Content>
                <Caption>THIS IS</Caption>
                <Title>Nazar Bychyk</Title>
                <LeadParagraph>I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</LeadParagraph>
                <StyledLink target="_blank" href={`mailto: ${email}`}><Button title={"Hire Me"} ico={true} /></StyledLink>
            </Content>
        </Block>
    );
};

export default Header;
