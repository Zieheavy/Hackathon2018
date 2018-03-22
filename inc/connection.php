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
    $conn->query("INSERT INTO `projecten` VALUES (NULL, '{$_POST['training_naam']}', NULL, '{$_POST['training_omschrijving']}', NOW(), NULL, '{$_POST['training_taal']}', '{$_POST['training_docent']}' )  ");
}