import React, {Component} from 'react'

import './SearchInput.scss'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearch(term);

    }
   render() {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Search notes"
            onChange={this.onSearch}
        />
    )
   }
}
