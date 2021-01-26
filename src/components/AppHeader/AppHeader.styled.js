import styled from 'styled-components';

export const Header = styled.div`
    display: block;
    justify-content:space-between; 

    input {
        font-size: 20px;
        text-align: center;
        width: auto;
        flex-grow: 1;
        
        outline-color: yellow;
        border: none;   
        width: 300px;
        margin: 0px auto;
        color: #2F3485;
        :hover {
            color: #7277D8;
        }
    }

    h2 {
        align-items: center;
        max-width: 145px;
        margin: 20px auto;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 20px;
        color: #080E73;
        :hover {
            color: #7277D8;
        }
    }
`;
