$(document).ready(function() {

  // remove bounce animation when hover
  $(".fa-arrow-down").mouseenter(
    function() {
      $("#arrow-down").removeClass("bounce");
    }).mouseleave(
    function() {
      $("#arrow-down").addClass("bounce");
    });

  // hide / show nav bar depending on window location
  var old_position;
  $(window).scroll(function() {

    // hide if position > 120
    var current_position = $(this).scrollTop();
    if (current_position < 100) {
      $('.navbar').show();
    } else {

      // show if scrolling up
      if (current_position < old_position) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    }

    // save old position
    old_position = current_position;
  });

  // add pulse animation when mouse on arrow
  $(".placeholder").mouseenter(
    function() {
      $(this).addClass("animated pulse");
    }).mouseleave(
    function() {
      $(this).removeClass("animated pulse");
    });
  
  function scroll_function(obj) {
    var href = $(obj).attr('href');
    console.log(href);
    $('html,body').animate({
        scrollTop: $(href).offset().top
      }, 'slow');
    return false;
  }
  
  // scrolling when clicking on navbar buttons and arrow
 $(".navbar-left > li, #arrow-down").children().click(function(){
    return scroll_function(this);
  }
    );

});






