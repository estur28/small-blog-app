import React from 'react'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
   align-items: flex-end;
   justify-content:space-between; 
   h1 {
       font-size: 26px;
       :hover {
           color: green;
       }
   }
`

const AppHeader = ({liked, allNotes}) => {
    return (
        <Header>
            <h1>Natalia Orlova</h1>
            <h2>{allNotes} notes, liked {liked}</h2>
        </Header>
    )
}

export default AppHeader