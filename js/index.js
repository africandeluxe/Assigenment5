$(() => {
  //Hamburger menu 1st level/wokrks
  $("nav .hamburger-menu").on("click", (event) => $(event.target).next("ul").toggle());
  $("ul li").on({
    mouseenter: (event) => $(event.target).toggleClass("active"),
    mouseleave: (event) => $(event.target).toggleClass("active"),
    click: (event) => {
      $(event.target).find(".submenu").toggle("active");
      $(event.target).siblings().find(".submenu").hide("active");
    },
  });
  //hamburger 2nd level-works
  $(".submenu li").on("click", (event) => $(event.target).next("ul").toggle());
  $(".submenu li").on({
    click: (event) => {
      $(event.target).find(".submenu-2").toggle("active");
      $(event.target).siblings().find(".submenu-2").hide("active");
    },
  });
  //hamburger menu 3 level-works
  $(".submenu-2 li").on("click", (event) => $(event.target).next("ul").toggle());
  $(".submenu-2 li").on({
    click: (event) => {
      $(event.target).find(".submenu-3").toggle("active");
      $(event.target).siblings().find(".submenu-3").hide("active");
    },
  });

  // SLIDESHOW SETUP{
  $(document).ready(function () {
    // Initialize the Cycle2 plugin with an immediate start
    $("#demo").cycle({
      slides: "> div",
      timeout: 3000,
      fx: "fade",
      transition: "fade",
      random: true,
      startingSlide: 0, // Start from the first slide
      paused: true,
      speed: 2000,
    });
    $("#demo").cycle("resume");
  });
});
