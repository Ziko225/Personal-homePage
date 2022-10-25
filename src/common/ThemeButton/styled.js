import styled, { css } from "styled-components";
import { ReactComponent as themeIco } from './themeIco.svg';

export const ThemeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    margin-bottom: 38px;
`;

export const ThemeCaption = styled.span`
    color: ${({ theme }) => theme.color.slateGray};
`;

export const ThemeSwitcher = styled.button`
    display: flex;
    border: none;
    border-radius: 25px;
    padding: 0;
    width: 47px;
    margin-left: 12.47px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.lightGrey};
`;

export const StyledThemeIco = styled(themeIco)`
    border-radius: 50%;
    color: ${({ theme }) => theme.color.lightBG};
    background-color: ${({ theme }) => theme.color.slateGray};
    margin: 2.5px;
    transition: 500ms;

    ${({ mode }) => mode && css`
        transform: translate(100%);
    `};
`;