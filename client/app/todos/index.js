import React from 'react';

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

const drawViz = () => {
    console.log('Draw Viz');
}
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.todo;
        this.toggleIsCompleted = this.toggleIsCompleted.bind(this);
    };
    toggleIsCompleted() {
        this.setState({isCompleted: !this.state.isCompleted});
        drawViz();
    }
    render() {
        return(
            <li onClick={this.toggleIsCompleted}
            className={this.state.isCompleted ? 'todo-completed': null}>{this.state.text}</li> 
        )
    }
}

const TodoList = () => {
    return (
        <div className="todos__list-container">
            <ul>
                {todosData.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
            </ul>
        </div>
    )
}

const Todos = () => {
    return (
        <div className="todos__main-container">
            <h3>My Todo List</h3>
            <TodoList />
        </div>
    )
}

module.exports = {  Todos  };