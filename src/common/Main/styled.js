import styled from "styled-components";

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 1216px;
    margin: 112px 64px 0;

    @media (max-width:${({ theme }) => theme.breakpoint.tabletMax}px) {
        grid-row-start: 1;
        margin: 64px 32px 0;
    }

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-row-start: 1;
        margin: 32px 8px 0;
    }
`
