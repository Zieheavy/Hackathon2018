<?php
$conn =  new mysqli("localhost", "root", "", "businessenergy");

if ($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}



if ($resource = mysqli_query($conn," SELECT * FROM voetbalscholen "))
{
    while($result = mysqli_fetch_assoc($resource))
    {
        $voetbalscholen[$result['id']] = $result;
    }
}
else
{
    echo "There is a problem:"; // Message says that there is a problem.
    die(mysqli_error($conn)); // Shows the $connect variable.
}
  echo '<pre>'; print_r( $voetbalscholen ); echo '</pre>';