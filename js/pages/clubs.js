$(document).ready(function(){
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
    console.log("click")
    $('#myModel').css('display','block')
  })
});
