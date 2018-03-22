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

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var attrs = ['id'];
function resetAttributeNames(section) {
    var tags = section.find('div, name, td'), idx = section.index();
    tags.each(function() {
      var $this = $(this);
      $.each(attrs, function(i, attr) {
        var attr_val = $this.attr(attr);
        if (attr_val) {
          $this.attr(attr, attr_val.replace(/_\d+$/, '_'+(idx + 1)))
        }
      })
    })
}

function repeatItem(repeatedClass){
  var lastRepeatingGroup = $('.'+repeatedClass+'').last();
  var cloned = lastRepeatingGroup.clone(true)
  cloned.insertAfter(lastRepeatingGroup);
  resetAttributeNames(cloned)
}
var sessionArray;

$.post( "inc/getSession.php", {
}, function(response,status){
  sessionArray = JSON.parse(response);
});

function getSession(){
  $.post( "inc/getSession.php", {
  }, function(response,status){
    sessionArray = JSON.parse(response);
  });
  return sessionArray;
}

function headerFooter(){
    $.ajax({ type: "GET",
       url: "inc/_menu.html",
       async: false,
       success : function(text)
       {
           var response= text;
           $('body').prepend(response);
       }
    });

    $.ajax({ type: "GET",
       url: "inc/_footer.html",
       async: false,
       success : function(text)
       {
           var response= text;
           $('#main').append(response);
       }
    });
}
