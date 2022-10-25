import styled from "styled-components";

export const Clicker = styled.a`
    width: 154px;
    height: 49px;
    border: none;
    padding: 0px;
    margin: 0px;
    background: none;
    color: ${({ theme }) => theme.color.blue};
    border-radius: 4px;
    cursor: pointer;

    :hover{
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    };
    
    :active{
        border: 1px solid rgba(209, 213, 218, 0.3);
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
        border-radius: 4px;
    };
`;
