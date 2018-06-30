let currentTodoId = 0;

const todoId = () => {
    return currentTodoId+=1;
} 
const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo: todo
    }
}

const toggleTodo = (todo) => {
    return {
        type: 'TOGGLE_TODO',
        id: todo.id,
    }
}

module.exports = { addTodo, toggleTodo }