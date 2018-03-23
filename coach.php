<?php

    include ("inc/_menu.php");

    if ($_SESSION['privileges'] !== 1){
        require ("inc/connection.php");
    }
    else{
        header("Location: index.html");
    }

?>

<!DOCTYPE html>
<html>
<head>
	<!-- Character set -->
	<meta charset="utf-8">

    <!-- For rendering on mobile devices and touch zooming   -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/pages/profiel.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/pages/clubs.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<title>Hackathon2018</title>
</head>
<body>

	<!-- Use any element to open the sidenav -->
	<div id="main" style="height: 1350px;">

        <div class="jumbotron clubsJumbotron">
            <div class="row">
                <h1 class="col-2"></h1>
                <h1 class="col-4 display-4 js-club-name">"Training toevoegen"</h1>
            </div>
        </div>


        <div class="form-control">
            <div class="card mb-4 form-control  fly position-relative" style="width: 50%; margin: 0 auto;">
                <form method="POST">
                    <div class="form-group">
                        <label for="formGroupExampleInput">Training naam</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" name="training_naam">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Kosten</label>
                        <input type="text" class="form-control" name="training_kosten" id="formGroupExampleInput2">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Tijdstip</label>
                        <div style="display: flex;">
                            <input type="text" class="form-control" id="formGroupExampleInput" name="training_van"  placeholder="Van">
                            <input type="text" class="form-control" name="training_tot" id="formGroupExampleInput2" placeholder="Tot">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Datum</label>
                        <div style="display: flex;">
                            <input class="form-control" type="date"  name="training_datum" id="example-date-input">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Informatie</label>
                        <div style="display: flex;">
                            <select class="form-control" id="exampleSelect2" name="training_name">
                                <option value="simple">Simple</option>
                                <option value="normal">Normal</option>
                                <option value="deluxe">Deluxe</option>
                            </select>
                            <select class="form-control" id="exampleSelect2" name="training_type">
                                <option value="keeper">Keeper</option>
                                <option value="voetbal">Voetbal</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Deelnemers</label>
                        <div style="display: flex;">
                            <input type="number" class="form-control" id="formGroupExampleInput" name="training_min"  placeholder="Min">
                            <input type="number" class="form-control" name="training_max" id="formGroupExampleInput2" placeholder="Max">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleTextarea">Omschrijving</label>
                        <textarea name="training_omschrijving" class="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary" style="float: right;" name="verstuur_training">Verstuur Training</button>

                </form>
                </div>
            </div>
        </div>
	</div>

	<!--Footer-->
			<!--/.Footer-->
</div>
    <?php include ("inc/_footer.html"); ?>
	<!-- jQuery&bootstrap -->
	<script src="js/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <!-- Custom js  -->
    <script src="js/main.js"></script>
	<script src="js/sideBar.js"></script>
</body>
</html>
