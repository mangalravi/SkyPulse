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
 
  // Intersection Observer to add/remove active class on scroll
  const observerOptions = {
    threshold: 0.1, // 10% of section in view for testing
  };
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(
        `Section ${entry.target.id} is ${
          entry.isIntersecting ? "" : "not "
        }intersecting`
      ); // Debugging log
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (entry.isIntersecting) {
        setActiveNavItem(navLink.parentElement);
      }
    });
  }, observerOptions);
 
  sections.forEach((section) => {
    observer.observe(section);
  });
 
  // Set active class on the nav item
  function setActiveNavItem(activeItem) {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    activeItem.classList.add("active");
  }
 
  // Set the first nav item as active by default
  setActiveNavItem(navLinks[0].parentElement);
});