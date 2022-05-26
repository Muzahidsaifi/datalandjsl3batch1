const plusbtn = document.querySelector('.plus-btn');
const floatbtngroup = document.querySelector('.float-btn-group');
const overlay = document.querySelector('.overlay');

// plusbtn.addEventListener('click',()=>{
//     // console.log('hay');
//     floatbtngroup.classList.toggle('active');
//     if(floatbtngroup.classList.contains('active')){
//         plusbtn.classList.remove('fa-plus');
//         plusbtn.classList.add('fa-times');
//     }else{
//         plusbtn.classList.remove('fa-times');
//         plusbtn.classList.add('fa-plus');
//     }
// });

plusbtn.addEventListener('click',()=>{
    // console.log('hay');
    floatbtngroup.classList.toggle('active');
    if(floatbtngroup.classList.contains('active')){
        plusbtn.style.transform = 'rotate(45deg)';
        plusbtn.style.color = '#555';
        overlay.style.display = 'block';
    }else{
        plusbtn.style.transform = 'rotate(0deg)';
        plusbtn.style.color = '#fff';
        overlay.style.display = 'none';
    }
});