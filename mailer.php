<?php
  if(isset($_POST['submit'])) {
    $to_add = "josue.brigido@kalavhan.com"; //<-- put your yahoo/gmail email address here
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: $_POST['name'] \r\n";
    $headers .= "Reply-To: $_POST['email'] \r\n";
    $headers .= "X-Mailer: PHP \r\n";
    mail($to_add,$subject,$message,$headers))
  }
?>