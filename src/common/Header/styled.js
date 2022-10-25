import styled from "styled-components";

export const Block = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    margin-bottom: 73px;
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
    grid-row-start: span 2;
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