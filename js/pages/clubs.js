$(document).ready(function(){
  var selectedImage = 0;
  var club;
  var info;
  var images;
  var events;
  var selected = 0;

  getSession();
  headerFooter();

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

  $.post( "inc/getEvents.php", {
    club: getUrlParameter('club')
  }, function(response,status){
    console.log(JSON.parse(response))
    events = JSON.parse(response);
    console.log(events)
    $('.js-images-container').text('')
    for(var i = 1; i < events.length; i++){
      repeatItem('lesson')
    }
    var temp = "";
    temp += "<img src='img/puppy.jpg' class='popoverImage'>"
    temp += "<div class='title' id='pop-title'>Event Event Evenets</div>"
    temp += "<i class='fa fa-circle positive' aria-hidden='true'></i>"
    temp += "<div class='iconInformation'>Er zijn plaatsen vrij</div>"
    temp += "<div class='reserve'>Reserve</div>"
    for(var i = 0; i < events.length; i++){
      $('#startTime_'+(i+1)).text(events[i].startdatum)
      $('#finishTime_'+(i+1)).text(events[i].einddatum)
      $('#title_'+(i+1)).text(events[i].naam)
      $('#name_'+(i+1)).text(events[i].person)
    }
    $(function () {
        $('.lesson').popover({
            html: true,
            placement: 'top',
            content: temp
        }).click(function(e) {
            $('.lesson').popover('hide');
            $(this).popover('show');
            selected = parseInt($(this).find(".startTime").attr('id').split('_')[1])-1
            setTimeout(function () {
              console.log(selected)
              if(getSession().loggedin == 1){
                $('.reserve').css('display','inline ');
              }else{
                $('.reserve').css('display','none');
              }
              $('#pop-title').text(events[selected].naam)
              if(parseInt(events[selected].ingeschreven) >= parseInt(events[selected].deelnemers)){
                console.log("full")
                $('.fa-circle').css('color','red')
                $('.iconInformation').text('er zijn geen plaatsen meer')
              }else if(Math.floor(parseInt(events[selected].deelnemers)/100*90) <= parseInt(events[selected].ingeschreven)){
                console.log("almost full")
                $('.fa-circle').css('color','orange')
                $('.iconInformation').text('er zijn weinig plaatsen')
              }else{
                console.log("space")
                $('.fa-circle').css('color','green')
                $('.iconInformation').text('Er zijn plaatsen vrij')
              }
            }, 10);
            clickedAway = false
            isVisible = true
            e.preventDefault()
        });
    });
  });

  var isVisible = false;
  var clickedAway = false;

  $(document).click(function(e) {
    console.log("click")
    if(isVisible & clickedAway)
    {
      $('.lesson').popover('hide')
      isVisible = clickedAway = false
    }
    else
    {
      clickedAway = true
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

  $('body').on('click','.reserve',function(){
  // $('#js-reserve_1').on('click',function(){
    window.location.replace("reserve.html?id="+selected);
  })
});
