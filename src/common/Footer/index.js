import { Block, Caption, Title, LeadParagraph, Icons, Ico } from "./styled"
import { ReactComponent as GitHub } from "./icons/github.svg";
import { ReactComponent as Instagram } from "./icons/instagram.svg";
import { ReactComponent as LinkedIN } from "./icons/linkedIN.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";

const Footer = () => {
    return (
        <Block>
            <Caption>LET’S TALK!</Caption>
            <Title>nazar1bychyk@gmail.com</Title>
            <LeadParagraph>
                I’m always open to new projects whenever I have the time.
                If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
            </LeadParagraph>
            <Icons>
                <Ico href="https://github.com/Ziko225"><GitHub /></Ico>
                <Ico href="https://www.facebook.com/Ziko255"><Facebook /></Ico>
                <Ico href="https://www.linkedin.com/in/nazar-bychyk-502316252"><LinkedIN /></Ico>
                <Ico href="https://www.instagram.com/nazar_bychyk"><Instagram /></Ico>
            </Icons>
        </Block>
    )
}

export default Footer;
