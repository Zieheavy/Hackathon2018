<?php
$conn =  new mysqli("localhost", "root", "", "businessenergy");
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