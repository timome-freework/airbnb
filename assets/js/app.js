$(function() {
  $(window).on('scroll', function() {

    let header = $('#header').height();
    let q11 = $('#main').offset().top;
    let scrollTop = $(window).scrollTop();
    
  
    if (scrollTop == 0) {
      $('.header').show();
      $('.sub-flex').hide(); 
    } else { 
      $('.sub-flex').show(); 
      $('.header').hide();
    } 

  });























});