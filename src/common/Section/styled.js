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

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin:32px;
    padding-bottom:18px;
    border-bottom:1px solid ${({ theme }) => theme.color.neutral};
`

export const Content = styled.ul`
    display:grid;
    padding:0px;
    margin:0px 32px 32px;
    grid-template-columns:repeat(3, 1fr);
    max-width:100%;
`

export const Li = styled.li`
    color:${({ theme }) => theme.color.textSecondary};
    font-size: 18px;
    margin:8px 0px 0px 24px;
    ::marker{
        color:${({ theme }) => theme.color.blue};
        font-size:22px;
    }
`