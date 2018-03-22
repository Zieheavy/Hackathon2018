<?php
  include 'defaults.php';

  $name = $_POST['title'];
  $image = $_POST['content'];
  $club = $_POST['team_id'];

  // echo json_encode($_POST);

  $insertReview = "INSERT INTO `clubsinfo` (`title`, `content`,`club_id`)
    VALUES ('$name','$image','$club');";

  if (mysqli_query($conn, $insertReview)) {
    echo "succes";
  } else {
    echo "Error: " . $insertReview . "<br>" . mysqli_error($conn);
  }
?>
