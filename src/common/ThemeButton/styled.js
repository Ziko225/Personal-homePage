import styled, { css } from "styled-components";
import { ReactComponent as themeIco } from './themeIco.svg';

export const ThemeContainer = styled.div`
    display: flex;
    align-items:center;
    margin: 0 0 38px;
    align-self: flex-end;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme.color.textSecondary};
`;

export const ThemeCaption = styled.span`
    
`;

export const ThemeSwitcher = styled.button`
    display: flex;
    justify-content: start;
    align-items: center;
    border: none;
    border-radius: 25px;
    padding: 0;
    width: 47px;
    margin-left: 12.47px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.lightGrey};
`;

export const StyledThemeIco = styled(themeIco)`
    color: ${({ theme }) => theme.color.textSecondary};
    margin: 2.5px;
    transition: 500ms;

    ${({ mode }) => mode && css`
        transform: translate(100%);
    `}
`;