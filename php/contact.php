<?php
if (isset($_POST['submit'])) {
  // Form Data
  $Name = $_POST['txtName'];  
  $Email = $_POST['txtEmail'];
  $Message = $_POST['txtareaComment'];

  // Send form data via email
  $mailTo = "***redacted***";  
  $headers = "Shake 8 Ball Contact Form | From:".$Email;
  $txt = "Message from ".$Name." (via the Shake8Ball contact form).\n\nEmail: ".$Email."\n\n".$Message;
    
  mail($mailTo, $headers, $txt);

  echo "<script>window.location.href='/success.html';</script>";
} else {
  echo "<script>alert('Failed to send your message. Please try again.');window.location.href='../contact.html';</script>";
}
exit();
?>