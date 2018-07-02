export const loadTodos = (todos) => {
    return {
        type: 'LOAD_TODOS',
        todos: todos
    }
}

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        id: todo.id,
        text: todo.text,
        isCompleted: todo.isCompleted
    }
}

export const toggleTodo = (todo) => {
    return {
        type: 'TOGGLE_TODO',
        id: todo.id,
    }
}

export const retrieveTodos = () => {
    return {
        type: 'RETRIEVE_TODOS',
        isFetching: true,
        hasError: false,
        todos: [],
    }
}

export const receivedTodos = (todos) => {
    return {
        type: 'RECEIVED_TODOS',
        isFetching: false,
        hasError: false,
        todos: todos,
    }
}

export const removeTodo = (todo) => {
    return {
        type: 'REMOVE_TODO',
        isFetching: false,
        hasError: false,
        id: todo.id
    }
}

export const hasError = (state) => {
    return {
        type: 'HAS_ERROR',
        isFetching: false,
        hasError: true,
        state
    }
}

