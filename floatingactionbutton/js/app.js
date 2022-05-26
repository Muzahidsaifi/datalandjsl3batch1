// UI
const btns = document.querySelector('.btns');
const btnprimary = document.getElementById('btnprimary');

btnprimary.addEventListener('click',()=>{
    // console.log('hay');
    btns.classList.toggle('show');
});