import React from 'react';
import Todo from './Todo';

const Todos = ({todos, toggleTodo}) => (
    <div className="todos__list-container">
        { todos.map((todo, i) => <Todo key={i} {...todo} onClick={ () => toggleTodo(todo) } />)}
    </div>
)



// export default TodoList;
export default Todos