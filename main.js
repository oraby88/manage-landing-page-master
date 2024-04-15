const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-viible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  slidesToShow: 1,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    768: {
      slidesToShow: 2,
    },
    1280: {
      dots: false,
      slidesToShow: 3,
    },
  },
});
