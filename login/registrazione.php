<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/log-reg.css">
    <meta name="google-signin-client_id" content="578898538060-gcjikar14vkhigmscno3lkfttsudprhi.apps.googleusercontent.com">
    <title>Login</title>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
</head>
<body>
    <div id="form-1">
        <img src="../img/CR.png">
        <div id="form-2">
            <form action="function/check.php" method="post" onsubmit="return validaForm()">
                <label for="username">Username (minimo 4 caratteri):</label>
                <input type="text" id="username" name="username" required minlength="4">
    
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required>
    
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
    
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required minlength="8">
    
                <input type="hidden" name="azione" value="registrazione">
                <button type="submit">Crea Account</button>
            </form>
        </div>
    </div>
</body>
<script>

    function validaForm() {
        /* Convalida dell'username
        var username = document.getElementById("username").value;
        if (username.length < 4) {
            alert("L'username deve contenere almeno 4 caratteri.");
            return false;
        }

        // Convalida della password
        var password = document.getElementById("password").value;
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            alert("La password deve contenere almeno 8 caratteri, di cui almeno una lettera maiuscola, una lettera minuscola e un numero.");
            return false;
        }
        */
        return true;
        
    }
</script>

</html>
