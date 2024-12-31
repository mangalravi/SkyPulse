$(window).scroll(function () {
  $(this).scrollTop() >= 250
    ? $(".nvbrhdr").addClass("bg-white")
    : $(".nvbrhdr").removeClass("bg-white");
});
$(".slick-slider").slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrow: false,
  fade: true,
});
// Highlight active link on scroll
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// window.addEventListener("scroll", () => {
//   let currentSection = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;

//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       currentSection = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href") === `#${currentSection}`) {
//       link.classList.add("active");
//     }
//   });
// });
AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
 
  // Add smooth scrolling on click
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
          top:
            targetSection.offsetTop -
            document.querySelector("nav").offsetHeight,
          behavior: "smooth",
        });
        setActiveNavItem(this.parentElement);
      }
    });
  });