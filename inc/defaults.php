<?php
  $conn =  new mysqli("localhost", "root", "", "businessenergy");

  function dump($dump){
  	echo "<pre>";
  	var_dump($dump);
  	echo "</pre>";
  }
?>
