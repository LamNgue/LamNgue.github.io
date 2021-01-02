<?php 
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'lamnemchua@gmail.com';
    $email_subject = "Email from: $email_from";
    $email_body = $message;

    $to = "lnguye16@gustavus.edu";
    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject,$email_body,$headers);
    header("Location: index.html");
?>