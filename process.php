<?php
  if (isset($_POST['email']))  {
    //Email information
    $admin_email = "kevin.thooft@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" . $email);
    
  }
  echo '<meta http-equiv="refresh" content="0;url=http://localhost:5500/success.html">';
  // header('Location: http://localhost:5500/success.html');
?>