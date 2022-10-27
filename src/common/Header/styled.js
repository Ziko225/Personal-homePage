import styled from "styled-components";

export const Block = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    margin-bottom: 73px;

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 48px;
    };
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 72px;

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-row-start: span 2;
        grid-column-start: span 2;
        margin: 0;
    };
`;

export const Img = styled.img`
    width: 384px;
    border-radius: 50%;
    grid-row-start: span 2;

    @media (max-width:${({ theme }) => theme.breakpoint.tabletMax}px) {
        width: 253px;
        align-self: center;
    };

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-row-start: 1;
        width: 133px;
        margin-bottom: 16px;
    };
`;

export const Caption = styled.span`
    line-height: 16px;
    color: ${({ theme }) => theme.color.slateGray};
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 12px;

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 8px;
    };
`;

export const Title = styled.h1`
    margin: 0 0 35px;

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-row-start: span 2;
        margin: 0 0 8px;
    };
`;

export const LeadParagraph = styled.p`
    margin: 0px 0px 32px;
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 20px;

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 24px;
    };
`;

export const Clicker = styled.a`
    text-decoration: none;
    align-self: start;

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-height: 45px;
    };
`;