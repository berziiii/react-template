import React from 'react';
import * as Actions from '../../redux/actions/';
import * as API from '../api';
import { connect } from 'react-redux';


const connectToState = (state) => ({
    state: state,
    prevState: state
})

const registerActions = (dispatch) => ({
    addTodo: (text) => {
        dispatch(Actions.addTodo(text)); 
    },
    hasError: (state) => {
        dispatch(Actions.hasError(state));
    }
})

const AddTodoToDatabase = (props, e) => {
    e.preventDefault();
    const text = e.target.children.todoText.value;
    e.target.children.todoText.value = '';
    if (text != '') {
        let todo = {
            text: text,
            isCompleted: false,
        }
        API.addTodo(todo)
        .then((res) => {
            props.addTodo(res);
        })
        .catch((err)=> {
            props.hasError(props.prevState);
        })
    }
}
const AddTodo = (props) => (
    <div className="todo__add-container">
        <form className="todo__add-form" onSubmit={(e) => { AddTodoToDatabase(props, e) }}>
            <input className="todo__add-input" name="todoText" type="text" placeholder="Add Task..."/>
        </form>
    </div>
)


export default connect(
    connectToState,
    registerActions
)(AddTodo)