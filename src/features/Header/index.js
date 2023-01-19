import { Block, Img, Content, Caption, Title, LeadParagraph, Clicker } from "./styled";
import Button from "../Button";
import ThemeButton from "../ThemeButton";
import { email } from "../../links";

const Header = () => {
    return (
        <Block>
            <Img src={'https://avatars.githubusercontent.com/u/103639958?v=4'} alt={""} />
            <ThemeButton />
            <Content>
                <Caption>THIS IS</Caption>
                <Title>Nazar Bychyk</Title>
                <LeadParagraph>I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</LeadParagraph>
                <Clicker href={`mailto: ${email}`}><Button title={"Hire Me"} ico={true} /></Clicker>
            </Content>
        </Block>
    )
};

export default Header;
