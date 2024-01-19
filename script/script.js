function creaPedina(nome, colore) {
    // Crea un oggetto con i dati della pedina
    const pedinaGiocatore = {
      nome: nome,
      colore: colore,
      punti: 100,
    };
  
    // Converti l'oggetto in una stringa JSON
    const pedinaJSON = JSON.stringify(pedinaGiocatore);
  
    // Invia la stringa JSON al server per la creazione del file
    inviaAlServer(pedinaJSON);
  
    // Restituisci la stringa JSON se necessario
    return pedinaJSON;
  }
  
  function inviaAlServer(dati) {
    // Puoi utilizzare XMLHttpRequest, Fetch API o altre librerie per inviare dati al server
    // Esempio con Fetch API
    fetch('/salva-pedina', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pedina: dati }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Dati inviati con successo al server', data))
      .catch((error) => console.error('Errore durante l invio dei dati al server', error));
  }
  
  // Esempio di chiamata della funzione
  const nomePedina = "Pedina1";
  const colorePedina = "rosso";
  const pedinaCreata = creaPedina(nomePedina, colorePedina);
  