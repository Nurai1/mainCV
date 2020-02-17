  var rotateArrow = 90;
$('.checkbox__text__arrow').click(function(){
  $('.expandable-checkbox-wrapper').slideToggle();
  rotateArrow+=180;
  $(this).css('transform', 'rotateZ('+rotateArrow+'deg)');
});
