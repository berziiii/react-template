import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions/';


const connectToState = (state) => ({
    todos: state.todos,
    inputValue: state.inputValue
})

const registerActions = (dispatch) => ({
    addTodo: (e) => {
        e.preventDefault();
        const text = e.target.children.todoText.value;
        e.target.children.todoText.value = '';
        if (text != '') {
            dispatch(addTodo(text)); 
        }
    }
})
const AddTodo = (props) => (
    <div className="todo__add-container">
        <form className="todo__add-form" onSubmit={(e) => { props.addTodo(e) }}>
            <input className="todo__add-input" name="todoText" type="text" placeholder="Add Task..."/>
        </form>
    </div>
)


export default connect(
    connectToState,
    registerActions
)(AddTodo)