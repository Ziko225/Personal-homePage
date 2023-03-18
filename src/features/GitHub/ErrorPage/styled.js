import styled from "styled-components";
import { ReactComponent as ErrorElement } from "./errorElement.svg";

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 140px;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 60px;
    }
`;

export const Ico = styled(ErrorElement)`
    color: ${({ theme }) => theme.color.black};
    width: 48px;
    height: auto;
    margin-bottom: 16px;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 12px;
    }
`;

export const Title = styled.h2`
   font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 32px;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
        margin-bottom: 16px;
    }
`;

export const SubTitle = styled.h3`
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    margin: 0 0 32px;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    max-height: 40px;
`;