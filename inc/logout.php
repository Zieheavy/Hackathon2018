<?php

  session_start();
  session_destroy();
  if(!isset($_SESSION['loggedin'])){
    $_SESSION['loggedin'] = 0;
  }
  if(!isset($_SESSION['sportClubId'])){
    $_SESSION['sportClubId'] = false;
  }
  echo 'loggout';

?>
