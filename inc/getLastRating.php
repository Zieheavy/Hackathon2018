
<?php
  include 'defaults.php';

  $highScoreArray = [];
  $id = $_POST['id'];

  $highScoreQuery = mysqli_query($conn,"SELECT * FROM `ratingcoach` WHERE `user` = $id ORDER BY ID DESC LIMIT 1");

  while($row = mysqli_fetch_assoc($highScoreQuery))
  {
    $highScoreArray[] = $row;
  }

  echo json_encode($highScoreArray);
?>
