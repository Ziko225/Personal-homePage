import { Block, Caption, Title, LeadParagraph, Icons, Ico } from "./styled"
import { ReactComponent as GitHub } from "./icons/github.svg";
import { ReactComponent as Instagram } from "./icons/instagram.svg";
import { ReactComponent as LinkedIN } from "./icons/linkedIN.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { email, facebook, gitHub, instagram, linkedin } from "../../links";

const Footer = () => {
    return (
        <Block>
            <Caption>LET’S TALK!</Caption>
            <Title>{email}</Title>
            <LeadParagraph>
                I’m always open to new projects whenever I have the time.
                If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
            </LeadParagraph>
            <Icons>
                <Ico target={"_blank"} href={gitHub}><GitHub /></Ico>
                <Ico target={"_blank"} href={facebook}><Facebook /></Ico>
                <Ico target={"_blank"} href={linkedin}><LinkedIN /></Ico>
                <Ico target={"_blank"} href={instagram}><Instagram /></Ico>
            </Icons>
        </Block>
    )
};

export default Footer;
