import { Block, Title, Content } from "./styled";

const Container = ({ title, children }) => {
    return (
        <>
            <Block>
                <Title>{title}</Title>
                <Content>
                    {children}
                </Content>
            </Block>
        </>
    )
};

export default Container;