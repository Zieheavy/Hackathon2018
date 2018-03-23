$(document).ready(function(){
  console.log("profile loaded")
  var rating = "";
  headerFooter()
  $(".rating-dynamis ").starRating({
    starSize: 25,
    hoverColor: '#ff5e00',
    activeColor: '#F55922',
    starSize: 40,
    starGradient: {
        start: '#2E428A',
        end: '#1A2659'
    },
    // readOnly: true,
    callback: function(currentRating, $el){
      rating = currentRating
    }
  })

  $('.js-rating').on('click',function(){
    $.post( "inc/ratingParent.php", {
      rating: rating,
      comment: $('.js-text').val(),
      coach: 4,
      username: getSession().username
    }, function(response,status){
      $('.js-text').val("");
    });
  })
})
