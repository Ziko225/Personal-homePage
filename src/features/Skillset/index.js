import { Block, Content, Li, Title } from "./styled";

const Skillset = () => {
    return (
        <>
            <Block>
                <Title>My skillset includes</Title>
                <Content>
                    <Li>TypeScript</Li>
                    <Li>JavaScript: ES6+</Li>
                    <Li>React</Li>
                    <Li>Semantic & accessible HTML</Li>
                    <Li>Styled-Components</Li>
                    <Li>CSS Grid</Li>
                    <Li>CSS Flexbox</Li>
                    <Li>React Router</Li>
                    <Li>React Hooks</Li>
                    <Li>Redux (Toolkit)</Li>
                    <Li>Redux Saga</Li>
                    <Li>Working with API (fetch, axios)</Li>
                    <Li>Promises, Async/Await</Li>
                    <Li>Error handling</Li>
                    <Li>Teamwork</Li>
                    <Li>Git</Li>
                    <Li>GitHub Pull Requests & Review</Li>
                    <Li>Responsive Web Design</Li>
                    <Li>NPM</Li>
                    <Li>Immutability</Li>
                    <Li>Markdown</Li>
                    <Li>CSS BEM convention</Li>
                    <Li>Scrum</Li>
                    <Li>Trello</Li>
                    <Li>Figma (for dev)</Li>
                    <Li>Adobe Photoshop</Li>
                </Content>
            </Block>
            <Block>
                <Title>What I want to learn next</Title>
                <Content>
                    <Li>React Context</Li>
                    <Li>Cypress</Li>
                    <Li>Node.js</Li>
                    <Li>SQL</Li>
                </Content>
            </Block>
        </>
    )
};

export default Skillset;