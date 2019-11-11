(function($) {
  "use strict"; // Start of use strict
  var description = ["A junior student at Gustavus Adolphus College", "A passionate developer", "An avid learner", "A hard-worker", "A responsible team member"];
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
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
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

    function fadeContent(){
      var text = description[Math.floor(Math.random() * description.length)];
      $("#aboutMe").fadeIn(500).delay(2000).fadeOut(500, function(){
        $("#aboutMe").html(text);
        fadeContent();
      });
    }   
  fadeContent(); 
})(jQuery); // End of use strict

