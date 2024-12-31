$(window).scroll(function () {
  $(this).scrollTop() >= 250
    ? $(".nvbrhdr").addClass("bg-white")
    : $(".nvbrhdr").removeClass("bg-white");
})
$(".slick-slider").slick({
  slidesToShow:1,
  infinite:false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    dots: true, 
    arrow:false
 });
