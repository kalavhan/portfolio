<?php
  if(isset($_POST['submit'])) {
    $name = $_POST['firstName']." ".$_POST['lastName'];
    $email = $_POST['email'];
    $to_add = "josue.brigido1@gmail.com"; //<-- put your yahoo/gmail email address here
    $subject = "Portfolio Kalavhan";
    $message = $_POST['message'];
    $headers = "From: $name \r\n";
    $headers .= "Reply-To: $email \r\n";
    $headers .= "X-Mailer: PHP \r\n";
    mail($to_add,$subject,$message,$headers);
  }
?>