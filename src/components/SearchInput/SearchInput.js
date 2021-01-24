import React, {Component} from 'react'
import './SearchInput.css'

export default class SearchPanel extends Component {
   render() {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Search notes"
        />
    )
   }
}
