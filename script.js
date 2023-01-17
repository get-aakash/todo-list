const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')


todoBtn.addEventListener('click', function addTodo(e){
    e.preventDefault()
    if(!todoInput.value){
        return
    }
    //create the todo div

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    //create li

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo)

    saveLocalTodos(todoInput.value)

    //check button

    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = "<i class='fa-solid fa-check'>"
    completeBtn.classList.add('complete-btn')
    todoDiv.appendChild(completeBtn)


    //delete button

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = "<i class='fa-solid fa-trash'>"
    deleteBtn.classList.add("delete-btn")
    todoDiv.appendChild(deleteBtn)

    //append to ul
    todoList.appendChild(todoDiv)


    // clear to do input value
    todoInput.value = ""
})

todoList.addEventListener('click', function deleteCheck(e){
    console.log(e.target)
    const item = e.target

    //Delete Todo

    console.log(item.classList)
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement
        todo.remove()
    }

    //check todo

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}) 

function saveLocalTodos(todo){
    //check if there is already in the storage

    let todos
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}