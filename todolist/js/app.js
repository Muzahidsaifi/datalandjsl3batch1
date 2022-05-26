//UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));
// console.log(todos);
// console.log(typeof todos);

if(todos){
    todos.forEach(todo => addtodo(todo));
}

formel.addEventListener('submit',(e)=>{
    // console.log('hay');

    addtodo();

    e.preventDefault();
})

function addtodo(todo){
    // console.log('i am working');

    let todotext = inputel.value;

    if(todo){
        todotext = todo.text;
    }

    //if statement check todotext contain value
    if(todotext){
        // console.log(todotext);
        const  li = document.createElement('li');
        // console.log(li);

        if(todo && todo.complete){
            //add class
            li.classList.add('completed');
        }

        li.appendChild(document.createTextNode(todotext));
        todoul.appendChild(li);
        inputel.value = '';

        updatelocalstorege();

        //add line-through by left click
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');
            updatelocalstorege();
        });


        //remove by rightclick
        li.addEventListener('contextmenu',(e)=>{
            // console.log('i am working');
            li.remove();
            updatelocalstorege();

            e.preventDefault();
        });

    }else{
        window.alert('Enter your todo');
    }
}

function updatelocalstorege(){
    // console.log('storege is ready');

    let todolis = document.querySelectorAll('li');
    // console.log(todolis);

    let todos = [];

    todolis.forEach(todoli=>{
        // console.log(todoli);
        // console.log(todoli.textContent);

        todos.push({
            text : todoli.textContent,
            complete : todoli.classList.contains('completed')
        });
    });
    // console.log(todos);
    localStorage.setItem('todos',JSON.stringify(todos));
}