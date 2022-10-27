import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after ::before {
        box-sizing: inherit;
    }

    body{
        background-color: ${({ theme }) => theme.color.lightBG};
        font-family: 'Inter', sans-serif;
        display:flex;
        justify-content:center;
        align-items:center;
        letter-spacing: 0.05em;
    }

    h1{
        color: ${({ theme }) => theme.color.black};
        font-weight: 900;
        font-size: 38px;
        line-height: 46px;

        @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 22px;
            line-height: 27px;
        }
    }

    h2{
        color: ${({ theme }) => theme.color.black};
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;

        @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 18px;
            line-height: 22px;
        }
    }

    h3{
        color: ${({ theme }) => theme.color.black};
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
    }

    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;

        @media (max-width:${({ theme }) => theme.breakpoint.tabletMax}px) {
            font-size: 15px;
        };

        @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 14px;
        }
    }
`;