var masOfDates = localStorage.getItem("masOfDates");

var numFrom = masOfDates.slice(0,2);
var numTo = masOfDates.slice(9,11);
var monthFrom = masOfDates.slice(3,5);
var monthTo = masOfDates.slice(12,14);

$('.text-field__input--filter').val(numFrom+"."+monthFrom+" - "+numTo+"."+monthTo);

var sumOfAdults = localStorage.getItem('sumOfAdults');
var allKids = localStorage.getItem('allKids');

var calculatedGuests = function (adults, kids){
  if((adults===1) && (kids===1))
    $('.btn-dropdown_guests-text').text(adults+' взрослый, ' + kids+" ребенок");
  else if((adults===1) && (kids!==1))
    $('.btn-dropdown_guests-text').text(adults+' взрослый, ' + kids+" детей");
  else if((adults!==1) && (kids===1))
    $('.btn-dropdown_guests-text').text(adults+' взрослых, ' + kids+" ребенок");
  else
    $('.btn-dropdown_guests-text').text(adults+' взрослых, ' + kids+" детей");
}

$('.btn-dropdown_guests-text').text(calculatedGuests(sumOfAdults, allKids));
