import styled, { keyframes } from "styled-components";
import { ReactComponent as LoadingElement } from "./loadingElement.svg";

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

export const Title = styled.h3`
    font-weight: 400;
    margin: 0 0 48px;
    font-size: 20px;
    text-align: center;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 15px;
        margin-bottom: 24px;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Ico = styled(LoadingElement)`
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.color.blue};
    width: 160px;
    height: auto;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100px;
    }
`;