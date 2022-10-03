import styled from "styled-components";

export const Block = styled.div`
    display:flex;
    flex-direction:column;
    max-width:1089px;
    margin:119px 20px 63px;
`

export const Caption = styled.span`
    line-height: 16px;
    color:${({ theme }) => theme.color.textSecondary};
    font-weight: 700;
    font-size: 12px;
`

export const Title = styled.h2`
    margin:24px 0px 24px;
    :hover{
        color:${({ theme }) => theme.color.blue};
    }
`

export const LeadParagraph = styled.p`
    margin:0px 0px 32px;
    max-width:670px;
    color:${({ theme }) => theme.color.textSecondary};
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.05em;
`

export const Icons = styled.div`
    display:flex;
`

export const Ico = styled.a`
    height:48px;
    width:48px;
    margin-right:24px;
    text-decoration:none;
    color:${({ theme }) => theme.color.black};
    cursor: pointer;
    :hover{
        color:${({ theme }) => theme.color.blue};
    }
`