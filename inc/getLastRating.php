
<?php
  include 'defaults.php';

  $highScoreArray = [];
  $user = $_POST['id'];

  $id = "";

  $query = mysqli_query($conn,"SELECT `id` FROM `users` WHERE `name` = '$user'");
  // $highScoreQuery = mysqli_query($connect,"SELECT * FROM `teams`");
  $temp = [];
  while($row = mysqli_fetch_assoc($query))
    {
    $temp[] = $row;
  }
  $id = $temp[0]['id'];
  // echo $id;

  $highScoreQuery = mysqli_query($conn,"SELECT * FROM `ratingparent` WHERE `coach` = $id ORDER BY ID DESC LIMIT 1");

  while($row = mysqli_fetch_assoc($highScoreQuery))
  {
    $highScoreArray[] = $row;
  }

  echo json_encode($highScoreArray);
?>
