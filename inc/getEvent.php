<?php
  include 'defaults.php';

  $highScoreArray = [];
  $id = $_POST['id'];

  $highScoreQuery = mysqli_query($conn,"SELECT * FROM `events` WHERE `user_id` = $id");

  while($row = mysqli_fetch_assoc($highScoreQuery))
  {
    $highScoreArray[] = $row;
  }

  echo json_encode($highScoreArray);
?>
