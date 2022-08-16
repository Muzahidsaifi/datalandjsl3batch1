
var container = document.querySelector('.container');
var signupbtn = document.querySelector('.signup-btn');

var insteadbtn = document.querySelector('.insteadbtn');
var showpassbtns = document.querySelectorAll('.showpassbtn');

signupbtn.addEventListener('click',function(){
    container.classList.add('register');
});

insteadbtn.addEventListener('click',function(){
    container.classList.remove('register');
});

showpassbtns.forEach(function(showpassbtn){
    // console.log(showpassbtn);
    showpassbtn.addEventListener('click',function(){

        // console.log(this.firstChild);
    
        //check fontawesome icon
        if(this.firstChild.classList.contains('fa-lock')){
            this.firstChild.classList.remove('fa-lock');
            this.firstChild.classList.add('fa-lock-open');
            this.nextElementSibling.setAttribute('type','text');
        }else{
            this.firstChild.classList.remove('fa-lock-open');
            this.firstChild.classList.add('fa-lock');
            this.nextElementSibling.setAttribute('type','password');
        }
    
    });
});

