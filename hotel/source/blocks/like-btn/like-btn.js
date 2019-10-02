  $('.like-btn').click(function(){
    var sumOfHearts = $(this).children('.like-btn__sum').text();
    sumOfHearts++;
    $(this).children('.like-btn__sum').text(sumOfHearts);
    $(this).addClass('like-btn_active');
  });
