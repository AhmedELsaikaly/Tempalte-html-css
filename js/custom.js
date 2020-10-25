$(function () {
  "use strict";

  var myHeader = $(".header");
  var mySlider = $(".bxslider");
  // adjust header height
  myHeader.height($(window).height());

  $(window).resize(function () {
    myHeader.height($(window).height());
    mySlider.each(function () {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".bxslider li").height()) / 2
      );
    });
  });

  // links add active class
  $(".links li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  // adjust bxslider item center

  mySlider.each(function () {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".bxslider li").height()) / 2
    );
  });

  // trigger bx slider
  $(document).ready(function () {
    mySlider.bxSlider({
      pager: false,
    });
  });
});

// smooth scroll
$(".links li a").click(function () {
  console.log($(this).data("value"));
  $("html,body").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top,
    },
    1000
  );
});
