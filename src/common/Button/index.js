import { Block, StyledIco, Title } from "./styled";

const Button = ({ ico, title }) => {
    return (
        <Block  >
            {ico ? <StyledIco/> : null}
            <Title>{title}</Title>
        </Block >
    )
};

export default Button;