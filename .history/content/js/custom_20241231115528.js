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
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
AOS.init();


const navbarmaindiv = document.getElementById("navbarSupportedContent");
const navitems = document.querySelectorAll(".nav-link");

navitems.forEach((navitem) => {
  navitem.addEventListener("click", function() {
    // Programmatically collapse the navbar using Bootstrap Collapse API
    const collapse = new bootstrap.Collapse(navbarmaindiv, {
      toggle: false // Don't toggle, just hide it
    });
    collapse.hide();
  });
});


var content = 'Advanced AI-enabled technology platform delivering SaaS-based products for Distribution Utilities';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('.topcntnt h1').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
