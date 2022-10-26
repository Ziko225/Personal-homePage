import Button from "../../../common/Button";
import { Block, Ico, Title, SubTitle, Link } from "./styled";

const ErrorPage = () => {
    return (
        <Block>
            <Ico />
            <Title>Ooops! Something went wrong... </Title>
            <SubTitle>Sorry, failed to load Github projects.<br />
                You can check them directly on Github.</SubTitle>
            <Link target={"_blank"} href="https://github.com/Ziko225"><Button title={"Go to Github"} /></Link>
        </Block>
    )
};

export default ErrorPage;