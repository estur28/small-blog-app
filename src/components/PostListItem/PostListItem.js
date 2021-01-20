import React from 'react'

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Start Blog
            </span>  

            <div className="d-flex justify-content-center align-items-center">
                <button 
                type="button" 
                className="btn-star-half-o btn-sm">
                    <i className="fa fa-star-half-o"></i>
                </button>

                <button type="button" className="btn-trash-o btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>

                <i class="fa fa-heartbeat"></i>
            </div>  
        </li>
    )
}

export default PostListItem
