
// search-bar js
let searchBtn=document.querySelector('#search-btn');
let searchBar =document.querySelector('.search-bar-container');

window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
     
}


searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// login form js
let formBtn=document.querySelector('#login-btn');
let  loginForm =document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');


formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});

// menu-bar js
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');


menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// video btn

let videoBtn=document.querySelectorAll('.vid-btn')

videoBtn.forEach(btn=>{
btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src=btn.getAttribute('data-src');
    document.querySelector('#video-slider').src=src;
});
});

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoint:{
        640:{
            slidesperview:1,
        },
        768:{
            slidesperview:2,
        },
        1024:{
            slidesperview:3,
        },
    }
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoint:{
        450:{
            slidesperview:2,
        },
        768:{
            slidesperview:3,
        },
        991:{
            slidesperview:4,
        },
        1200:{
            slidesperview:5,
        },
    }
});

