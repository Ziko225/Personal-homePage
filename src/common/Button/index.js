import { Clicker } from "./styled";
import { ReactComponent as Ico } from './button.svg';
import { email } from "../../links";

const Button = () => {
    return (
        <Clicker href={`mailto: ${email}`} > <Ico /></Clicker >
    )
};

export default Button;