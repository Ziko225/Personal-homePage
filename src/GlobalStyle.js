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
    }

    h2{
        color: ${({ theme }) => theme.color.black};
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
    }

    h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
    }


`