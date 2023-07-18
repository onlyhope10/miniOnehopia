$(document).ready(function () {
  // let section = $("section");
  // let lists = $(".navbar-nav");
  // function activeLink(li) {
  //   lists.removeClass("active");
  //   li.addClass("active");
  // }
  // lists.each(function () {
  //   $(this).on("click", function () {
  //     activeLink($(this));
  //   });
  // });
  // $(window).on("scroll", function () {
  //   section.each(function () {
  //     let top = $(window).scrollTop();
  //     let offset = $(this).offset().top;
  //     let height = $(this).outerHeight();
  //     let id = $(this).attr("id");
  //     if (top >= offset && top < offset + height) {
  //       const target = $(`[href='#${id}']`).parent();
  //       activeLink(target);
  //     }
  //   });
  // });
  console.log("HAHA");
  const sections = $("section");
  const navLi = $("#mainMenu ul li");
  $(window).on("scroll", () => {
    let current = "";
    sections.each((i, section) => {
      const sectionTop = $(section).offset().top;
      if ($(window).scrollTop() >= sectionTop - 60) {
        current = $(section).attr("id");
        console.log(current);
      }
    });
    navLi.each((i, li) => {
      $(li).removeClass("active");
      if ($(li).hasClass(current)) {
        $(li).addClass("active");
      }
    });
  });
});
