const menu = document.querySelector('#mobile-nav');
const menuBtn = document.querySelector('#menu-btn');
const toggleBtn = document.querySelector('#toggle-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('scale-0');
  if(toggleBtn.getAttribute('src') === './img/hamburger.svg'){
    toggleBtn.setAttribute('src', './img/close.svg')
  } else {
    toggleBtn.setAttribute('src', './img/hamburger.svg')
  }
})

const swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    draggable: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    loopFillGroupBlank: false,
    slidesOffsetAfter:0, 
    freeMode: true
  });