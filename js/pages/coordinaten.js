


function initMap(){
    var locatie = null;
    var marker = null;
    var arrayLocations = [];
    var verschillenLocations = [];
    var gesorteerd = [];
    var obj = {};
    var array = [];


    $.post( "inc/coordinaten.json.php", function( data ) {
        data = $.parseJSON(data);
        var nederland  = {lat:52.1713634, lng: 5.6462222};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8.1,
            center: nederland
        });

        $.each(data, function(i, item) {
            locatie = {id: parseInt(item.voetbalschool_id), lat: parseFloat(item.lat), lng: parseFloat(item.lng), naam: item.voetbalschool_naam, adres:item.voetbalschool_adres, postcode:item.voetbalschool_postcode, img: item.voetbalschool_img  };
            arrayLocations.push(locatie);

            marker = new google.maps.Marker({
                position: {lat:locatie.lat, lng: locatie.lng},
                map: map,
                title: "test",
                animation: google.maps.Animation.DROP,
                icon: "img/marker.png"
            });

            google.maps.event.addListener(marker, 'click', function(event) {
                console.log("JE hebt op een marker geklikt!");
                window.location.href = "clubs.html?club="+item.voetbalschool_id;
            });

            google.maps.event.addListener(marker,"mouseover",function(event){
                console.log("Hover");
            });

        });

        var styledMapType = new google.maps.StyledMapType(
            [
                {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#000000'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#FFFFFF'}]},
                {
                    featureType: 'administrative',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'landscape.natural',
                    elementType: 'geometry',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '##F55922'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry.fill',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#F55922'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'geometry',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#F55922'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'road.highway.controlled_access',
                    elementType: 'geometry',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'road.highway.controlled_access',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'road.local',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#FFFFF'}]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'geometry',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'geometry',
                    stylers: [{color: '#F55922'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry.fill',
                    stylers: [{color: '#6c757d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6c757d'}]
                },
                {
                    featureType: "administrative.country",
                    elementType: "geometry.stroke",
                    stylers: [
                        {color: '#F55922'},
                        {weight: '5'},

                    ]


                }
            ],
            {name: 'Styled Map'});
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');



        $('.huidigeLocatie').click(function () {

            var x = document.getElementById("coordinaten");


            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }




            function showPosition(position) {

                function distance(id, naam, adres, postcode, img, lat1, lon1, lat2, lon2) {
                    var p = 0.017453292519943295;    // Math.PI / 180
                    var c = Math.cos;
                    var a = 0.5 - c((lat2 - lat1) * p)/2 +
                        c(lat1 * p) * c(lat2 * p) *
                        (1 - c((lon2 - lon1) * p))/2;

                    var kilometer = 12742 * Math.asin(Math.sqrt(a));
                    array[id] = {id: id, adres:adres, postcode:postcode, img:img, naam: naam, km: kilometer}
                    //console.log(voetbalschool_id + " - " + kilometer); // 2 * R; R = 6371 km
                }

                x.innerHTML = "Latitude: " + position.coords.latitude +  "<br>Longitude: " + position.coords.longitude;

                $.each(arrayLocations, function(i, item) {
                    var verschilLat = item.lat - position.coords.latitude;
                    var verschilLng = item.lng - position.coords.longitude;
                    obj[item.id] = {itemid: i, corddiff: verschilLat + verschilLng, voetbalschool: item.id};
                    distance(item.id, item.naam, item.adres, item.postcode, item.img, item.lat, item.lng, position.coords.latitude, position.coords.longitude);
                });


                array.sort(function(a,b) {
                    return (a.km > b.km);

                });


                $("#myModal").on("show", function() {    // wire up the OK button to dismiss the modal when shown
                    $("#myModal a.btn").on("click", function(e) {
                        console.log("button pressed");   // just as an example...
                        $("#myModal").modal('hide');     // dismiss the dialog
                    });
                });
                $("#myModal").on("hide", function() {    // remove the event listeners when the dialog is dismissed
                    $("#myModal a.btn").off("click");
                });

                $("#myModal").on("hidden", function() {  // remove the actual elements from the DOM when fully hidden
                    $("#myModal").remove();
                });

                $("#myModal").modal({                    // wire up the actual modal functionality and show the dialog
                    "backdrop"  : "static",
                    "keyboard"  : true,
                    "show"      : true                     // ensure the modal is shown immediately
                });

                for(var i = 0; i < 3; i++){
                    $("#topDrieLocaties").html( "<h4 class='center'>Dit zijn de meest vlakbij voetbalscholen voor  uw loactie!</h4>"+
                    "                               <div class=\"even\">\n" +
                    "                                    <article class=\"block-light location-result col-xs-12 no-padding\" itemscope=\"\" itemtype=\"https://schema.org/ExerciseGym\">\n" +
                    "                                        <a itemprop=\"url\" href=\"clubs.html?club="+array[0].id+"\">\n" +
                    "                                          <h5><span class='leftSmall' itemprop=\"name\">"+ Math.round( array[0].km * 10) / 10  +" km</span></h5>"+
                    "                                            <div class=\"info-wrap\">\n" +
                    "                                                <h2><span itemprop=\"name\">"+array[0].naam+"</span></h2>\n" +
                    "                                                <div itemprop=\"address\" itemscope=\"\" itemtype=\"http://schema.org/PostalAddress\">\n" +
                    "                                                    <div><span itemprop=\"streetAddress\">\ " + array[0].adres + " - " + array[0].postcode + "</span></div>\n" +
                    "                                                </div>\n" +
                    "                                            </div>\n" +
                    "                                            <div class=\"field field-name-field-club-in-de-buurt-foto field-type-image field-label-hidden\">\n" +
                    "                                                <div class=\"field-items\">\n" +
                    "                                                    <div class=\"field-item even\">\n" +
                    "                                                        <picture title=\"sportschool Fit For Free Amersfoort\">\n" + "                                                           " +
                    "                                                            <img src=" + array[0].img + ">\n" +
                    "                                                        </picture>\n" +
                    "                                                    </div>\n" +
                    "                                                </div>\n" +
                    "                                            </div>\n" +
                    "                                            <div class=\"clear\"></div>\n" +
                    "                                        </a>\n" +
                    "                                    </article>\n" +
                    "                                </div>"+
                    "                               <div class=\"even\">\n" +
                    "                                    <article class=\"block-light location-result col-xs-12 no-padding\" itemscope=\"\" itemtype=\"https://schema.org/ExerciseGym\">\n" +
                    "                                        <a itemprop=\"url\" href=\"clubs.html?club="+array[1].id+"\">\n" +
                    "                                         <h5><span class='leftSmall' itemprop=\"name\">"+ Math.round( array[1].km * 10) / 10  +" km</span></h5>"+
                    "                                            <div class=\"info-wrap\">\n" +
                    "                                                <h2><span itemprop=\"name\">"+array[1].naam+"</span></h2>\n" +
                    "                                                <div itemprop=\"address\" itemscope=\"\" itemtype=\"http://schema.org/PostalAddress\">\n" +
                    "                                                    <div><span itemprop=\"streetAddress\">\ " + array[1].adres + " - " + array[1].postcode + "</span></div>\n" +
                    "                                                </div>\n" +
                    "                                            </div>\n" +
                    "                                            <div class=\"field field-name-field-club-in-de-buurt-foto field-type-image field-label-hidden\">\n" +
                    "                                                <div class=\"field-items\">\n" +
                    "                                                    <div class=\"field-item even\">\n" +
                    "                                                        <picture title=\"sportschool Fit For Free Amersfoort\">\n" + "                                                            " +
                    "                                                           <img src=" + array[1].img + ">\n" +
                    "                                                        </picture>\n" +
                    "                                                    </div>\n" +
                    "                                                </div>\n" +
                    "                                            </div>\n" +
                    "                                            <div class=\"clear\"></div>\n" +
                    "                                        </a>\n" +
                    "                                    </article>\n" +
                    "                                </div>"+
                    "                               <div class=\"even\">\n" +
                    "                                    <article class=\"block-light location-result col-xs-12 no-padding\" itemscope=\"\" itemtype=\"https://schema.org/ExerciseGym\">\n" +
                    "                                        <a itemprop=\"url\" href=\"clubs.html?club="+array[2].id+"\">\n" +
                    "                                         <h5><span class='leftSmall' itemprop=\"name\">"+ Math.round( array[2].km * 10) / 10  +" km</span></h5>"+
                    "                                            <div class=\"info-wrap\">\n" +
                    "                                                <h2><span itemprop=\"name\">"+array[2].naam+"</span></h2>\n" +
                    "                                                <div itemprop=\"address\" itemscope=\"\" itemtype=\"http://schema.org/PostalAddress\">\n" +
                    "                                                    <div><span itemprop=\"streetAddress\">\ " + array[2].adres + " - " + array[2].postcode + "</span></div>\n" +
                    "                                                </div>\n" +
                    "                                            </div>\n" +
                    "                                            <div class=\"field field-name-field-club-in-de-buurt-foto field-type-image field-label-hidden\">\n" +
                    "                                                <div class=\"field-items\">\n" +
                    "                                                    <div class=\"field-item even\">\n" +
                    "                                                        <picture title=\"sportschool Fit For Free Amersfoort\">\n" +
                    "                                                            <img src=" + array[2].img + ">\n" +
                    "                                                        </picture>\n" +
                    "                                                    </div>\n" +
                    "                                                </div>\n" +
                    "                                            </div>\n" +
                    "                                            <div class=\"clear\"></div>\n" +
                    "                                        </a>\n" +
                    "                                    </article>\n" +
                    "                                </div>"
                    );
                }





            }





        });





    }); // einde post ajax





} // einde initMap()

