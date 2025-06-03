<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Configuración
$to = "info@actextiles.com.ar";
$subject = "Nuevo mensaje desde el formulario de contacto";

// Validar método
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
    exit;
}

// Honeypot anti-bots
$honeypot = $_POST["website"] ?? '';
if (!empty($honeypot)) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Bot detectado."]);
    exit;
}

// Obtener y sanitizar inputs
$name = strip_tags(trim($_POST["name"] ?? ''));
$email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"] ?? '');

// Validar campos
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Campos inválidos."]);
    exit;
}

// Construir el cuerpo del email
$body = "Nombre: $name\nCorreo: $email\n\nMensaje:\n$message";

// Cabeceras seguras
$headers = "From: info@actextiles.com.ar\r\n";
$headers .= "Reply-To: $email\r\n";

// Enviar correo
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(["success" => true, "message" => "Mensaje enviado correctamente."]);
} else {
    error_log("Error al enviar mensaje desde: $email\n", 3, "error_log_email.txt");
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "No se pudo enviar el mensaje."]);
}
