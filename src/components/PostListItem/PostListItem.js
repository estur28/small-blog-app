import React, {Component} from 'react'

import './PostListItem.css'

export default class PostListItem extends Component {
   

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
            <span 
            className="app-list-item-label"
            onClick={this.onToggleLike}>
                {label}
            </span>  

            <div className="d-flex justify-content-center align-items-center">
                <button 
                type="button" 
                className="btn-star-half-o btn-sm"
                onClick={this.onToggleImportant}>
                    <i className="fa fa-star-half-o"></i>
                </button>

                <button 
                type="button" 
                className="btn-trash-o btn-sm"
                onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>

                <i class="fa fa-heartbeat"></i>
            </div>  
        </div>  
        )
    }
}


