<?php

    include("../common/common.php");
    include("function.php");

    if(controllaLogin($utenti)){
        header("Location: ../benvenuto.php");
        exit();
    }else{
        header("Location: ../errore.php");
        exit();
    }



?>