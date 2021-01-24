import React from 'react'
import { Button } from 'reactstrap'
import './PostFilter.css'

const PostFilter = () => {
    return (
        <div className="btn-group">
            <Button outline color='info'>All</Button>
            <button type="button" className="btn btn-info">All</button>
            <button type="button" className="btn btn-outline-primary">Favorites</button>
        </div>
    )
}

export default PostFilter