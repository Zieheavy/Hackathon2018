$(document).ready(function(){
  console.log("profile loaded")
  console.log()
  setTimeout(function () {
    $('#title').text("welcome " + getSession().username)
  }, 10);

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

});
