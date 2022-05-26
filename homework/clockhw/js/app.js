const hourehandel = document.querySelector('.hourhand'),
        minutehandel = document.querySelector('.minutehand'),
        secondhandel = document.querySelector('.secondhand');

const digitalel = document.querySelector('.digital');

const datecontainerel = document.querySelector('.date-container');


const days =['Sunday','Monday','Tuesday','Wednesday','Tursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function loadhour(){
    const date=new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const twelvehourformat = hours%12;
    const getampm = hours>=12 ? 'PM' : 'AM';

    const today = date.getDate();
    const month = date.getMonth();
    const day = date.getDay();

    hourehandel.style.transform = `translate(-50%,-100%) rotate(${scale(twelvehourformat+(minutes/60),0,12,0,360)}deg)`;
    minutehandel.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,60,0,360)}deg)`;
    secondhandel.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,60,0,360)}deg)`;

    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;

    digitalel.innerHTML = `${twelvehourformat}:${minutes}:${seconds} ${getampm}`;

    datecontainerel.innerHTML = `
        <span class="day">${days[day]},</span><span class="date">${months[month]} ${today}</span>
    `;
}
loadhour();
setInterval(loadhour,1000);

function scale(num,inmin,inmax,outmin,outmax){
    return (num - inmin) * (outmin - outmax) / ( inmin - inmax) + outmin;
}


