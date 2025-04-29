<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header("Content-Type: application/json");

include('smtp/PHPMailerAutoload.php');
$data = json_decode(file_get_contents("php://input"), true);

$recaptchaToken = $data['recaptchaToken'] ?? '';
$secretKey = '6LcoPP4qAAAAADL04NRw7XuIOcIlU4x8QLyf3OD8';

if (!$recaptchaToken) {
    echo json_encode([
        "status" => "error",
        "message" => "Missing reCAPTCHA token."
    ]);
    exit;
}

$verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$recaptchaToken}");
$responseData = json_decode($verifyResponse);

if (!$responseData || !$responseData->success) {
    echo json_encode([
        "status" => "error",
        "message" => "reCAPTCHA verification failed."
    ]);
    exit;
}

if (!isset($data['userName'], $data['email'], $data['website'], $data['message'])) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid input. All fields are required."
    ]);
    exit;
}

$userName = $data['userName'];
$email = $data['email'];
$website = $data['website'];
$message = $data['message'];

$html = "
<html>
<body>
<img src='C:/xampp/htdocs/xampp/backend/img/HR_logo1.png' alt='HR logo' style='max-width: 150px;' />
<h2>Contact Information</h2>
<p><strong>Name:</strong> {$userName}</p>
<p><strong>Email:</strong> {$email}</p>
<p><strong>Website:</strong> {$website}</p>
<p><strong>Message:</strong><br>{$message}</p>
</body>
</html>
";

function smtp_mailer($to, $subject, $msg) {
    $mail = new PHPMailer(); 
    $mail->IsSMTP(); 
    $mail->SMTPAuth = true; 
    $mail->SMTPSecure = 'tls'; 
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587; 
    $mail->IsHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Username = "harshvegad911@gmail.com";
    $mail->Password = "albf vtrr uaur rmjy"; // App password (secure this!)
    $mail->SetFrom("harshvegad911@gmail.com");
    $mail->Subject = $subject;
    $mail->Body = $msg;
    $mail->AddAddress($to);
    $mail->SMTPOptions = array('ssl'=>array(
        'verify_peer'=>false,
        'verify_peer_name'=>false,
        'allow_self_signed'=>true
    ));
    if(!$mail->Send()){
        return json_encode(["status" => "error", "message" => $mail->ErrorInfo]);
    } else {
        return json_encode(["status" => "success", "message" => "Email sent successfully"]);
    }
}

echo smtp_mailer("harshvegad135@gmail.com", "Contact Form Message", $html);
?>