$(document).ready(function(){
  var club1 = [];
  var club2 = [];
  console.log("compare loadeded")

  console.log(getUrlParameter('club1'))
  console.log(getUrlParameter('club2'))

  headerFooter();
  // $('body').append("<div>")

  $.post( "inc/getClub.php", {
    club: getUrlParameter('club1')
  }, function(response,status){
    console.log(JSON.parse(response))
    club1 = JSON.parse(response)[0];
    $('.js-name-left').text(club1.naam)
    $('.js-location-left').text(club1.Location)
    $('.js-training-left').text(club1.Traningen)
    $('.js-trainers-left').text(club1.Trainers)
    $('.js-leden-left').text(club1.leden)
    $('.js-review-left').text(club1.Review)
    $('.js-price-left').text("€"+club1.price+"-")
  });

  $.post( "inc/getClub.php", {
    club: getUrlParameter('club2')
  }, function(response,status){
    console.log(JSON.parse(response))
    club2 = JSON.parse(response)[0];
    $('.js-name-right').text(club2.naam)
    $('.js-location-right').text(club2.Location)
    $('.js-training-right').text(club2.Traningen)
    $('.js-trainers-right').text(club2.Trainers)
    $('.js-leden-right').text(club2.leden)
    $('.js-review-right').text(club2.Review)
    $('.js-price-right').text("€"+club2.price+"-")
  });
});
