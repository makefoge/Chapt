<?php
  if (isset($_POST['chatName'])) {
    $chatName = $_POST['chatName'];
    $filename = $chatName . ".html";
    $file = fopen($filename, "w");
    fclose($file);
    header("Location: chat.html");
  }
?>
