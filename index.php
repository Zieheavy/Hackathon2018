<?php require ('inc/connection.php'); ?>

<!DOCTYPE html>
<html>
<head>
	<!-- Character set -->
	<meta charset="utf-8">

    <!-- For rendering on mobile devices and touch zooming   -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/pages/index.css">

	<title>Hackathon2018</title>
    <style>
        #map {
            height: 400px;
            width: 400px;
        }
    </style>
</head>
<body>

<div id="map"></div>


<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmSWC5wi4lIC6li0O85M_ITdyCprP76V0&callback=initMap">
</script>

	<!-- jQuery&bootstrap -->
	<script src="js/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <!-- Custom js  -->
    <script src="js/pages/index.js"></script>
    <script src="js/pages/coordinaten.js"></script>
</body>
</html>
