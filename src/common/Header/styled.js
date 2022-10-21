import styled from "styled-components";

export const Block = styled.div`
    display: flex;
    max-width: 1089px;
    margin: 119px 20px 63px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 72px;
`;

export const Img = styled.img`
    width: 384px;
    height: 384px;
    border-radius: 50%;
`;

export const Caption = styled.span`
    line-height: 16px;
    color: ${({ theme }) => theme.color.slateGray};
    font-weight: 700;
    font-size: 12px;
`;

export const Title = styled.h1`
    margin: 12px 0px 35px;
`;

export const LeadParagraph = styled.p`
    margin: 0px 0px 32px;
    color: ${({ theme }) => theme.color.slateGray};
`;