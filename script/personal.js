$(function(){

 /* Tooltip Enable Start */
 $('[data-toggle="tooltip"]').tooltip();
 /* Tooltip Enable End */
 
 
 
 
 
 /* Mobile Toggle Start */
 $(".a-nav-toggle-button").click(function(e){
  $(".a-nav-holder-mobile").slideToggle('fast');
  e.preventDefault();
 });
 /* Mobile Toggle End */
 
 
 
 
 
 /* Smooth Scroll Start */
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
 /* Smooth Scroll End */
 
});