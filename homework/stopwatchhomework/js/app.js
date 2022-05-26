//UI
const containerel = document.querySelector('.container');
const displayel = document.querySelector('.display');
const lapul = document.querySelector('.lapul');
const startel = document.getElementById('start'),
        stopel = document.getElementById('stop'),
        lapel = document.getElementById('lapbtn'),
        resumeel = document.getElementById('resume'),
        resetel = document.getElementById('reset');

let [miliseconds,seconds,minutes,hours] = [0,0,0,0];
let time;
//Event Listener
startel.addEventListener('click',starttimer);
stopel.addEventListener('click',stoptimer);
resumeel.addEventListener('click',starttimer);
resetel.addEventListener('click',resettimer);
lapel.addEventListener('click',laptimer);

//for start btn and resume btn
function starttimer(){
    // console.log('i am start timer');
    if(time != null){
        clearInterval(time);
    }
    time = setInterval(displaytimer,10)
    containerel.classList.add('active');
    containerel.classList.remove('inactive');
}

//for clock display
function displaytimer(){
    // console.log('hay');
    
    miliseconds += 10;

    //for seconds count up
    if(miliseconds === 1000){
        miliseconds = 0 ;
        seconds +=1;

        //for minute count up
        if(seconds === 60){
            seconds = 0;
            minutes += 1;

            //for hour count
            // if(minutes === 60){
            //     minutes = 0;
            //     hours += 1;
            // }

        }
    }

    // add leading 0
    let h = hours < 10 ? '0'+hours : hours;
    let m = minutes < 10 ? '0'+minutes : minutes;
    let s = seconds < 10 ? '0'+seconds : seconds;
    let ms = miliseconds < 10 ? '00'+miliseconds : miliseconds < 100 ? '0'+miliseconds : miliseconds;
    displayel.textContent = `${m} : ${s} : ${ms}`;
}

//for stop btn
function stoptimer(){
    clearInterval(time);
    containerel.classList.add('inactive');
    containerel.classList.remove('active');
}

// for reset btn
function resettimer(){
    clearInterval(time);
    [miliseconds,seconds,minutes,hours] = [0,0,0,0];
    lap = 1;
    displayel.textContent = '00 : 00 : 000';
    
    
    // lapul.innerText = '';

    while(lapul.firstChild){
        lapul.removeChild(lapul.firstChild);
    }

    containerel.className = 'container';
}

// for lap btn
let lap=1;
function laptimer(){
  if(lap <= 8){
         //create li
    const li = document.createElement('li');
    //add class
    li.classList.add('lap');

    //create span
    const laptitle = document.createElement('span');
    //add class
    laptitle.classList.add('laptitle');
    //add text
    laptitle.innerText = `Lap ${lap}`;
    lap++;

    //create span
    const lapvalue = document.createElement('span');
    // add text
    lapvalue.innerText = displayel.innerText;

    //append laptitle and lapvlue to li
    li.appendChild(laptitle);
    li.appendChild(lapvalue);

    //append li to lapul
    lapul.appendChild(li);
  }
}