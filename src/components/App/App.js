import React, {Component} from 'react'

import AppHeader from '../AppHeader/AppHeader'
import PostAddForm from '../PostAddForm/PostAddForm'
import PostFilter from '../PostFilter/PostFilter'
import PostList from '../PostList/PostList'
import SearchInput from '../SearchInput/SearchInput'

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`


export default class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'hello', important: true, id: 1},
                {label: 'How are you?', important: false, id: 2},
                {label: 'bye', important: false, id: 3}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const ind = data.findIndex(elem => elem.id === id);
            const first = data.slice(0, ind);
            const second = data.slice(ind + 1);

            const newArr = [...first, ...second];
            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newEl = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newEl];
            return {
                data: newArr
            }
        })
    }
   
    render() {

    return (
        <AppBlock>
            <AppHeader/>
        <div className="search-panel d-flex">
            <SearchInput/>
            <PostFilter/>
        </div>
            <PostList 
            posts={this.state.data} 
            onDelete={this.deleteItem} 
            />
            <PostAddForm
            addNote={this.addItem} />
        </AppBlock>
     )
    }
}
