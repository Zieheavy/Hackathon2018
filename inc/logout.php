<?php

  session_start();
  session_destroy();
  if(!isset($_SESSION['loggedin'])){
    $_SESSION['loggedin'] = 0;
  } 
  echo 'loggout';

?>
