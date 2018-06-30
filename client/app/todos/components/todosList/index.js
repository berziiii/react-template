import React from 'react';
import { connect } from 'react-redux';
import { TodoItem } from '../todoItem/index';
// import { AddTodo } from '../AddTodo/index';

const mapStateToProps = (props) => {
    return {
      todos: props.todos.todos
    }
}

class TodoList extends React.Component {
    render() {
        return(
            <div className="todos__list-container">
                {this.props.todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
                {/* <AddTodo todos={this.props.todos}/> */}
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(TodoList)