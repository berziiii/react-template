const loadTodos = (todos) => {
    return {
        type: 'LOAD_TODOS',
        todos: todos
    }
}

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text: text,
        isCompleted: false
    }
}

const toggleTodo = (todo) => {
    return {
        type: 'TOGGLE_TODO',
        id: todo.id,
    }
}

module.exports = {
    loadTodos,
    addTodo,
    toggleTodo
}