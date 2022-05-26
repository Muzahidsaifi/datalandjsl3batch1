// UI
// userinfo
const imagecontainerel = document.querySelector('.img-container'),
        usernameel = document.querySelector('.username'),
        positionel = document.querySelector('.position'),
        letterel = document.querySelector('.letter');

const circles = document.querySelectorAll('.circle');

const testimonies = [
    {
        userimage: 'https://randomuser.me/api/portraits/men/11.jpg',
        username : 'David Smith',
        userposition : 'Ceo',
        userletter : 'David Smith Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis molestias adipisci, iste dignissimos sunt maxime voluptatum provident repellat nesciunt vel doloribus aliquam quisquam culpa cumque amet fuga, itaque sint?'
    },
    {
        userimage: 'https://randomuser.me/api/portraits/women/75.jpg',
        username : 'Rikin Desia',
        userposition : 'Sales',
        userletter : 'Rikin desia Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis molestias adipisci, iste dignissimos sunt maxime voluptatum provident repellat nesciunt vel doloribus aliquam quisquam culpa cumque amet fuga, itaque sint?'
    },
    {
        userimage: 'https://randomuser.me/api/portraits/women/3.jpg',
        username : 'Ellen Diaz',
        userposition : 'Customer Service',
        userletter : 'Ellen Diaz Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis molestias adipisci, iste dignissimos sunt maxime voluptatum provident repellat nesciunt vel doloribus aliquam quisquam culpa cumque amet fuga, itaque sint?'
    },
    {
        userimage: 'https://randomuser.me/api/portraits/men/15.jpg',
        username : 'Max Martin',
        userposition : 'Sales',
        userletter : 'Max Martin Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis molestias adipisci, iste dignissimos sunt maxime voluptatum provident repellat nesciunt vel doloribus aliquam quisquam culpa cumque amet fuga, itaque sint?'
    },
    {
        userimage: 'https://randomuser.me/api/portraits/women/90.jpg',
        username : 'Lily Jenkins',
        userposition : 'Sales',
        userletter : 'Lily Jenkins Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis molestias adipisci, iste dignissimos sunt maxime voluptatum provident repellat nesciunt vel doloribus aliquam quisquam culpa cumque amet fuga, itaque sint?'
    },
];

let current = 0;

function loadtestimony(){
    imagecontainerel.style.backgroundImage =  `url('${testimonies[current].userimage}')`;
    usernameel.textContent = `${testimonies[current].username}`;
    positionel.textContent = `(${testimonies[current].userposition})`;
    letterel.textContent = `${testimonies[current].userletter}`;
    updatecircle();


    current++;

    if(current > testimonies.length-1){
        current = 0;
    }
}
loadtestimony();
let testimonyinterval = setInterval(loadtestimony,5000);

circles.forEach((circle,index)=>{
    circle.addEventListener('click',()=>{

        current = index;
        loadtestimony();
        resetinterval();
    })
})

function resetinterval(){
    clearInterval(testimonyinterval);
    testimonyinterval = setInterval(loadtestimony,5000);
}

function updatecircle(){
    circles.forEach(circle=>circle.classList.remove('active'));
    circles[current].classList.add('active');
}

// Need animation to start count from 0s when circle is clicked.