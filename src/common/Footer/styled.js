import styled from "styled-components";

export const Block = styled.section`
    display:flex;
    flex-direction:column;
    max-width:1216px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    margin:0px 0px 72px;
    border-radius: 4px;
`

export const Element = styled.div`
    width:1216px;
    height:500px;
`