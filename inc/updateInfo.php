<?php
  include 'defaults.php';
  $id = $_POST['id'];
  $name = $_POST['title'];
  $power = $_POST['content'];

  $update = "UPDATE `clubsinfo` SET `title`='$name', `content` = '$power' WHERE id=$id";

  // echo json_encode($_POST);
  // echo $update;
  // echo json_encode($_POST)
  if (mysqli_query($conn, $update)) {
      echo 'succes';
  } else {
    echo "Error: " . "<br>" . mysqli_error($connect);
    // echo json_encode('fail');
  }
?>
