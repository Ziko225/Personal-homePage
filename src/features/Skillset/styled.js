import styled from "styled-components";

export const Li = styled.li`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
    margin: 8px 16px 0px 24px;
    
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    };
    
    ::marker{
        color: ${({ theme }) => theme.color.blue};
        font-size: 22px;
    };
`;