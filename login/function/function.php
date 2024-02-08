<?php

    function controllaLogin($utenti){

        if(isset($_POST["username"]) && isset($_POST["password"])){

            $username = $_POST["username"];
            $password = $_POST["password"];

            //Controllo se username e password sono presenti nell'array
            foreach($utenti as $key => $value){

                //Se trovo username e password apro la sessione e mi salvo l'username
                if ($username == $key && $password == $value) {
                    session_start();
                    echo "Login riuscito per $username";
                    
                    //Salvo l'username
                    $_SESSION["username"] = $_POST["username"];
                    
                    return true;
                }

            }
        }else{
            return false;
        }

    }

    function registrati(){

        
    }

    function controllaSessione(){
        
        if(isset($_SESSION["username"])){
            return true;
        }else{
            return false;
        }
    }

    function terminaSessione(){
        $_SESSION = array();
        setcookie(session_name(), '',time()-3600,'/');
        session_destroy();
    }

    



?>