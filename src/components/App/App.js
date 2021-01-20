import React from 'react'

import AppHeader from '../AppHeader/AppHeader'
import PostAddForm from '../PostAddForm/PostAddForm'
import PostFilter from '../PostFilter/PostFilter'
import PostList from '../PostList/PostList'
import SearchInput from '../SearchInput/SearchInput'

import './App.css'


const App = () => {
    return (
        <div className="app">
            <AppHeader/>
        <div className="search-panel d-flex">
            <SearchInput/>
            <PostFilter/>
        </div>
            <PostList />
            <PostAddForm/>
        </div>
    )
}

export default App;