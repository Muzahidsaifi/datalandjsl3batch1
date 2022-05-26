// UI
const loginsectioin = document.querySelector('.login'),
        registersection = document.querySelector('.register'),
        forgotsection = document.querySelector('.forgot');

const loginlink = document.querySelector('.login-link'),
        registerlink = document.querySelector('.register-link'),
        forgotlink = document.querySelector('.forgot-link');

const closebtn = document.querySelector('.close');

registerlink.addEventListener('click',()=>{
    loginsectioin.style.display = 'none';
    registersection.style.display   = 'flex';
});

loginlink.addEventListener('click',()=>{
    registersection.style.display   = 'none';
    loginsectioin.style.display = 'flex';
});

forgotlink.addEventListener('click',()=>{
    loginsectioin.style.display = 'none';
    forgotsection.style.display = 'flex';
});

closebtn.addEventListener('click',()=>{
    forgotsection.style.display = 'none';
    loginsectioin.style.display = 'flex';
});