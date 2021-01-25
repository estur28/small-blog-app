import React, {Component} from 'react'

import './PostAddForm.scss'

export default class PostAddForm extends Component  {
    constructor(props) {
    super(props);
    this.state = {
        text: ''
    }
    this.onValChange = this.onValChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    onValChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addNote(this.state.text);
        this.setState({
            text:''
        })
    }

    render () {

    return (
        <form 
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>
            <input
                type="text"
                placeholder="What are you thinking now?"
                className="form-control new-post-label"
                onChange={this.onValChange}
                value={this.state.text}
            />
            <button 
            type="submit"
            className="btn btn-danger"
            >
             Add Post</button>
        </form>
        )
    }
}

