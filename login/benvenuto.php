<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
        include("function/function.php");
        session_start();

        if(!controllaSessione()){
            header("Location: errore.php");
            exit();

        }else{
        
            echo "<p>Benvenuto, " . $_SESSION["username"] . "!</p>";
            echo "<form action='function/logout.php' method='post'>
                    <button type='submit'>Logout</button>
                 </form>";
        }
        
    ?>

    

    


    
    
</body>
</html>