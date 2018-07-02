import { combineReducers } from 'redux';

const initialState = {
    items: [],
    isFetching: false,
    hasError: false
}
const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TODOS':
            return Object.assign({}, state.items, {
                items: action.items
            });
        case 'ADD_TODO':
            return Object.assign({}, state.items, {
                items: [
                    ...state.items,
                    {
                        id: action.id,
                        text: action.text,
                        isCompleted: action.isCompleted,
                    }
                ]
            });
        case 'TOGGLE_TODO':
            return Object.assign({}, state.items, {
                items: state.items.map((todo) => {
                    if (todo.id === action.id) {
                        return Object.assign({}, todo, {
                            isCompleted: !todo.isCompleted
                        }); 
                    }
                    return todo;
                })
            });
        case 'RETRIEVE_TODOS':
            return Object.assign({}, state.items , {
                isFetching: true,
                hasError: false,
            });
        case 'RECEIVED_TODOS':
            return Object.assign({}, state.items, {
                items: action.items,
                isFetching: false,
                hasError: false,
            });
        case 'REMOVE_TODO':
            return Object.assign({}, state.items, {
                items: state.items.filter((todo) => {
                    if (todo.id != action.id) {
                        return todo;
                    }
                })
            });
        default:
            return state;      
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp;