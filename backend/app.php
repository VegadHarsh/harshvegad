<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["name"]) || !isset($data["email"]) || !isset($data["website"]) || !isset($data["message"])) {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit();
}

// Simulating email sending (Replace this with `mail()` function)
$response = [
    "status" => "success",
    "message" => "Email sent successfully!",
    "data" => $data
];

echo json_encode($response);
?>
