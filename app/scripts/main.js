// Slick slider
$(document).ready(function () {
  $(".quote-wrap").slick({
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});


const menuToggle = document.querySelector(".header-toggle")
const menuHeader = document.querySelector(".header-menu")
const header = document.querySelector(".header")
const expandClass = "is-expand"
menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass)
})

window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(expandClass)
  }
})