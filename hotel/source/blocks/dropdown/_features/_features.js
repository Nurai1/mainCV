$('.btn-dropdown_features').addClass('btn-dropdown_border-bottom');

$('.btn-dropdown_features__arrow').click(function(){
  $('.dropdown_features').slideToggle();

  if($('.btn-dropdown_features').hasClass('btn-dropdown_border-bottom')){
    $('.btn-dropdown_features').removeClass('btn-dropdown_border-bottom').addClass('btn-dropdown_border-bottom-off');
  }
  else{
    $('.btn-dropdown_features').removeClass('btn-dropdown_border-bottom-off').addClass('btn-dropdown_border-bottom');
  }
});

var sumOfbedroom=2;
var sumOfbed=2;
var sumOfbathroom=0;
$('.bedroom-minus').css("border-color","rgba(31, 32, 65, 0.5)");
$('.bedroom-minus').css("color","rgba(31, 32, 65, 0.5)");
$('.bed-minus').css("border-color","rgba(31, 32, 65, 0.5)");
$('.bed-minus').css("color","rgba(31, 32, 65, 0.5)");

$('.bedroom-minus').click(function(){
  if(sumOfbedroom>0){
    sumOfbedroom--;
    if(sumOfbedroom==0){
      $('.bedroom-minus').css("border-color","rgba(31, 32, 65, 0.25)");
      $('.bedroom-minus').css("color","rgba(31, 32, 65, 0.25)");
    }
  }
  $('.bedroom-count').text(sumOfbedroom);
});

$('.bedroom-plus').click(function(){
  sumOfbedroom++;
  $('.bedroom-count').text(sumOfbedroom);
  $('.bedroom-minus').css("border-color","rgba(31, 32, 65, 0.5)");
  $('.bedroom-minus').css("color","rgba(31, 32, 65, 0.5)");
});

$('.bed-minus').click(function(){
  if(sumOfbed>0){
    sumOfbed--;
    if(sumOfbed==0){
      $('.bed-minus').css("border-color","rgba(31, 32, 65, 0.25)");
      $('.bed-minus').css("color","rgba(31, 32, 65, 0.25)");
    }
  }
  $('.bed-count').text(sumOfbed);
});

$('.bed-plus').click(function(){
  sumOfbed++;
  $('.bed-count').text(sumOfbed);
  $('.bed-minus').css("border-color","rgba(31, 32, 65, 0.5)");
  $('.bed-minus').css("color","rgba(31, 32, 65, 0.5)");
});

$('.bathroom-minus').click(function(){
  if(sumOfbathroom>0){
    sumOfbathroom--;
    if(sumOfbathroom==0){
      $('.bathroom-minus').css("border-color","rgba(31, 32, 65, 0.25)");
      $('.bathroom-minus').css("color","rgba(31, 32, 65, 0.25)");
    }
  }
  $('.bathroom-count').text(sumOfbathroom);
});

$('.bathroom-plus').click(function(){
  sumOfbathroom++;
  $('.bathroom-count').text(sumOfbathroom);
  $('.bathroom-minus').css("border-color","rgba(31, 32, 65, 0.5)");
  $('.bathroom-minus').css("color","rgba(31, 32, 65, 0.5)");
});


$('.bedroom-minus, .bedroom-plus').click(function(){
  $('.btn-dropdown_features-text__bedroom-count').text(sumOfbedroom);

  if (sumOfbedroom>=5 || sumOfbedroom==0)
    $('.btn-dropdown_features-text__bedroom-word').text(' спален, ');
  else if (sumOfbedroom<5 && sumOfbedroom>1)
    $('.btn-dropdown_features-text__bedroom-word').text(' спальни, ');
  else if (sumOfbedroom==1)
    $('.btn-dropdown_features-text__bedroom-word').text(' спальня, ');
});

$('.bed-minus, .bed-plus').click(function(){
  $('.btn-dropdown_features-text__bed-count').text(sumOfbed);

  if (sumOfbed>=5 || sumOfbed==0)
    $('.btn-dropdown_features-text__bed-word').text(' кроватей...');
  else if (sumOfbed<5 && sumOfbed>1)
    $('.btn-dropdown_features-text__bed-word').text(' кровати...');
  else if (sumOfbed==1)
    $('.btn-dropdown_features-text__bed-word').text(' кровать...');
});
