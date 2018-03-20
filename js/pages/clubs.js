$(document).ready(function(){
  var images = [];
  var selectedImage = 0;

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

  $('.js-image').on('click',function(){
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

});
