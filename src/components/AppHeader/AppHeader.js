import React from 'react'
import {Header} from './AppHeader.styled'


const AppHeader = ({liked, allNotes}) => {
    return (
        <Header>
            <h1>Natalia Orlova</h1>
            <h2>{allNotes} notes,  {liked} liked</h2>
        </Header>
    )
}

export default AppHeader