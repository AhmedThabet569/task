$(document).ready(function () {
  "use strict";

  // fixed header
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll > 1) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });

    $(".card-item").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: { enabled: true },
    });
  //main slider owl
 

  //to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $("#toTop").fadeIn(100);
    } else {
      $("#toTop").fadeOut(100);
    }
  });

  $("#toTop").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 0);
  });

  //validate form
  
  //store theme colors in local storage 


  //lazyload images
  $("img").Lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: false,
  });
});
// make loading
$(window).on("load", function () {
  setTimeout(function () {
    // allowing 3 secs to fade out loader
    $(".page-loader").fadeOut("slow");
  }, 3500);
});

// get selector tab
	$("#tab_selector").on("change", function (e) {
    $("#v-pills-tab button").eq($(this).val()).tab("show");
  });
$(window).on("load", function () {
 

  //wow animate
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
  })
  wow.init();
});