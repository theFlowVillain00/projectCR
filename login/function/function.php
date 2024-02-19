<?php

    // Leggi il contenuto del file JSON nel tuo "database"
    $databaseFile = '../../mainpages/database/user.json';
    $database = json_decode(file_get_contents($databaseFile), true);

    // Funzione per aggiungere un nuovo record al "database"
    function aggiungiRecord($nuovoRecord) {
        global $database;
        $database[] = $nuovoRecord;
        // Scrivi il "database" aggiornato nel file JSON
        file_put_contents('user.json', json_encode($database, JSON_PRETTY_PRINT));
    }


    function controllaLogin($utenti){

        if(isset($_POST["username"]) && isset($_POST["password"])){

            $username = $_POST["username"];
            $password = $_POST["password"];

            //Controllo se username e password sono presenti nell'array
            foreach($utenti as $key => $value){

                //Se trovo username e password apro la sessione e mi salvo l'username
                if ($username == $key && $password == $value) {
                    session_start();
                    
                    //Salvo l'username
                    $_SESSION["utente"] = array(
                        "username"=>$_POST["username"]
                    );
                    
                    return true;
                }

            }
        }else{
            return false;
        }

    }

    function registrati(){
        
        //Controllo se gli input siano settati
        if(isset($_POST["username"]) && isset($_POST["password"]) 
        && isset($_POST["email"]) && isset($_POST["password"])){

            session_start();

            // Recupera i valori dai campi del modulo
            $username = $_POST["username"];
            $password = $_POST["password"];
            $email = $_POST["email"];
            $name = $_POST["name"];
            
            //Valori in più non definibili durante il login
            $nuovoRecord = array(
                "username" => $username,
                "password" => $password,
                "email" => $email,
                "name" => $name,
                "photo" => "black.png",
                "premium" => false,
                "states" => "a",
            );

            aggiungiRecord($nuovoRecord);

            // Memorizza i dati dell'utente nella sessione
            $_SESSION["utente"] = array(
                "username" => $username,
                "password" => $password,
                "email" => $email,
                "name" => $name
            );
         
            // Ritorna true per indicare che la registrazione è avvenuta con successo
            return true;
        } else {
            // Se non tutti i campi sono settati, restituisci false per indicare un errore
            return false;
     }
 }

    function controllaSessione(){
        
        if(isset($_SESSION["utente"])){
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