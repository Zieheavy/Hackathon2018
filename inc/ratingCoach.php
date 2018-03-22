
<?php
  include 'defaults.php';

  $rating = $_POST["rating"];
  $comment = $_POST["comment"];
  $coach = $_POST["coach"];
  $user = $_POST["username"];
  $userid = "";

  $query = mysqli_query($conn,"SELECT `id` FROM `users` WHERE `name` = '$user'");
  // $highScoreQuery = mysqli_query($connect,"SELECT * FROM `teams`");
  $highScoreArray = [];
  while($row = mysqli_fetch_assoc($query))
    {
    $highScoreArray[] = $row;
  }
  $userid = $highScoreArray[0]['id'];

  // echo json_encode();
  // echo json_encode($highScoreArray);

  $insert = "INSERT INTO `ratingCoach` (`rating`, `comment`, `coach`, `user`)
    VALUES ('$rating', '$comment', '$coach', '$userid');";

  if (mysqli_query($conn, $insert)) {
    echo "succes";
  } else {
    echo "Error: " . $insertReview . "<br>" . mysqli_error($connect);
  }
  // }

?>
