$('.btn_with-arrow').parent().click(function(){

  var dateFrom = $('.dateFrom').val();
  var dateTo = $('.dateTo').val();

  var  masOfDates = [dateFrom, dateTo];
  sumOfAdults = $('.adults-count').text();
  allKids = +($('.kids-count').text()) + +($('.babies-count').text());
  localStorage.setItem("masOfDates", masOfDates);
  localStorage.setItem("sumOfAdults", sumOfAdults);
  localStorage.setItem("allKids", allKids);
})
