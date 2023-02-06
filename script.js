let searchform = document.querySelector('.search-form');
document.querySelector('#searchbutton').onclick = () =>{
    searchform.classList.toggle('active');
    shoppingBag.classList.remove('active');
    userlogin.classList.remove('active');
    navbar.classList.remove('active');
}
let shoppingBag = document.querySelector('.shopping-bag');
document.querySelector('#bagbutton').onclick = () =>{
    shoppingBag.classList.toggle('active');
    searchform.classList.remove('active');
    userlogin.classList.remove('active');
    navbar.classList.remove('active');
}
let userlogin = document.querySelector('.loginform');
document.querySelector('#usersbtn').onclick = () =>{
    userlogin.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingBag.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menubutton').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingBag.classList.remove('active');
    userlogin.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    shoppingBag.classList.remove('active');
    userlogin.classList.remove('active');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableonInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });



