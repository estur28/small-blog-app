import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content:space-between; 
    padding-right: 10px;
    padding-left: 10px;

    h1 {
        font-size: 26px;
        width: 300px;
        color: #2F3485;
        :hover {
            color: #7277D8;
        }
    }
    h2 {
        font-size: 26px;
        color: #080E73;
        :hover {
            color: #7277D8;
        }
    }
`;
