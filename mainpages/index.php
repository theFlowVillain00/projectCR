<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/mainIndex.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>Main - Community Regions</title>
</head>

<body>

        <?php
            //Qua ci va la foto profilo

            session_start();

            if(!isset($_SESSION["utente"])){
                header("location:../login/errore.php");
            }

            
            print_r($_SESSION["utente"]["username"]);
            

        ?>   

    <nav>
        <div class="navbar-left"> 
            <a href="#">Home</a>
            <a href="#">Articoli</a>
            <a href="map.html">Mappa</a>
            <a href="#">Lavoro</a>
        </div>
        <div class="navbar-center">
            <a href="#">Community Regions </a>
        </div>
        <div class="navbar-right">
            <a href="#">Profile</a>
            <a href="#">Parlamento</a>
            <a href="#">Partito</a>
            <a href="#">:</a>
        </div>
    </nav>

    <?php


            // Percorso relativo al file JSON
            $json_file_path = 'database/user.json';

            // Leggi il contenuto del file JSON
            $database_json = file_get_contents($json_file_path);

            // Decodifica il JSON in un array PHP
            $database = json_decode($database_json, true);

            // Effettua un echo dei dati degli utenti
            echo "Dati degli utenti:\n";
            foreach ($database['utenti'] as $utente) {
                echo "ID: " . $utente['id'] . ", Nome: " . $utente['nome'] . ", Cognome: " . $utente['cognome'] . ", Email: " . $utente['email'] . "\n";
            }


    ?>


    
</body>

</html>