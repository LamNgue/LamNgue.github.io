(function ($) {
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing
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
  var images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=1000&h=600&s=1",
    "https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/34/1472241162-hbz-hanoi-index.jpg",
    "https://mlraan0pnurx.i.optimole.com/c32lz_w-2PYW1gtb/w:1040/h:603/q:auto/https://opengovasia.com/wp-content/uploads/2019/02/08.02.2018-hanoi-smart-city-1.jpg",
    "http://static.asiawebdirect.com/m/.imaging/1140x760/website/bangkok/portals/vietnam/homepage/hanoi/top10/top10-hanoi-attractions/pagePropertiesImage.jpg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/11/10/hanoi-main.jpg?width=982&height=726"
  ];
  var index = 0;

  setInterval(change_up, 3000);
  function change_up() {
    index = (index + 1 < images.length) ? index + 1 : 0;
    $("header").fadeOut(300, function () {
      $(this).css('background-image', 'url(' + images[index] + ')')
      $(this).fadeIn(300);
    });
  }

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
  fadeContent();

})(jQuery); // End of use strict

