$(document).ready(function(){
  $('.hidden-info').hide();
});

  $('.image-thumb').mouseenter(function(){
  	$(this).find('.hidden-info').fadeIn(300);
  	$(this).find('img').fadeTo( "slow" , 0.2);
  });

  $('.image-thumb').mouseleave(function(){
    $(this).find('.hidden-info').fadeOut(300);
    $(this).find('img').fadeTo( "slow" , 1.0);
  });
