import React, {Component} from 'react'
import { Col, Container, Row } from 'reactstrap'

import AppHeader from '../AppHeader/AppHeader'
import PostAddForm from '../PostAddForm/PostAddForm'
import PostFilter from '../PostFilter/PostFilter'
import PostList from '../PostList/PostList'
import SearchInput from '../SearchInput/SearchInput'
import {AppBlock} from './App.styled'



export default class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Your post can be here...', important: false, like: false, id: 1}
                // {label: 'How are you?', important: false, like: false, id: 2},
                // {label: 'bye', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

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

    onToggleImportant(id) {
        this.setState(({data}) => {
            const ind = data.findIndex(elem => elem.id === id);

            const first = data[ind];
            const newItem = {...first, like: !first.important};

            const newArr = [...data.slice(0, ind), newItem, ...data.slice(ind + 1)];

            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const ind = data.findIndex(elem => elem.id === id);

            const first = data[ind];
            const newItem = {...first, important: !first.like};

            const newArr = [...data.slice(0, ind), newItem, ...data.slice(ind + 1)];

            return {
                data: newArr
            }
        })
    }

    searchNotes(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }
   
    render() {
        const {data, term, filter } = this.state;
        const liked = data.filter(item => item.like).length;
        const allNotes = data.length;

        const visibleNotes = this.filterPost(this.searchNotes(data, term), filter);

    return (
    <Container>
        <AppBlock>
        <Row>
            <Col>
                <AppHeader
                    liked={liked}
                    allNotes={allNotes} />
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="search-panel d-flex">
                    <SearchInput onSearch={this.onSearch} />
                <PostFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect} />
                </div>
            </Col>
        </Row>
        

        <Row>
            <Col>
                <PostList 
                posts={visibleNotes} 
                onDelete={this.deleteItem} 
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}
                />
            </Col>
            </Row>

            <Row>
            <Col>
                <PostAddForm
                addNote={this.addItem} />
            </Col>
                 </Row>
            </AppBlock>
        </Container>
     )
    }
}
