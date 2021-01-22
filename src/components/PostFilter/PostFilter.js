import React from 'react'
import './PostFilter.css'

const PostFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">All</button>
            <button type="button" className="btn btn-outline-primary">Favorites</button>
        </div>
    )
}

export default PostFilter