<?php
include 'defaults.php';
$coordinaten = array();
if ($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

if ($resource = mysqli_query($conn," SELECT * FROM coordinaten "))
{
    while($result = mysqli_fetch_assoc($resource))
    {
        array_push($coordinaten, $result);
    }
}
else
{
    echo "There is a problem:"; // Message says that there is a problem.
    die(mysqli_error($conn)); // Shows the $connect variable.
}


if (isset($_POST['verstuur_training'])){
    if($conn->query(" INSERT INTO `trainingen` VALUES ('{$_POST['training_naam']}', '{$_POST['training_kosten']}', '{$_POST['training_van']}', '{$_POST['training_tot']}', '{$_POST['training_min']}', '{$_POST['training_max']}', '{$_POST['training_omschrijving']}', '{$_SESSION['sportClubId']}', '{$_SESSION['naam']}', NULL, '{$_POST['training_name']}', '{$_POST['training_type']}', '{$_POST['training_datum']}') ")){
        echo "good";
    }
    else
    {
        echo "There is a problem:"; // Message says that there is a problem.
        die(mysqli_error($conn)); // Shows the $connect variable.
    }
}