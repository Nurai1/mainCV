$(document).ready(function(){
  $('.rate-btn__star').click(function(){
    $(this).addClass('rate-btn__star_active');
    $(this).prevAll().each(function(){
      $(this).addClass('rate-btn__star_active');
    });
  });
});
