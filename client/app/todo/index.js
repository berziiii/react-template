import React from 'react';

const Todo = ({match}) => {
    return (
        <div className="todo__main-container">
            <h3>ToDo Page</h3>
            <h5> {match.params.todoId} </h5>
        </div>
    )
}

module.exports = {  Todo  };