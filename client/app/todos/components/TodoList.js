import React from 'react';
import Todo from './TodoItem';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions/';

const connectToState = state => ({
    todos: state.todos,
})

const registerActions = (dispatch) => ({
    toggleTodo: todo => dispatch(toggleTodo(todo))
})

export const TodoList = (props) => (
    <div className="todos__list-container">
        { props.todos.map((todo, i) => <Todo key={i} todo={todo} toggleIsCompleted={() => props.toggleTodo(todo)} />)}
        <AddTodo />
    </div>
)

export default connect(
    connectToState,
    registerActions
)(TodoList)