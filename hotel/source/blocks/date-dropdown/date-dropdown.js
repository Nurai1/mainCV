$( function() {
 $('.date-dropdown__calendar').datepicker({
     showOtherMonths: true,
      dateFormat: 'dd.mm.yy',
      miltipleDates:true,
      range: true,
      multipleDatesSeparator: '-',
      clearButton: true

    });

  //**скрыть блок календаря
  $('.date-dropdown > .date-dropdown__calendar').hide();
  //**показать календарь при нажатии на текстовые поля или стрелку
  $('.dateFrom, .dateTo').focus(function(){
    $('.date-dropdown > .date-dropdown__calendar').show();
  });
  $('.date-dropdown__part > .date-dropdown__arrow').click(function(){
    $('.date-dropdown > .date-dropdown__calendar').show();
  });
  //**блок фунционала кнопок
  $('.datepicker--button').text('очистить').addClass('datepicker--button-clear');
  $('.datepicker--buttons').append('<span class="datepicker--button-ready">применить</span>');

  $('.datepicker--button-clear').click(function(){
    $('.dateFrom, .dateTo').val('');
  });

  $('.datepicker--button-ready').click(function(){
    $('.date-dropdown__calendar').hide();
  });
      //**функция, добавляющая даты в поля
     $('.date-dropdown__calendar').datepicker({
       onSelect: function(formattedDate){
                if((formattedDate.length>13) && (~formattedDate.indexOf('-'))){
                var endFirstDate = formattedDate.indexOf('-');
                var firstDate = formattedDate.slice(0, endFirstDate);
                var secondDate = formattedDate.slice(++endFirstDate);
                  $('.dateFrom').val(firstDate);
                  $('.dateTo').val(secondDate);
              }
          }
     })

    //**уменьшение календаря при появлении лишней строки
    setInterval(function(){
      if(($('#cards__calendar').find('.datepicker--cell').length>=40) || ($('.date-dropdown__calendar_abs-pos').find('.datepicker--cell').length>=40)){
      $('.datepicker--cell').css('height', '33.33px');
      $('.-selected-.-range-from-, .-selected-.-range-to-').css('height', '33.33px');
    }
  }, 1000);


})
