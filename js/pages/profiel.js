$(document).ready(function(){
  console.log("profile loaded")
  var rating = "";
  headerFooter()
  $(".rating-dynamish").starRating({
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

    $.post( "inc/getLastRating.php", {
      id: getSession().username
    }, function(response,status){
      var temp;
      var arr;
      console.log(JSON.parse(response))
      arr = JSON.parse(response)[0];
      temp = arr.rating;
      temp = parseFloat(temp)
      console.log(temp)

      $('.js-review-text').text(arr.comment)

      $(".rating-static").starRating({
        starSize: 25,
        initialRating: temp,
        hoverColor: '#ff5e00',
        activeColor: '#F55922',
        starSize: 40,
        starGradient: {
            start: '#2E428A',
            end: '#1A2659'
        },
        readOnly: true
      })
      setTimeout(function () {
        $('#title').text("welcome " + getSession().username)
      }, 10);
    });


  $.post( "inc/getEvent.php", {
    id: getUrlParameter('id')
  }, function(response,status){
    console.log(JSON.parse(response))
    club = JSON.parse(response);
    for (var i = 1; i < club.length; i++) {
      repeatItem('repeat')
    }
    console.log(club.length)
    for (var i = 1; i < club.length+1; i++) {
      console.log(i)
      $('#day_'+i).text(club[i-1].dag)
      $('#date_'+i).text(club[i-1].datum)
      $('#time_'+i).text(club[i-1].tijd)
      $('#name_'+i).text(club[i-1].person)
    }
  });

  $('.js-rating').on('click',function(){
    console.log($('.js-rating-text').val());
    console.log(rating)
    console.log(getSession().username)

    $.post( "inc/ratingCoach.php", {
      rating: rating,
      comment: $('.js-rating-text').val(),
      coach: 1,
      username: getSession().username
    }, function(response,status){
    });
  })

});
