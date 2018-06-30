import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../../redux/actions/index';

const mapStateToProps = (props) => {
    debugger;
    return {
      todo: props.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    props.dispatch(toggleTodo(todo));
}

class TodoItem extends React.Component {
// const TodoItem = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.toggleIsCompleted = this.toggleIsCompleted.bind(this);
    // };
    // toggleIsCompleted = (todo) => { 
    //     this.props.dispatch(todoActions.toggleTodo(todo));
    // }
    render() {
        return (
            <div className="todo__item">
                <div className="todo__toggle-container" onClick={toggleIsCompleted(props.todo)}>
                    <div className={props.todo.isCompleted ? 'todo__toggle-circle-complete': 'todo__toggle-circle'}>
                        <div className={props.todo.isCompleted ? 'todo__check': null}></div>
                    </div>
                </div>
                <div className={`todo__text ${props.todo.isCompleted ? 'todo__completed': null}`}>{props.todo.text}</div>
            </div> 
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItem);