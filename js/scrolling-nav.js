(function ($) {
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing
  $("#loading-home").fadeOut(3000, function () {
    $("header").show(function () {
      $(this).css('background-image', 'url(' + 'http://static.asiawebdirect.com/m/.imaging/1140x760/website/bangkok/portals/vietnam/homepage/hanoi/top10/top10-hanoi-attractions/pagePropertiesImage.jpg' + ')')
      $(this).css('background-size', 'cover');
      $(this).css('opacity', 0.8);
      fadeContent();
    });
    $("#exp").show();
    $("#contact").show();
    $("footer").show();
  });

  $("#footer").hide(function() {
    $("#about").hide(1000, function () {
      $("#loading").hide(1000, function () {
        $("#about").fadeIn(1000);
        $("#footer").show();
      })
    });
  });
  $("#about").show();
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  var wordIdx = 0;
  var isDeleting = false;
  var description = ["A senior student at Gustavus Adolphus College", "A passionate developer", "An avid learner", "A hard-worker", "A responsible team member"];
  var wait = parseInt(1000, 10);
  var text = "";


  function fadeContent() {
    var fullText = description[wordIdx];
    if(isDeleting){
      text = fullText.substring(0, text.length - 1);
    }else{
      text = fullText.substring(0, text.length + 1);
    }

    $("#aboutMe").html(`<span class='txt-me'><span class='blinking-cursor'>${text}</span></span>`);
    
    
    var typeSpeed = 60;
    if(isDeleting){
      typeSpeed /= 2;
    }
    // If word is complete
    if (!isDeleting && text === fullText) {
      // Make pause at end
      typeSpeed = wait;
      // Set delete to true
      isDeleting = true;
    } else if (isDeleting && text === '') {
      isDeleting = false;
      // Move to next word
      wordIdx++;
      if (wordIdx == description.length) {
        wordIdx = 0;
      }
      // Pause before start typing
      typeSpeed = 500;
    }
    //Call function again
    setTimeout(() => fadeContent(), typeSpeed);
  }

})(jQuery); // End of use strict

