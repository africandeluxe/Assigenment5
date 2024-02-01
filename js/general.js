$(() => {
  // Hamburger menu 1st level

  const navMenu = () => {
    $("nav .hamburger-menu").on("click", (event) => $(event.target).next("ul").toggle());
    $("ul li").on({
      mouseenter: (event) => $(event.target).toggleClass("active"),
      mouseleave: (event) => $(event.target).toggleClass("active"),
      click: (event) => {
        $(event.target).find(".submenu").toggle("active");
        $(event.target).siblings().find(".submenu").hide("active");
      },
    });

    // Hamburger 2nd level
    $(".submenu li").on("click", (event) => $(event.target).next("ul").toggle());
    $(".submenu li").on({
      click: (event) => {
        $(event.target).find(".submenu-2").toggle("active");
        $(event.target).siblings().find(".submenu-2").hide("active");
      },
    });

    // Hamburger menu 3 level
    $(".submenu-2 li").on("click", (event) => $(event.target).next("ul").toggle());
    $(".submenu-2 li").on({
      click: (event) => {
        $(event.target).find(".submenu-3").toggle("active");
        $(event.target).siblings().find(".submenu-3").hide("active");
      },
    });

    $("nav .hamburger-menu").on("click", () => {
      $(".nav-container").toggleClass("added-padding");
    });
  };

  const closeNavMenu = () => {
    $(document).on("click keydown", (event) => {
      if (event.type === "click" || (event.type === "keydown" && event.key === "Escape")) {
        const isNavClick = $(event.target).closest("nav, .main-nav").length > 0;

        if (!isNavClick || (event.type === "keydown" && event.key === "Escape")) {
          $("nav .main-nav ul").hide("active");
          $("ul li, .submenu li, .submenu-2 li, .submenu-3 li").removeClass("active");
          $(".nav-container").removeClass("added-padding");
        }
      }
    });
  };

  closeNavMenu();
  navMenu();
});
