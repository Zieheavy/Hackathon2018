


function initMap(){
    var locatie = null;
    var marker = null;
    var arrayLocations = [];
    var verschillenLocations = [];
    var gesorteerd = [];
    var obj = {};


    $.post( "inc/coordinaten.json.php", function( data ) {
        data = $.parseJSON(data);
        var nederland  = {lat:52.1713634, lng: 5.6462222};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8.1,
            center: nederland
        });

        $.each(data, function(i, item) {
            locatie = {id: parseInt(item.voetbalschool_id), lat: parseFloat(item.lat), lng: parseFloat(item.lng), naam: item.voetbalschool_naam, adres:item.voetbalschool_adres, postcode:item.voetbalschool_postcode  };
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
                    stylers: [{color: '#f5f1e6'}]
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'geometry',
                    stylers: [{color: '#fdfcf8'}]
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
                    stylers: [{color: '#F55922'}]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'geometry',
                    stylers: [{color: '#FFFFFF'}]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#F55922'}]
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
                x.innerHTML = "Latitude: " + position.coords.latitude +  "<br>Longitude: " + position.coords.longitude;

                $.each(arrayLocations, function(i, item) {
                    var verschilLat = item.lat - position.coords.latitude;
                    var verschilLng = item.lng - position.coords.longitude;
                    obj[item.id] = {itemid: i, corddiff: verschilLat + verschilLng, voetbalschool: item.id}
                });

                $.each(obj, function (index, value) {
                    verschillenLocations[index] = value;
                });

                verschillenLocations.sort(function(a,b) {
                    return a.corddiff > b.corddiff;
                });

                console.dir( verschillenLocations );





                function getDistanceFromLatLonInKm() { // hier ben ik
                    var R = 6371; // Radius of the earth in km
                    var dLat = deg2rad(lat2-lat1);  // deg2rad below
                    var dLon = deg2rad(lon2-lon1);
                    var a =
                        Math.sin(dLat/2) * Math.sin(dLat/2) +
                        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                        Math.sin(dLon/2) * Math.sin(dLon/2)
                    ;
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                    var d = R * c; // Distance in km
                    return d;
                }

                function deg2rad(deg) {
                    return deg * (Math.PI/180)
                }


            }






        });

    });
}

