// import React from 'react';
import { connect } from 'react-redux';
import Todos from './Todos';
import { toggleTodo } from '../../redux/actions/';
// import { AddTodo } from '../AddTodo/index';

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: todo => dispatch(toggleTodo(todo))
})

// export default TodoList;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos)