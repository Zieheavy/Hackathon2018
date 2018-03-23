<?php
  session_start();
    include 'defaults.php';

// session_destroy();
  if(!isset($_SESSION['username'])){
    $_SESSION['username'] = "";
  }
  if(!isset($_SESSION['password'])){
    $_SESSION['password'] = "";
  }
  if(!isset($_SESSION['privileges'])){
    $_SESSION['privileges'] = "";
  }
  if(!isset($_SESSION['loggedin'])){
    $_SESSION['loggedin'] = 0;
  }
  if(!isset($_SESSION['sportClubId'])){
    $_SESSION['sportClubId'] = false;
  }

  $usersArray = [];

  $usersQuery = mysqli_query($conn,"SELECT * FROM `users`");

  while($row = mysqli_fetch_assoc($usersQuery))
    {
    $usersArray[] = $row;
  }

  for($i = 0; $i < count($usersArray); $i++){
    if($usersArray[$i]['name'] == $_POST['username']){
      if($usersArray[$i]['password'] == $_POST['password']){
        $_SESSION['username'] = $usersArray[$i]['name'];
        $_SESSION['password'] = $usersArray[$i]['password'];
        $_SESSION['privileges'] = $usersArray[$i]['Privileges'];
        $_SESSION['loggedin'] = 1;
        $_SESSION['naam'] = $usersArray[$i]['name'];
        if($usersArray[$i]['Privileges'] == 2 || $usersArray[$i]['Privileges'] == 1){
          $_SESSION['sportClubId'] = $usersArray[$i]['spotclub_id'];
          // echo "sportclub";
        }else{
          $_SESSION['sportClubId'] = false;
        }
        echo "loggedin";
        // echo json_encode($_SESSION);
      }
    }
  }

  if($_SESSION['username'] == ""){
    echo "not loggedin";
  }

?>
