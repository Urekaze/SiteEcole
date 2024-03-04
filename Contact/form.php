<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envoi du mail</title>
</head>
<body>
    <?php
    $retour = mail('xavier.leon.warren@protonmail.com', 'Envoi depuis la page Contact', $_POST['message'], 'From: webmaster@monsite.fr'); // Changer l'adresse mail From: webmaster@monsite.fr par une vrai adresse
    if ($retour)
        echo '<p>Votre message a bien été envoyé.</p>';
    ?>
</body>
</html>