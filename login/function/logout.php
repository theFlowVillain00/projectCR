<?php
    session_start();

    include ("function.php");


    terminaSessione();

    header("Location: ../login.php");
    exit();
?>
