import React, {Component} from 'react'



export default class PostFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Favorites'},

        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active =  filter === name;
            const isActive = active ? 'btn-danger' : 'btn-outline-secondary';
            return (
                <button 
                key={name} 
                type="button" 
                className={`btn ${isActive}`}
                onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

