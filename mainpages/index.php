<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/mainIndex.css">
    <title>Main - Community Regions</title>
</head>
<body>

    <?php
        session_start();

        //echo "<p>Benvenuto, " . $_SESSION["utente"]["username"] . "!</p>";
        //echo "<form action='function/logout.php' method='post'>
        //        <button type='submit'>Logout</button>
        //     </form>";  
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
            <!-- Aggiungi altri link o elementi della navbar qui -->
        </div>
    </nav>


    
</body>
</html>