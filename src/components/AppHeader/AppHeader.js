import React from 'react'
import {Header} from './AppHeader.styled'


const AppHeader = ({liked, allNotes}) => {
    return (
        <Header>
            <input className="form-control" type="text" placeholder="Enter your name"/>
            <h2>{allNotes} notes,  {liked} liked</h2>
        </Header>
    )
}

export default AppHeader