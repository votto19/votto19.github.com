(function($) {
  // do something

  $('a[href="#"]').click(function(ignore) {
    ignore.preventDefault();
  });

  $('.js-smooth-scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('a.js-smooth-scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('body').scrollspy({
    target: '#id-navbar',
    offset: 75
  });

  var navbarCollapse = function() {
    if ($("#id-navbar").offset().top > 100) {
      $("#id-navbar").addClass("navbar-scrolled");
    } else {
      $("#id-navbar").removeClass("navbar-scrolled");
    }
  };

  navbarCollapse();

  var header = $('header');
  var range = 1000;
  $(window).scroll(function() {
    navbarCollapse();
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }

    var scrollTop = $(this).scrollTop();
    if (scrollTop <= range) {
      calc = 1 - scrollTop / range;
      header.css({
        'opacity': calc
      });
    }
  });

  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  if ($('.communication').length) {
    $('.communication').fadeIn('slow');
  }

  $('.communication').click(function() {
    //if ($(this).children('i').attr('class').indexOf('bx-plus') > -1) $('.communication-btns').fadeIn('slow');
    //else $('.communication-btns').fadeOut('slow');
    //$(this).children('i').toggleClass('bx-x bx-plus', 3000);
    if ($(this).children('i').attr('class').indexOf('rot45') > -1) $('.communication-btns').fadeOut('slow');
    else $('.communication-btns').fadeIn('slow');
    $(this).children('i').toggleClass('rot45', 1000, "easeOutSine");
  });

  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(500).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  $('a.disabled').click(function(e) {
    e.preventDefault();
  })

})(jQuery);
