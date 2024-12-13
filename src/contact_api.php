<?php
 header('Access-Control-Allow-Origin:*');
 header('Content-Type:application/json');
 header('Access-Control-Allow-Method: POST');
 header('Access-Control-Allow-Header:Content-Type,Access-Control-Allow-Heares, Authorization, X-Request-with');

 ini_set("SMTP", "smtp.piivls.com");
 ini_set("smtp_port", "465");


$requestMethord = $_SERVER["REQUEST_METHOD"];

if($requestMethord == "POST")
  {
    // echo("posted");
    // echo($_POST['f_name']);
   
        $first_name = $_POST['f_name'];
        $last_name =$_POST['l_name'];
        // $country =$_POST['cunt_name'];
        // $visa =$_POST['visa'];
        // $country_code =$_POST['cunt_code'];
        // $mobile =$_POST['mobile'];
        // $email =$_POST['email'];
        // $whatsapp =$_POST['whas_app'];

        // && (len($country)==0 ) && (len($visa)==0 ) && (len($country_code)==0) && (len($mobile)==0) && (len($email)==0 && (len($whatsapp)==0)

      if((strlen($first_name)==0) &&(strlen($last_name)==0)){
         $result="";
    }
  else
  {
    $email='das.satadal@gmail.com';
    $mail_body ="Query Details from piivls.com";
    $mail_body .= $first_name." ".$last_name; 
    //echo $mail_body;die();
// $headers  = "MIME-Version: 1.0" . "\r\n";
// $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers = "From: <from@piivls.com>" . "\r\n";
//$headers .= "cc:   <sales@piivls.com>" . "\r\n" ;
//$headers .= "cc: " . $ccEmailName2 . " <" . $ccEmailAddress2 . ">" . "\r\n" ;
//$headers .= "bcc: " . $bccEmailName1 . " <" . $bccEmailAddress1 . ">" . "\r\n" ;
//$headers .= "bcc: " . $bccEmailName2 . " <" . $bccEmailAddress2 . ">" . "\r\n" ;
$to       =  $email;
$subject  = "Quary  details";
$result   = mail($to, $subject, $mail_body, $headers);
echo($result);
//echo $mail_body;  
if($result!='')
{
 $data =[
     'status' => 200,
     'message'=> 'Mail send Successfully',
     'data'   => $first_name
     ];
   header("HTTP/1.0 200 success");
   echo json_encode($data);     
}
else
{
 $data =[
     'status' => 404,
     'message'=> 'Parameter missing',
     //'data'   => $res
     ];
   header("HTTP/1.0 200 success");
   echo json_encode($data);
}
}
    }
  

     
?>