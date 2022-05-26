//UI
const navs = document.querySelectorAll('.nav');
const openbtn = document.querySelector('.open-btn')
        closebtn = document.querySelector('.close-btn');

const checkbox =document.querySelector('.darkmode');
const dswitch = document.querySelector('.switch');

const title = document.querySelector('.title');

const noti = document.querySelector('.noti');
const heartbtns = document.querySelectorAll('.heartbtn');


// Event Listener
openbtn.addEventListener('click',function(){
    // console.log('hay');
    navs.forEach((nav)=>nav.classList.add('show'));
});

closebtn.addEventListener('click',function(){
    // console.log('hay');
    navs.forEach((nav)=>nav.classList.remove('show'));
});

dswitch.addEventListener('click',function(){
    // console.log('hay');
    if(!checkbox.checked){
        document.body.style.backgroundColor = '#000';
        openbtn.style.color = "#fff";
        title.style.color = "#fff";
    }else{
        document.body.style.backgroundColor = '#fff';
        openbtn.style.color = "rgba(0, 0, 0, 0.5)";
        title.style.color = "#000";
    }
});

let message;
heartbtns.forEach((heartbtn)=>{
    heartbtn.addEventListener('click',(e)=>{
        if(heartbtn.classList.contains('far')){
            heartbtn.classList.remove('far');
            heartbtn.classList.add('fas');
            
            message = `Add ' ${e.target.parentElement.children[0].textContent} ' to your favourite .`;
            // console.log(message);
            showNotification(message,'like');
        }else{
            heartbtn.classList.remove('fas');
            heartbtn.classList.add('far');

            message = `Remove ' ${e.target.parentElement.children[0].textContent} ' from your favourite .`;
            // console.log(message);
            showNotification(message);
        }
        
    });
    
});
function showNotification(msg,type){
        const notibox = document.createElement('div');
        notibox.classList.add('notibox');

        if(type){
            notibox.classList.add(type);
        }
        notibox.textContent = msg;
        noti.appendChild(notibox);
        // console.log(notibox);

        setTimeout(()=>notibox.remove(),1500);
}
