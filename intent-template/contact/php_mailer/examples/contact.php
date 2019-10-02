<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['first_name'])) {$first_name = $_POST['first_name'];}
	if (isset($_POST['last_name'])) {$last_name = $_POST['last_name'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['Url'])) {$Url = $_POST['Url'];}
    if (isset($_POST['message'])) {$message = $_POST['message'];}
    $to = "sayapov.ainur@mail.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $message = "$formData\n\nОткуда: $email \n\nОтправитель: $first_name \n\nФамилия отправителя: $last_name \n\nАдрес отправителя:$Url \n\nСообщение: $message";
	
	
	date_default_timezone_set('Etc/UTC');

require '../PHPMailerAutoload.php';

$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTPDebug = 2;
$mail->Debugoutput = 'html';
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = 'tls';                            
$mail->Port = 25;
$mail->SMTPAuth = true;
$mail->Username = "carryitthroughlife@gmail.com";
$mail->Password = "xdr5tgbhu8";
/** **/
$mail->setFrom('from@yoursitename.com', 'From Name');
$mail->addReplyTo('reply-to@yoursitename.com', 'Reply-to Name');
$mail->addAddress($to, 'To Ainur');
$mail->Subject = "Проверка почты";
$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
$mail->addAttachment('images/phpmailer_mini.png');

} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>