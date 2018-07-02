import React from 'react';

const TodoItem = ({isCompleted, text, onClick}) => (
    <div className="todo__item">
        <div className="todo__toggle-container" onClick={onClick}>
            <div className={isCompleted ? 'todo__toggle-circle-complete': 'todo__toggle-circle'}>
                <div className={isCompleted ? 'todo__check': null}></div>
            </div>
        </div>
        <div className={`todo__text ${isCompleted ? 'todo__completed': null}`}>{text}</div>
    </div> 
)

export default TodoItem;