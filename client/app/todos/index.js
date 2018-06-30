import React from 'react';
import { connect } from 'react-redux';
import { TodoList } from './components/todosList/index';
import { addTodo } from '../redux/actions/index';

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

const mapStateToProps = props => {
    return {
      todos: props.todos.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addTodo: todo => dispatch(addTodo(todo))
    }
}

class Todos extends React.Component {
    render() {
        debugger;
        todosData.forEach((todo) => {
            this.props.addTodo(todo)
        })
        return(
            <div className="todos__main-container">
                <h3>My Todo List</h3>
                <TodoList todos={this.props.todos}/>
            </div>
        )   
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todos);