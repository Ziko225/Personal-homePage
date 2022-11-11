import { Block, StyledIco, Title } from "./styled";

const Button = ({ ico, title }) => {
    return (
        <Block  >
            {ico && <StyledIco />}
            <Title>{title}</Title>
        </Block >
    )
};

export default Button;