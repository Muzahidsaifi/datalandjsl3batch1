const imgboxes = document.querySelectorAll('.imagebox');
const pizzleboxes = document.querySelectorAll('.pizzlebox');
const imagecontainer = document.querySelector('.imgs-container');
const windiv = document.querySelector('.win');
let dragimage;

imgboxes.forEach((imgbox)=>{
    // console.log(imgbox);
    imgbox.addEventListener('dragstart',dragstart);
    imgbox.addEventListener('dragend', dragend);
});

pizzleboxes.forEach((pizzlebox)=>{
    // console.log(pizzlebox);

    pizzlebox.addEventListener('dragover',dragover);
    pizzlebox.addEventListener('dragenter',dragenter);
    pizzlebox.addEventListener('dragleave',dragleave);
    pizzlebox.addEventListener('drop',dragdrop);
});

function dragstart(){
    
    this.classList.add('hold');
    dragimage = this;
    // console.log(dragimage);
    setTimeout(()=>this.className = 'invisible',0);
}

function dragend(){
    this.className = 'imagebox';
}

function dragover(e){
    // console.log('drag over');
    e.preventDefault();
}
function dragenter(e){
    // console.log('drag enter');
    e.preventDefault();
    this.classList.add('hovered');
}
function dragleave(e){
    // console.log('drag leave');
    e.preventDefault();
    this.classList.remove('hovered');
}
function dragdrop(){
    // console.log('drag drop');

    // for no two imagebox child in pizzlebox
    if(this.childElementCount == 0){
        
        this.appendChild(dragimage);
        gamewin();
    }
    this.classList.remove('hovered');
}

function gamewin(){
    // console.log(pizzleboxes[0].firstChild.id);
    // console.log(typeof pizzleboxes[0].childElementCount);
    
    
    if(pizzleboxes[0].childElementCount === 1 &&
        pizzleboxes[1].childElementCount === 1 &&
        pizzleboxes[2].childElementCount === 1 &&
        pizzleboxes[3].childElementCount === 1 &&
        pizzleboxes[4].childElementCount === 1 &&
        pizzleboxes[5].childElementCount === 1 &&
        pizzleboxes[6].childElementCount === 1 &&
        pizzleboxes[7].childElementCount === 1 &&
        pizzleboxes[8].childElementCount === 1 
        ){
        
        if(pizzleboxes[0].firstChild.id === '9' &&
            pizzleboxes[1].firstChild.id === '8' &&
            pizzleboxes[2].firstChild.id === '7' &&
            pizzleboxes[3].firstChild.id === '6' &&
            pizzleboxes[4].firstChild.id === '5' &&
            pizzleboxes[5].firstChild.id === '4' &&
            pizzleboxes[6].firstChild.id === '3' &&
            pizzleboxes[7].firstChild.id === '2' &&
            pizzleboxes[8].firstChild.id === '1' ){
    
                windiv.style.display = 'block';
                imagecontainer.style.display = 'none';
    
        }
        
    //  console.log(typeof pizzleboxes[0].firstChild.id);
    }
}
