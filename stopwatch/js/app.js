//UI
const display = document.querySelector('.display');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const resetbtn = document.querySelector('.reset');

// let miliseconds = 0,
//     seconds = 0 ,
//     minutes = 0 ,
//     hours = 0;

//variable intialize using array
let [miliseconds,seconds,minutes,hours] = [0,0,0,0];

// console.log(minutes)

//Event Listener
startbtn.addEventListener('click',starttimer);
pausebtn.addEventListener('click',pausetimer);
resetbtn.addEventListener('click',resettimer);

let time ;
//Start Timer
function starttimer(){
    // console.log('start timer');
    // time = setInterval(displaytimer,10);

    if(time !== null){
        clearInterval(time);
    }
    time = setInterval(displaytimer,10);
    console.log(time);
}

//Pause Timer
function pausetimer(){
    // console.log('pause timer');
    clearInterval(time);
}

//Reset Timer
function resettimer(){
    // console.log('reset timer');
    clearInterval(time);
    [miliseconds,seconds,minutes,hours] = [0,0,0,0]
    display.textContent = '00 : 00 : 00 : 000';
}

//Display Timer
function displaytimer(){
    // console.log('i am working');

    miliseconds += 10;
    // console.log(miliseconds);

    if(miliseconds === 1000){
        miliseconds = 0;
        // console.log(miliseconds);

        // seconds += 1;
        seconds++;
        // console.log(seconds);
        if(seconds === 60){
            seconds = 0;
            console.log(seconds);

            minutes++;
            // console.log(minutes);

            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? '0'+hours: hours;
    let m = minutes < 10 ? '0'+minutes : minutes;
    let s = seconds < 10 ? '0'+seconds : seconds;
    let ms = miliseconds < 10 ? '00' + miliseconds : miliseconds < 100 ? '0' + miliseconds : miliseconds;

    display.innerText = `${h} : ${m} : ${s} : ${ms}`;
}