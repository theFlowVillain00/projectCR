<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/log-reg.css">
<<<<<<< HEAD
    <meta name="google-signin-client_id" content="578898538060-gcjikar14vkhigmscno3lkfttsudprhi.apps.googleusercontent.com">
=======
>>>>>>> d46d4dd9dd89ad5f3255218dbf28bfb9d054d994
    <title>Login</title>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
</head>
<body>
    <div id="form-1">
        <img src="../img/CR.png">
        <div id="form-2">
            <form action="function/check.php" method="post">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>

<<<<<<< HEAD
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>

                <input type="hidden" name="azione" value="login">
                <button type="submit">Accedi</button>
            </form>
            <div id="form-3">
                <p1 id="string-f3">Oppure</p1>
                <br>
                <button type="submit" onclick="cambiaPagina()">Registrati</button>
            </div>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
        </div>
    </div>

    <script>

        function cambiaPagina() {
            // Cambia la pagina quando viene fatto clic sul pulsante
            window.location.href = "registrazione.php";
        }

        // Initialize the Google API client library
        function initGoogleSignIn() {
            gapi.load('auth2', function() {
                gapi.auth2.init({
                    client_id: '578898538060-gcjikar14vkhigmscno3lkfttsudprhi.apps.googleusercontent.com'
                }).then(function () {
                    // Create the Google Sign-In button
                    gapi.signin2.render('google-login-button', {
                        'scope': 'profile email',
                        'width': 40,
                        'height': 40,
                        'longtitle': true,
                        'theme': 'dark',
                        'onsuccess': onGoogleSignIn
                    });
                });
            });
        }

        // Function called when the user successfully signs in with Google
        function onGoogleSignIn(googleUser) {
            // Handle Google sign-in here, e.g., send data to a backend for verification
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
        }
        // Call the function to initialize Google Sign-In
        initGoogleSignIn();
    </script>
=======
    <div id="form-1">
        <form action="function/check.php" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Submit</button>
        </form>
    </div>
    
>>>>>>> d46d4dd9dd89ad5f3255218dbf28bfb9d054d994
</body>
</html>
