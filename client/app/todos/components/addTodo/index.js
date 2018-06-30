import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        // this.state
    }
    render() {
        return(
            <div className="todo__add-container">
                <input className="todo_add-input" placeholder="Add Task..."/>
            </div>
        )
    }
}

module.exports = { AddTodo }