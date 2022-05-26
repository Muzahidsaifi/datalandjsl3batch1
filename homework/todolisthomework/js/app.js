//UI
const dayel = document.querySelector('.day'),
        dateel = document.querySelector('.date');
const form = document.getElementById('form'),
        task = document.getElementById('task'),
        ul = document.querySelector('.list-container');

const today = new Date;
const day = today.getDay();
const date = today.getDate();
const month = parseInt(today.getMonth());
const year = today.getFullYear();

// console.log(year);
// console.log(month);
// console.log(date);

let daystring;
switch(day){
    case 0: daystring = 'Sunday';break;
    case 1: daystring = 'Monday';break;
    case 2: daystring = 'Tuesday';break;
    case 3: daystring = 'Wednesday';break;
    case 4: daystring = 'Thurday';break;
    case 5: daystring = 'Friday';break;
    case 6: daystring = 'Saturday';break;
}
// console.log(daystring);

let monthstring;
switch(month){
    case 0 : monthstring = 'January';break;
    case 1 : monthstring = 'February';break;
    case 2 : monthstring = 'March';break;
    case 3 : monthstring = 'April';break;
    case 4 : monthstring = 'May';break;
    case 5 : monthstring = 'June';break;
    case 6 : monthstring = 'July';break;
    case 7 : monthstring = 'August';break;
    case 8 : monthstring = 'September';break;
    case 9 : monthstring = 'October';break;
    case 10 : monthstring = 'November';break;
    case 11 : monthstring = 'December';break;
}
// console.log(monthstring);

dayel.textContent = daystring;
dateel.textContent = `${monthstring} ${date} , ${year}`;

const todolists = JSON.parse(localStorage.getItem('todolists'));
if(todolists){
    todolists.forEach((todolist)=>{
        addtask(todolist);
    });
}



//for checkbox
document.addEventListener('click',(e)=>{
    if(e.target.parentElement.classList.contains('checkbox')){
        if(e.target.classList.contains('fa-check')){
            e.target.classList.replace('fa-check','fa-stop');
            e.target.parentElement.parentElement.classList.remove('complete');
        }else{
            e.target.classList.replace('fa-stop','fa-check');
            e.target.parentElement.parentElement.classList.add('complete');
        }
        updatestorage();
    }
});

//for delete btn
document.addEventListener('click',(e)=>{
    if(e.target.className === 'far fa-trash'){
        // i     li            ul                     
        // e.target.parentElement.parentElement.removeChild(e.target.parentElement);
        ul.removeChild(e.target.parentElement);
    }
    updatestorage();
})

//Event Listener
form.addEventListener('submit',(e)=>{
    addtask();
    e.preventDefault();
});


function addtask(todolist){
    // console.log('hay');

    let todo = task.value;

    if(todolist){
        todo = todolist.text;
    }

    if(todo){
        
    //create li
    const li = document.createElement('li');
    //add class
    li.classList.add('list-item');


    //create checkbox
    const checkbox = document.createElement('span');
    //add class
    checkbox.classList.add('checkbox');
    checkbox.innerHTML = `<i class="far fa-stop">`;

    if(todolist && todolist.complete){
        li.classList.add('complete');
        checkbox.innerHTML = `<i class="far fa-check">`;
    }

    //create trash icon
    const trash = document.createElement('i');
    trash.className = 'far fa-trash';

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(todo));
    li.appendChild(trash);

    ul.appendChild(li);

    task.value = '';

    // console.log(li);

    updatestorage();

    }else{
        alert('Enter your task');
    }

}

function updatestorage(){
    let lis = document.querySelectorAll('.list-item');
    let todos = [];
    lis.forEach((li)=>{
        todos.push({
            text : li.innerText,
            complete : li.classList.contains('complete')
        });
        // console.log(li.innerText);
    });
    localStorage.setItem('todolists',JSON.stringify(todos));
}