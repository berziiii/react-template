import React from 'react';

const TodoItem = (props) => {
    return(
        <div className="todo__item">
            <div className="todo__toggle-container" onClick={props.toggleIsCompleted}>
                <div className={props.todo.isCompleted ? 'todo__toggle-circle-complete': 'todo__toggle-circle'}>
                    <div className={props.todo.isCompleted ? 'todo__check': null}></div>
                </div>
            </div>
            <div className={`todo__text ${props.todo.isCompleted ? 'todo__completed': null}`}>{props.todo.text}</div>
        </div> 
    )
}

export default TodoItem;