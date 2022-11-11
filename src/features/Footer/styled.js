import styled from "styled-components";

export const Block = styled.address`
    display: flex;
    flex-direction: column;
    margin: 0 0 63px;
    font-style: unset;

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 32px;
    }
`;

export const Caption = styled.span`
    line-height: 16px;
    color:${({ theme }) => theme.color.slateGray};
    font-weight: 700;
    font-size: 12px;
`;

export const Title = styled.h2`
    margin: 24px 0px 24px;

    :hover{
        color:${({ theme }) => theme.color.blue};
    }
`;

export const LeadParagraph = styled.p`
    margin: 0px 0px 32px;
    max-width: 670px;
    color: ${({ theme }) => theme.color.black};
    letter-spacing: 0.05em;
`;

export const Icons = styled.div`
    display: flex;
`;

export const Ico = styled.a`
    height: 48px;
    margin-right: 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    cursor: pointer;

    :hover{
        color: ${({ theme }) => theme.color.blue};
    }

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 32px;
        margin-right: 16px;
    }
`;