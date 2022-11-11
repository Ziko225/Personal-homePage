import styled from "styled-components";
import { ReactComponent as buttonElement } from './buttonElement.svg';

export const Block = styled.div`
    display: flex;
    align-items: center;
    background: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.blue};
    cursor: pointer;
    :hover{
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    }
    
    :active{
        border: 1px solid rgba(209, 213, 218, 0.3);
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
        border-radius: 4px;
    }
`;

export const StyledIco = styled(buttonElement)`
    width: 24px;
    height: 24px;
    margin-left: 16px;
`;

export const Title = styled.span`
    color: #fff;
    margin: 12.5px 16px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`;