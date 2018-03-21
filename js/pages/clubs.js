$(function () {
  $('[data-toggle="popover"]').popover()
})
$(document).ready(function(){
  var selectedImage = 0;
  var club;
  var info;
  var images;

  $.post( "inc/getClub.php", {
    club: getUrlParameter('club')
  }, function(response,status){
    console.log(JSON.parse(response))
    club = JSON.parse(response)[0];
    $('.js-club-name').text(club.naam)
    $('.js-club-info').text(club.info)
  });

  $.post( "inc/getInfo.php", {
    club: getUrlParameter('club')
  }, function(response,status){
    console.log(JSON.parse(response))
    info = JSON.parse(response);
    console.log(info)
    if(info.length >= 1){
      $('#js-info-title_1').text(info[0].title)
      $('#js-info_1').text(info[0].content)
      if(info.length >= 2){
        $('.js-more-info').removeClass('clear')
        for(var i = 1; i < info.length; i++){
          $('.js-collapsed').append("<h1>" + info[i].title + "</h1>")
          $('.js-collapsed').append("<p>" + info[i].content + "</p>")
        }
      }
    }
  });

  $.post( "inc/getImages.php", {
    club: getUrlParameter('club')
  }, function(response,status){
    console.log(JSON.parse(response))
    images = JSON.parse(response);
    console.log(images)
    $('.js-images-container').text('')
    for(var i = 0; i < images.length; i++){
      console.log(images[i].url)
      $('.js-images-container').append("<img class='js-image' src='img/" + images[i].url + "'>")
    }
  });

  $("#js-toggle-collapsed").click(function() {
    var elem = $("#js-toggle-collapsed").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#js-toggle-collapsed").text("Read Less");
      $(".js-collapsed").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#js-toggle-collapsed").text("Read More");
      $(".js-collapsed").slideUp();
    }
  });

  $('body').on('click','.js-image',function(){
  // $('.js-image').on('click',function(){
    images = [];
    selectedImage = 0;
    for(var i = 0; i < $(this).siblings().length+1; i++){
      var temp = $('.js-image')[i].currentSrc.split('/')
      var tempString = "img/" + temp[temp.length-1]
      images.push(tempString)
      if($(this).attr('src') == tempString){
        selectedImage = i;
      }
    }
    $('#myModal').css('display','block')
    $("#img01").attr("src",$(this).attr('src'))
    // $('#caption').text($(this).attr('alt'))
  })

  $('.js-next').on('click',function(){
    if(selectedImage >= images.length-1){
      selectedImage = 0;
      $("#img01").attr("src", images[0])
    }else{
      selectedImage++;
      $("#img01").attr("src", images[selectedImage])
    }
  })

  $('.js-prev').on('click',function(){
    if(selectedImage <= 0){
      selectedImage = images.length;
      $("#img01").attr("src", images[selectedImage])
    }else{
      selectedImage--;
      $("#img01").attr("src", images[selectedImage])
    }
  })

  $('.close').on('click',function(){
    $('#myModal').css('display','none')
  })

  $('body').on('click','#js-reserve_1',function(){
  // $('#js-reserve_1').on('click',function(){
    console.log('click')
    window.location.replace("index.html?event=1");
  })
});
