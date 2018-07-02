import {
    addTodo,
    toggleTodo,
    loadTodos
} from '../actions/index';
import { combineReducers } from 'redux';

const initialState = {
    todos: [],
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
                        text: action.todo.text,
                        id: action.todo.id,
                        isCompleted: action.todo.isCompleted,
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
        default:
            return state;      
    }
}

// const todoApp = combineReducers({
//     todos
// })

export default todos