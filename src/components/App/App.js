import React from 'react'

import AppHeader from '../AppHeader/AppHeader'
import PostAddForm from '../PostAddForm/PostAddForm'
import PostFilter from '../PostFilter/PostFilter'
import PostList from '../PostList/PostList'
import SearchInput from '../SearchInput/SearchInput'

import './App.css'


const App = () => {

    const data = [
        {label: 'hello', important: true, id: 1},
        {label: 'How are you?', important: false, id: 2},
        {label: 'bye', important: false, id: 3}
    ];

    return (
        <div className="app">
            <AppHeader/>
        <div className="search-panel d-flex">
            <SearchInput/>
            <PostFilter/>
        </div>
            <PostList posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App;