import React from 'react'

const PostAddForm = ({addNote}) => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="What are your thinks?"
                className="form-control new-post-label"
            />
            <button 
            type="submit"
            className="btn btn-outline-secondary"
            onClick={() => addNote('hi')}
            >
                Add Post</button>
        </form>
    )
}

export default PostAddForm
