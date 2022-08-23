
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
const addbtn = document.querySelector('.add')



addbtn.addEventListener('click', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    console.log(todoText);

    if(todo) {
        todoText = todo.text
       
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        const removebtns = document.createElement('button')
        const clearbtns = document.createElement('button')

      
  
        if(todo && todo.completed) {
            removebtns.classList.add('remove')
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

          clearbtns.addEventListener('click', (e) => {
            e.preventDefault()
            todoEl.classList.toggle('completed')


        }) 

        removebtns.addEventListener('click', (e) => {
            e.preventDefault()

            todoEl.remove()
            removebtns.remove()
            clearbtns.remove()
        }) 

        todosUL.appendChild(todoEl)
        todosUL.appendChild(removebtns)
        todosUL.appendChild(clearbtns)

        input.value = ''

       
    }
}

