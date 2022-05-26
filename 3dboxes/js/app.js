console.log('hay');

const btn = document.getElementById('btn');
const boxescontainer = document.getElementById('boxes');

btn.addEventListener('click',()=>boxescontainer.classList.toggle('big'));

function createbox(){
    for(let i=0 ; i < 4 ; i++){
        console.log('this is i value' + i);
        // console.log(`${-i*125}px`);

        for(let j=0 ; j < 4 ; j++){
           console.log(j);
            // console.log(`${-j*125}px`);

            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxescontainer.appendChild(box);
            // console.log(box);
        }
    }
}

createbox();
