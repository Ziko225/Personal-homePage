import Container from "../../common/Container";
import { Li } from "./styled";

const Skillset = () => {
    return (
        <>
            <Container title={"My skillset includes"}>
                <Li>JavaScript: ES6+</Li>
                <Li>React</Li>
                <Li>Semantic & accessible HTML</Li>
                <Li>Styled-Components</Li>
                <Li>CSS Grid</Li>
                <Li>CSS Flexbox</Li>
                <Li>React Router</Li>
                <Li>React Hooks</Li>
                <Li>Redux (Toolkit)</Li>
                <Li>Working with API (fetch, axios)</Li>
                <Li>Promises, Async/Await</Li>
                <Li>Error handling</Li>
                <Li>Teamwork</Li>
                <Li>Git</Li>
                <Li>GitHub Pull Requests & Review</Li>
                <Li>Responsive Web Design</Li>
                <Li>Immutability</Li>
                <Li>Markdown</Li>
                <Li>CSS BEM convention</Li>
                <Li>Trello</Li>
                <Li>Scrum</Li>
                <Li>NPM</Li>
                <Li>Figma (for dev)</Li>
                <Li>Adobe Photoshop</Li>
            </Container>
            <Container title={"What I want to learn next"}>
                <Li>TypeScript</Li>
                <Li>React Context</Li>
                <Li>Cypress</Li>
                <Li>Node.js</Li>
                <Li>SQL</Li>
            </Container>
        </>
    )
};

export default Skillset;