

// import {
//     addTodo,
//     toggleTodo,
//     loadTodos
// } from '../actions/index';
// import { combineReducers } from 'redux';

const initialState = {
    todos: [],
    isFetching: false,
    hasError: false
}
const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TODOS':
            return Object.assign({}, state, {
                todos: action.todos
            });
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        isCompleted: action.isCompleted,
                    }
                ]
            });
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.id) {
                        return Object.assign({}, todo, {
                            isCompleted: !todo.isCompleted
                        }); 
                    }
                    return todo;
                })
            });
        case 'RETRIEVE_TODOS':
            return Object.assign({}, state, {
                isFetching: true,
                hasError: false,
            });
        case 'RECEIVED_TODOS':
            return Object.assign({}, state, {
                todos: action.todos,
                isFetching: false,
                hasError: false,
            });
        case 'REMOVE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => {
                    if (todo.id != action.id) {
                        return todo;
                    }
                })
            });
        case 'HAS_ERROR':
            return Object.assign({}, state, action.state);
        default:
            return state;      
    }
}

// const todoApp = combineReducers({
//     todos
// })

export default todos