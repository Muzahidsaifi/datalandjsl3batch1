//UI

const testimonialel = document.querySelector('.testimonial');
const userimageel = document.querySelector('.user-image');
const usernameel = document.querySelector('.username');
const roleel = document.querySelector('.role');

const testimonials = [
    {
        name : "Mya Mya",
        role : "Marketing",
        photo : 'https://randomuser.me/api/portraits/women/50.jpg',
        text : "Mya Mya Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name : "Aung Aung",
        role : "Marketing",
        photo : 'https://randomuser.me/api/portraits/men/50.jpg',
        text : "Aung Aung Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name : "Su Su",
        role : "Accountant",
        photo : 'https://randomuser.me/api/portraits/women/51.jpg',
        text : "Su Su Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name : "Kyaw Kyaw",
        role : "Sales",
        photo : 'https://randomuser.me/api/portraits/men/51.jpg',
        text : "Kyaw Kyaw Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name : "Zue Zue",
        role : "Warehouse Manager",
        photo : 'https://randomuser.me/api/portraits/women/52.jpg',
        text : "Zue Zue Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];

// console.log(testimonials);



let idx = 0;
function updatetestimonial(){

    const {name,role,photo,text} = testimonials[idx];

    testimonialel.textContent = text;
    userimageel.src = photo;
    usernameel.textContent = name;
    roleel.innerText = role;

    idx++;

    if(idx > testimonials.length - 1){
        idx = 0;
    }


}

updatetestimonial();
setInterval(updatetestimonial,10000);