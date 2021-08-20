$(document).ready(function () {
  $(".interior__slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    easing: "linear",
    infinite: false,
    autoplay: false,
    draggable: false,
    waitForAnimate: false,
  });
  $(".news__slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    easing: "linear",
    infinite: false,
    autoplay: false,
    draggable: false,
    waitForAnimate: false,
  });
});
