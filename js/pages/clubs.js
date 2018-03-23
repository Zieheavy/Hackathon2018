$(document).ready(function () {
    var selectedImage = 0;
    var club;
    var info;
    var images;
    var events;
    var selected = 0;
    var trainingen;

    console.log(getSession())
    headerFooter();

  $.post( "inc/getClub.php", {
     club: getUrlParameter('club')
   }, function(response,status){
     console.log(JSON.parse(response))
     club = JSON.parse(response)[0];
     $('.js-club-name').text(club.naam)
     $('.js-club-info').text(club.info)
   });

    $.post("inc/getTrainingen.php", {
        club: getUrlParameter('club')
    }, function (response, status) {
        console.log(JSON.parse(response))
        trainingen = JSON.parse(response);
        console.log(trainingen)

        $('#price-1').prepend('<sup>€</sup>' + trainingen[0].kosten);
        $('#price-2').prepend('<sup>€</sup>' + trainingen[1].kosten);
        $('#price-3').prepend('<sup>€</sup>' + trainingen[2].kosten);
        $('#name-1').text(trainingen[0].name);
        $('#name-2').text(trainingen[1].name);
        $('#name-3').text(trainingen[2].name);
        $('#info-1-1').text("Trainer: " + trainingen[0].coach);
        $('#info-1-2').text("Type: " + trainingen[0].type);
        $('#info-2-1').text("Trainer: " + trainingen[1].coach);
        $('#info-2-2').text("Type: " + trainingen[1].type);
        $('#info-3-1').text("Trainer: " + trainingen[2].coach);
        $('#info-3-2').text("Type: " + trainingen[2].type);
    });

    $.post("inc/getInfo.php", {
        club: getUrlParameter('club')
    }, function (response, status) {
        console.log(JSON.parse(response))
        info = JSON.parse(response);
        console.log(info)
        if (info.length >= 1) {
            $('#js-info-title_1').text(info[0].title)
            $('#js-info-input-title_1').val(info[0].title)
            $('#js-info_1').text(info[0].content)
            $('#js-info-id').text(info[0].id)
            $('#js-input-info_1').val(info[0].content)
            if (info.length >= 2) {
                $('.js-more-info').removeClass('clear')
                for (var i = 1; i < info.length; i++) {
                    $('.js-collapsed').append("<h1 class='toggleHide'>" + info[i].title + "</h1>")
                    $('.js-collapsed').append("<input type='text' class='form-control toggleHide hide' id='delete-title-info_" + i + "' value='" + info[i].title + "'>")
                    $('.js-collapsed').append("<p class='toggleHide'>" + info[i].content + "</p>")
                    $('.js-collapsed').append("<textarea class='form-control toggleHide hide' id='delete-textarea-info_" + i + "'>" + info[i].content + "</textarea>")
                    $('.js-collapsed').append("<button type='button' class='btn btn-primary js-delete-info toggleHide hide' >delete</button>")
                    $('.js-collapsed').append("<button type='button' class='btn btn-primary js-update-infos toggleHide hide' id='update-text-info_" + i + "'>update</button>")
                    $('.js-collapsed').append("<p class='hide' id='js-info-update-id_" + i + "'>" + info[i].id + "</p>")
                }
            }
        }
    });

    $.post("inc/getImages.php", {
        club: getUrlParameter('club')
    }, function (response, status) {
        console.log(JSON.parse(response))
        images = JSON.parse(response);
        console.log(images)
        $('.js-images-container').text('')
        console.log(images.length)
        for (var i = 0; i < images.length; i++) {
            console.log(images[i].url)
            $('.js-images-container').append("<img class='js-image' src='img/" + images[i].url + "'>")
        }
    });

  setTimeout(function () {
    if(getSession().sportClubId == getUrlParameter('club')){
      $('.toggleHide').toggleClass('hide')
    }
    if(getSession().privileges == 1){
      $('.js-plan-training').removeClass("hide")
    }else{
      $('.js-plan-training').addClass("hide")
    }
  }, 10);

    var isVisible = false;
    var clickedAway = false;

    $(document).click(function (e) {
        if (isVisible & clickedAway) {
            $('.lesson').popover('hide')
            isVisible = clickedAway = false
        }
        else {
            clickedAway = true
        }
    });

    $(".js-add-info").on('click', function () {
        $("#js-toggle-collapsed").text("Read Less");
        $(".js-collapsed").slideDown();
        console.log("click")
        info.push("#")
        // console.log($('.js-delete-info').last().attr("id"))
        var id = parseInt($('.js-update-infos').last().attr("id").split("_")[1]) + 1
        $('.js-collapsed').append("<input type='text' class='form-control toggleHide' id='delete-title-info_" + id + "' value=''>")
        $('.js-collapsed').append("<textarea class='form-control toggleHide' id='delete-textarea-info_" + id + "'></textarea>")
        $('.js-collapsed').append("<button type='button' class='btn btn-primary js-delete-info toggleHide' >delete</button>")
        $('.js-collapsed').append("<button type='button' class='btn btn-primary js-update-infos toggleHide' id='update-text-info_" + id + "'>save</button>")
        $('.js-collapsed').append("<p class='hide' id='js-info-update-id_" + id + "'></p>")
    })

    $('body').on('click', '.js-delete-info', function () {
        if ($(this).attr('id') != "delete_info") {
            var id = $(this).attr('id').split("_")[1];
            $('#delete-title-info' + id).remove();
            $('#delete-textarea-info_' + id).remove();
            $('#delete-text-info_' + id).remove();
        }
    })

    $('#save_info').on('click', function () {
        console.log($('#js-info-input-title_1').val())
        console.log($('#js-input-info_1').val())
        console.log($('#js-info-id').text())

        $.post("inc/updateInfo.php", {
            title: $('#js-info-input-title_1').val(),
            content: $('#js-input-info_1').val(),
            id: $('#js-info-id').text()
        }, function (response, status) {
            console.log(response)
        });
    })

    $("#js-toggle-collapsed").click(function () {
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

    $('body').on('click', '.js-update-infos', function () {
        var id = $(this).attr('id').split("_")[1]
        console.log(id)
        if ($('#js-info-update-id_' + id).text() == "") {
            console.log($('#delete-title-info_' + id).val())
            console.log($('#delete-textarea-info_' + id).val())
            console.log(getUrlParameter('club'))
            console.log("add")
            $.post("inc/addInfo.php", {
                title: $('#delete-title-info_' + id).val(),
                content: $('#delete-textarea-info_' + id).val(),
                team_id: getUrlParameter('club')
            }, function (response, status) {
                console.log(response)
                if (response == "succes") {
                    location.reload();
                }
            });
        } else {
            console.log($('#delete-title-info_' + id).val())
            console.log($('#delete-textarea-info_' + id).val())
            console.log($('#js-info-update-id_' + id).text())
            console.log("update")
            $.post("inc/updateInfo.php", {
                title: $('#delete-title-info_' + id).val(),
                content: $('#delete-textarea-info_' + id).val(),
                id: $('#js-info-update-id_' + id).text()
            }, function (response, status) {
                console.log(response)
            });
        }
    })

    $('body').on('click', '.js-image', function () {
        // $('.js-image').on('click',function(){
        images = [];
        selectedImage = 0;
        for (var i = 0; i < $(this).siblings().length + 1; i++) {
            var temp = $('.js-image')[i].currentSrc.split('/')
            var tempString = "img/" + temp[temp.length - 1]
            images.push(tempString)
            if ($(this).attr('src') == tempString) {
                selectedImage = i;
            }
        }
        $('#myModal').css('display', 'block')
        $("#img01").attr("src", $(this).attr('src'))
        // $('#caption').text($(this).attr('alt'))
    })

    $('.js-next').on('click', function () {
        if (selectedImage >= images.length - 1) {
            selectedImage = 0;
            $("#img01").attr("src", images[0])
        } else {
            selectedImage++;
            $("#img01").attr("src", images[selectedImage])
        }
    })

    $('.js-prev').on('click', function () {
        if (selectedImage <= 0) {
            selectedImage = images.length;
            $("#img01").attr("src", images[selectedImage])
        } else {
            selectedImage--;
            $("#img01").attr("src", images[selectedImage])
        }
    })

    $('.close').on('click', function () {
        $('#myModal').css('display', 'none')
    })

    $('body').on('click', '.reserve', function () {
        // $('#js-reserve_1').on('click',function(){
        window.location.replace("reserve.html?id=" + selected);
    })
});


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

//click the image and a scaled version of the full size image will appear
$("#photo-gallery a").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();
});

$("#overlay").click(function () {
    $("#overlay").hide();
});
