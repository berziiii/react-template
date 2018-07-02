import React from 'react';
import * as Actions from '../redux/actions/';
import TodoList from './components/TodoList';
import { getTodos } from './api';
import { connect } from 'react-redux';

const connectToState = state => ({
    state
})

const registerActions = dispatch => ({
    loadTodos: (data) => { 
        dispatch(Actions.loadTodos(data)) 
    },
    retrieveTodos: () => {
        dispatch(Actions.retrieveTodos())
    },
    receivedTodos: (data) => {
        dispatch(Actions.receivedTodos(data))
    },
    hasError: () => {
        dispatch(Action.hasError())
    },
})

const getTodosData = (props) => {
    getTodos()
    .then((res) => {
        props.receivedTodos(res);
    })
    .catch((err) => {
        props.hasError();
    })
}

const getTodosIfNeeded = (props) => {
    if (props.state.isFetching) {
        return true;
    } else if (props.state.todos.length === 0) {
        getTodosData(props);
        props.retrieveTodos();
        return true;
    }
    return false;
}

const Todos = (props) => {
    if (getTodosIfNeeded(props)) {
        return (
            <div className="todos__main-container">
                <h3>Loading Todos...</h3>
            </div>
        )
    }
    return(
        <div className="todos__main-container">
            <h3>My Todo List</h3>
            <TodoList />
        </div>
    )   
}

export default connect(
    connectToState,
    registerActions,
)(Todos);