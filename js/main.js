$(window).on("load", function () {
  $("body").removeClass("overflow");
  setTimeout(function () {
    $(".main-section").addClass("loaded");
  }, 1000);
});
$(document).ready(function () {
  /************************************ Side Menu ************************************/
  if ($(window).width() <= 1229) {
    $(".has-children .nav-link.active").siblings().show();
    $(".menu-icon").click(function () {
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
      $(".overlay").fadeIn();
    });
    $(".close-menu,.overlay").click(function () {
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
      $(".overlay").fadeOut();
    });
    $(".has-children .nav-link").click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(".has-children .nav-link").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-children .nav-link").not(this).siblings().slideUp(500);
    });
  }
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    pagination: {
      el: ".main-slider-content .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".main-slider-content .swiper-btn-next",
      prevEl: ".main-slider-content .swiper-btn-prev",
    },
  });
  /************************************ Programs Slider ************************************/
  var programsSwiper = new Swiper(".programs-slider .swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    pagination: {
      el: ".programs-section .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".programs-section .swiper-btn-next",
      prevEl: ".programs-section .swiper-btn-prev",
    },
  });
  /************************************ Articles Slider ************************************/
  var articlesSwiper = new Swiper(".articles-slider .swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
  });
  /************************************ Priorities Slider ************************************/
  var prioritiesSwiper = new Swiper(".priorities-slider .swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    pagination: {
      el: ".priorities-section .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".priorities-section .swiper-btn-next",
      prevEl: ".priorities-section .swiper-btn-prev",
    },
  });
  $(".priorities-item").click(function () {
    $(this).toggleClass("active");
  });
  /************************************ Knowledge Center Slider ************************************/
  var knowledge_centerSwiper = new Swiper(".knowledge_center-slider .swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
  });

  /************************************ Timeline Slider ************************************/
  if ($(window).width() > 1229) {
    var timelineSwiper = new Swiper(".timeline-slider .swiper", {
      spaceBetween: 40,
      slidesPerView: "auto",
      pagination: {
        el: ".timeline-slider .timeline-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          var title = this.slides[index].getAttribute("data-title");
          return (
            '<div class="' + className + '"><span>' + title + "</span></div>"
          );
        },
      },
    });
  }
  /************************************ Statistics ************************************/
  if ($(".statistics-section").length) {
    var a = 0;
    $(window).scroll(function () {
      if (
        a == 0 &&
        $(this).scrollTop() + $(window).height() >
          $(".statistics-section").offset().top
      ) {
        $(".statistics-item .value span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).data("value"),
              },
              {
                duration: 500,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a++;
      }
    });
  }

  /************************************ Map ************************************/
  $(document).on("mouseenter", ".custom-loc", function (e) {
    $(".custom-loc").removeClass("active");
    $(".map-statistics").hide();
    $(".custom-tooltip").remove();

    let dataId = $(this).attr("id");
    let item = $('.map-statistics[data-id="' + dataId + '"]');
    let dataLocation = item.attr("data-location");
    $(this).addClass("active");
    const $tooltip = $(
      '<span class="custom-tooltip">' + dataLocation + "</span>"
    ).appendTo("body");

    const offset = $(this).offset();
    const tooltipHeight = $tooltip.outerHeight();
    const tooltipWidth = $tooltip.outerWidth();
    const elementWidth = $(this).outerWidth();

    $tooltip.css({
      top: offset.top - tooltipHeight + 25,
      left: offset.left + elementWidth / 2 - tooltipWidth / 2,
    });
    item.show();
  });

  /************************************ Filters ************************************/
  if ($(window).width() <= 991) {
    $(".filters-btn").click(function () {
      $(".reports-filters").fadeIn();
      $("body").addClass("overflow");
      $(".filters-overlay").fadeIn();
    });
    $(".filters-overlay").click(function () {
      $(".reports-filters").fadeOut();
      $("body").removeClass("overflow");
      $(".filters-overlay").fadeOut();
    });
  }
});
