import styled from "styled-components";
import { ReactComponent as GitHubIco } from "./github.svg";

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 88px;
`;

export const Ico = styled(GitHubIco)`
    color: ${({ theme }) => theme.color.blue};
`;

export const Title = styled.h2`
    margin: 13px 0 8px;
`;

export const SubTitle = styled.span`
    margin: 0;
    font-size: 20px;
    line-height: 140%;
`;