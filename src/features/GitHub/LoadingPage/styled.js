import styled, { keyframes } from "styled-components";
import { ReactComponent as LoadingElement } from "./loadingElement.svg";

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme})=> theme.color.black};
`;

export const Title = styled.h3`
    font-weight: 400;
    margin: 88px 0 48px;
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
    color: ${({theme})=> theme.color.blue};
    width: 160px;
    height: auto;
    margin-bottom: 140px;
`;