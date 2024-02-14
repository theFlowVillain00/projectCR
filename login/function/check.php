<?php

    include("../common/common.php");
    include("function.php");

    if (isset($_POST["azione"])) {
        $azione = $_POST["azione"];

        if ($azione === "registrazione") {
            if(registrati($utenti)){
                header("Location: ../benvenuto.php");
                exit();    
            }else{
                header("Location: ../errore.php");
                exit();
            }
        } elseif ($azione === "login") {
            if(controllaLogin($utenti)){
                header("Location: ../benvenuto.php");
                exit();
            }else{
                header("Location: ../errore.php");
                exit();
            }
        }
    }





?>