$(function(){
    
// Loading State
setTimeout(function(){$("body").addClass("loading")},200);
setTimeout(function(){$("body").addClass("loaded")},3000);
transformicons.add('.tcon');


  // Smooth Scroll to top
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//Fade on scroll
$(window).on('scroll',function(){
  $("").css("opacity", 1 - $(window).scrollTop() / 880);
});
$('.menu .tcon').on('click',function(){
  if($(this).hasClass('tcon-transform')){
    // Closing - Do whatever here to hide the menu
    $('.menu ul').slideUp();
  } else {
    // Opening - Do whatever here to show the menu
    $('.menu ul').slideDown();
  }
});


//Check for responsive
mediaCheck({
  media: '(max-width: 768px)',
  exit: function(){
    $('.menu .tcon').removeClass('tcon-transform');
    $('.menu ul').removeAttr('style');
  }
});