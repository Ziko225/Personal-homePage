import styled from "styled-components";

export const Li = styled.li`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
    margin: 8px 16px 0px 24px;
    
    ::marker{
        color: ${({ theme }) => theme.color.blue};
        font-size: 22px;
    };
`;