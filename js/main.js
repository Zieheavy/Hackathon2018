function warningPopup(message){
  var a_message = "";
  a_message += "<div class='alert alert-warning alert-dismissible' role='alert'>";
  a_message +=  "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
  a_message +=  "<strong>Warning!</strong> "+message;
  a_message += "</div>";
  $('body').prepend(a_message)
}

function errorPopup(message){
  var a_message = "";
  a_message += "<div class='alert alert-danger alert-dismissible' role='alert'>";
  a_message +=  "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
  a_message +=  "<strong>Warning!</strong> "+message;
  a_message += "</div>";
  $('body').prepend(a_message)
}
