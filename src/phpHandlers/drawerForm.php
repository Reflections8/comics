<?php header("Content-Type: text/html; charset=utf-8");?>
<? 

if($_POST['name']) { $name = htmlspecialchars ($_POST['name']); }
if($_POST['email']) { $email = htmlspecialchars ($_POST['email']); }

if($_POST['comic-type']) { $comic-type = htmlspecialchars ($_POST['comic-type']); }
if($_POST['comic-theme']) { $comic-theme = htmlspecialchars ($_POST['comic-theme']); }

if($_POST['delivery-date']) { $delivery-date = htmlspecialchars ($_POST['delivery-date']); }

if($_POST['comment']) { $comment = htmlspecialchars ($_POST['comment']); }

$site = $_SERVER['SERVER_NAME'];


    $to      = 'philipvictorovich1@gmail.com';
    $subject = "Заявка с сайта $site";
    $message = "Заявка с popup-формы.
    Имя - $name
    Телефон - $phone
    Почта - $email
    Комментарий: $comment";

    $headers = "From: info@$site" . "\r\n" .
        "Reply-To: info@$site" . "\r\n" .
        'Content-type: text/plain; charset=utf-8' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

?>
