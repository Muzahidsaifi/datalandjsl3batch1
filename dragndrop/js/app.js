// UI
const picdiv = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// console.log(empties);

picdiv.addEventListener('dragstart',dragstart);
picdiv.addEventListener('dragend',dragend);


// DRAG START
function dragstart(){
    // console.log('Drag start is working');

    // this.classList.add('hold');
    // this.className = 'fill hold'

    // if append method is use we need to care for space infront of class name
    this.className += ' hold';

    // this.className = 'invisible';
    setTimeout(()=>{
        this.className = 'invisible';
    },0);
    
}

// console.log(empties);

//FOR EACH
// empties.forEach(empty=>{
//     // console.log(empty);

//     empty.addEventListener('dragover',dragover);
//     empty.addEventListener('dragenter',dragenter);
//     empty.addEventListener('dragleave',dragleave);
//     empty.addEventListener('drop',dragdrop);
// });


//FOR OF(can return element)
//=> ES6 . can looping object5-specific iterator value 

for(const empty of empties){
    // console.log(empty);s
    empty.addEventListener('dragover',dragover);
    empty.addEventListener('dragenter',dragenter);
    empty.addEventListener('dragleave',dragleave);
    empty.addEventListener('drop',dragdrop);
}



// FOR IN(can't return element ,return key ,value)
// => numerable property name of an object

// for(const empty in empties){
//     console.log(empty);
// }


// DRAG END
function dragend(){
    // console.log('Drag end is working');

    this.className = 'fill';
}

function dragover(e){
    // console.log('drag over');
    e.preventDefault();
}

function dragenter(e){
    // console.log('drag enter');
    e.preventDefault();

    this.className += ' hovered';
}

function dragleave(e){
    // console.log('drag leave');
    e.preventDefault();

    this.className = 'empty';
}

function dragdrop(){
    console.log('drag drop');

    this.className = 'empty';
    this.appendChild(picdiv);
}