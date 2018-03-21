<?php
  include 'defaults.php';
  session_start();
  session_destroy();

  if(!isset($_SESSION['username'])){
    $_SESSION['username'] = "";
  }
  if(!isset($_SESSION['password'])){
    $_SESSION['password'] = "";
  }
  if(!isset($_SESSION['privileges'])){
    $_SESSION['privileges'] = "";
  }

  $name = $_POST['username'];
  $password = $_POST['password'];

  // echo json_encode($_POST);

  $insert = "INSERT INTO `users` (`name`, `password`, `Privileges`)
    VALUES ('$name', '$password', 0);";

  if (mysqli_query($conn, $insert)) {
    $_SESSION['username'] = $name;
    $_SESSION['password'] = $password;
    $_SESSION['privileges'] = 0;
    echo "succes";
  } else {
    echo "Error: " . $insertReview . "<br>" . mysqli_error($connect);
  }

  if($_SESSION['username'] == ""){
    echo "not loggedin";
  }

?>
