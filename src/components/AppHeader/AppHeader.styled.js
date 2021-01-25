import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content:space-between; 
    padding-right: 10px;
    padding-left: 10px;
    

    input {
        font-size: 20px;
        width: auto;
        flex-grow: 1;
        border-radius: 10px;
        outline-color: yellow;
        border: none;   
        width: 300px;
        margin: 35px auto;
        color: #2F3485;
        :hover {
            color: #7277D8;
        }
    }

    h2 {
        align-items: center;
        margin: 40px auto;
        font-size: 20px;
        color: #080E73;
        :hover {
            color: #7277D8;
        }
    }
`;
