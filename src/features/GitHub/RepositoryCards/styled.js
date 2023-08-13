import styled from "styled-components";

export const CardsList = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    align-items: center;
    max-width: 1216px;
    margin: 0px 0px 120px;
    padding: 0;
    border-radius: 4px;
    gap: 32px;

    @media (max-width:${({ theme }) => theme.breakpoint.tabletMax}px) {
        gap: 12px;
        margin: 0 0px 48px;
        padding: 0;
    }

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        gap: 8px;
    }
`;

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    list-style: none;
    padding: 60px;
    min-height: 250px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.color.slateGray};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 40px rgba(9, 10, 51, 0.02), 0px 16px 28px rgba(9, 10, 51, 0.03);
    border: 6px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    &:hover{
        border: 6px solid rgba(3, 102, 214, 0.2);
    }

    @media (max-width:${({ theme }) => theme.breakpoint.tabletMax}px) {
        padding: 40px 20px 0px;
    }

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 30px 20px 0px;
    }
`;

export const Title = styled.h3`
    padding: 0px;
    margin: 0px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.color.blue};
    @media (max-width:${({ theme }) => theme.breakpoint.tabletMax}px) {
        font-size: 20px;
        line-height: 19px;
    }
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;

export const SubTitle = styled.p`
    margin: 24px 0;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 11px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.blue};
    font-size: 18px;
    &:hover{
        filter:brightness(120%);
    }
    @media (max-width:${({ theme }) => theme.breakpoint.tabletMax}px) {
        font-size: 15px;
    }
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 11px;
    }
`;

export const LinkBlock = styled.div`
    padding: 0 0 8px;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
    }
`;