import { Block, Img, Content, Caption, Title, LeadParagraph } from "./styled"
import Button from "../Button";

const Header = () => {
    return (
        <Block>
            <Img src={'https://avatars.githubusercontent.com/u/103639958?v=4'} alt={"Nazar"} />
            <Content>
                <Caption>THIS IS</Caption>
                <Title>Nazar Bychyk</Title>
                <LeadParagraph>I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</LeadParagraph>
                <Button />
            </Content>
        </Block>
    )
}

export default Header;
