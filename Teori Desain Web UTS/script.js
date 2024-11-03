const navLinks = document.querySelectorAll(".nav-product .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//close menu ketika close button di klik
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//close menu ketika nav di klik
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
})

//inisialisasi Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween : 25, 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsif Breakpoint
    breakpoints: {
        0: {
            slidePerView: 1
        },
        768: {
            slidePerView: 2
        },
        1024: {
            slidePerView: 3
        }
    }
  });