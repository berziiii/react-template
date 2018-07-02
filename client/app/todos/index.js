import React from 'react';
import { loadTodos } from '../redux/actions/';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
// import { addTodo } from '../redux/actions/index';
const todosData = [
    {
        id: 1,
        text: 'Clean the house',
        isCompleted: false,
    },
    {
        id: 2,
        text: 'Wash the Car',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Take out the Trash',
        isCompleted: false,
    },
    {
        id: 4,
        text: 'Write a React App',
        isCompleted: false,
    }
];

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadTodos: (data) => { 
            dispatch(loadTodos(data)) 
        }
    }
}

const Todos = (props) => {
    if (props.todos.length === 0) {
        props.loadTodos(todosData)
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
    mapStateToProps,
    mapDispatchToProps,
)(Todos);