import styled from "styled-components";

export const Block = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    margin: 0px 0px 72px;
    border-radius: 4px;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 50px;
    }
`;

export const Title = styled.h2`
    font-weight: 900;
    margin: 32px;
    padding-bottom: 18px;
    border-bottom: 1px solid ${({ theme }) => theme.color.neutral};
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 16px;
    }
`;

export const Content = styled.ul`
    display: grid;
    padding: 0px;
    margin: 0px 32px 32px;
    grid-template-columns: repeat(auto-fill, minmax(302px, 1fr));
    align-items: center;
    justify-items: start;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        margin: 0px 16px 32px;
    }
`;

export const Li = styled.li`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
    margin: 8px 16px 0px 24px;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }
    ::marker{
        color: ${({ theme }) => theme.color.blue};
        font-size: 22px;
    }
`;