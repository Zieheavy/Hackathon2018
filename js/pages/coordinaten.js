
function initMap(){

    var locatie = null;
    var marker = null;

    $.post( "inc/coordinaten.json.php", function( data ) {
        data = $.parseJSON(data);

        var nederland  = {lat:52.1713634, lng: 5.6462222};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6.8,
            center: nederland
        });

        $.each(data, function(i, item) {
            locatie = {lat: parseFloat(item.lat), lng: parseFloat(item.lng)};
            marker = new google.maps.Marker({
                position: {lat:locatie.lat, lng: locatie.lng},
                map: map

            });
        });
    });
}










/*
function initMap() {
    var psv = {lat: 51.4416892, lng: 5.4673637};
    var ajax = {lat: 52.3701772, lng: 4.8962924};
    var feyenoord = {lat: 51.8939096, lng: 4.5233566};
    var nederland  = {lat:52.1713634, lng: 5.6462222};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6.8,
        center: nederland
    });
    var marker = new google.maps.Marker({
        position: psv,
        map: map
    });
    var marker = new google.maps.Marker({
        position: ajax,
        map: map
    });
    var marker = new google.maps.Marker({
        position: feyenoord,
        map: map
    });

}*/
