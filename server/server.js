const express = require('express');
const app = express();

// Imposta la cartella pubblica per servire i file statici
app.use(express.static('script'));

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
