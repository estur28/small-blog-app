import React, {useState} from 'react'
import {Header} from './AppHeader.styled'


const AppHeader = ({liked, allNotes}) => {

    const {nick, setNick} = useState('Enter Name');

    const setNewNick = (e) => {
           setNick(nick);
           return nick;
        }
    
    return (
        <Header>
            <input className="form-control" type="text" placeholder="Enter your name" onClick={setNewNick} />
            <h2>{allNotes} notes,  {liked} liked</h2>
        </Header>
    )
}

export default AppHeader