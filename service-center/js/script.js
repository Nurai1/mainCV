$(function(){

  //    Маска для текстового поля номера телефона

  $('.coupon__clientPhone').mask('+7(999)-999-99-99');

  //    Появление кнопки в блоке "Популярные модели"

  $('.models__product > button').css('display', 'none');
  $('.models__product').hover(function(){
    $(this).children('.btn--general').slideToggle();
  });

  /***
            блок рассчета стоимости ремонта, dropdown написан отдельно
                                                                        ***/

var changeSelectCss = function (that){
  if(($(that).parent('.dropdown__select').css("background-color"))==="rgb(255, 255, 255)"){
    $(that).parent('.dropdown__select').css("background-color", "#4353FF");
    $(that).parent('.dropdown__select').css("color", "#fff");
    $(that).css("color", "#fff");
  }
  else{
    $(that).parent('.dropdown__select').css("background-color", "#fff");
    $(that).parent('.dropdown__select').css("color", "#000");
    $(that).css("color", "#000");
  }
}

  $('.select-arrow').click(function(){
    $(this).parent('.dropdown__select').siblings('.dropdown__options').slideToggle();
    var that = this;
    changeSelectCss(that);
  });

  $('.dropdown__option').click(function(){
    $(this).parent().siblings('.dropdown__select').children('.select__text').text($(this).text());
  });

  //    прячем гифку загрузки

  $('.calc__btn').click(function(){
    $('.calc-gif').css('opacity', '1');
  });
})
