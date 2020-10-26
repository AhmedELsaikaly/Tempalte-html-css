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
  // prettier-ignore

  // our auto slider function
  (function autoSlider() {
    $(".slider .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            autoSlider();
          });
      }else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");
            $(".slider div").eq(0).addClass("active").fadeIn();
            autoSlider();
          });

      } 
    });
  }());
  // Adjust shuffle link
  $(".shuffle li").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  // nice scroll
  $("html").niceScroll({
    cursorcolor: "rgb(73, 201, 176)",
    cursorwidth: "8px",
    cursorborder: "1px solid rgb(73, 201, 176)",
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
