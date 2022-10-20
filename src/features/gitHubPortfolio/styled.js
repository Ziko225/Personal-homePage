import styled from "styled-components";

export const Block = styled.section`
    display:grid;
    grid-template-columns:1fr 1fr;
    align-items:center;
    max-width:1216px;
    margin:0px 0px 72px;
    border-radius: 4px;
    gap:32px;
`

export const Element = styled.div`
    display:flex;
    flex-direction:column;
    padding:12%;
    max-width:450px;
    min-height:260px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    color: ${({ theme }) => theme.color.textSecondary};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border: 6px solid rgba(209, 213, 218, 0.3);
    :hover{
        border: 6px solid rgba(3, 102, 214, 0.2);
    }
    border-radius: 4px;
`

export const Title = styled.h2`
    padding:0px;
    margin:0px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.color.blue};
`

export const SubTitle = styled.span`
    margin: 24px 0;
`

export const Link = styled.a`
    text-decoration:none;
    color: ${({ theme }) => theme.color.blue};
    :hover{
        filter:brightness(120%);
    }
`