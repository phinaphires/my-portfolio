let menu = document.querySelector('.menu-icons');

menu.onclick = () => {
    menu.classList.toggle("move")
};
//reviews swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    },
  });