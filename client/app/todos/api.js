export const getTodos = () => (
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/todos'
    })
)

export const addTodo = (todo) => (
    $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/todos',
            data: {
                todo: todo
            }
        })
)

export const updateTodo = (todo) => (
    $.ajax({
        method: 'PUT',
        url: `http://localhost:3000/todos/${todo.id}`,
        data: {
            todo: todo
        }
    })
)

export const removeTodo = (todo) => (
    $.ajax({
        method: 'DELETE',
        url: `http://localhost:3000/todos/${todo.id}`,
    })
)