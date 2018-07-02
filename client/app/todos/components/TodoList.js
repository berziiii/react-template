import React from 'react';
import Todo from './TodoItem';
import AddTodo from './AddTodo';
import * as API from '../api';
import * as Actions from '../../redux/actions/';
import { connect } from 'react-redux';

const connectToState = state => ({
    state
})

const registerActions = (dispatch) => ({
    toggleTodo: (todo) => dispatch(Actions.toggleTodo(todo)),
    removeTodo: (todo) => dispatch(Actions.removeTodo(todo))
})

const updateTodoIsCompleted = (props, todo) => {
    props.toggleTodo(todo);
    todo.isCompleted = !todo.isCompleted
    API.updateTodo(todo)
    .catch((err) => {
       console.error(err);
    })
}

const removeTodo = (props, todo) => {
    props.removeTodo(todo);
    API.removeTodo(todo)
    .catch((err) => {
        console.error(err);
    })
}
export const TodoList = (props) => (
    <div className="todos__list-container">
        { props.state.todos.items.map((todo, i) => <Todo key={i} todo={todo} 
                                                toggleIsCompleted={() => updateTodoIsCompleted(props, todo)} 
                                                removeTodo={() => removeTodo(props, todo)}/>)}
        <AddTodo />
    </div>
)

export default connect(
    connectToState,
    registerActions
)(TodoList)