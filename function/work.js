document.addEventListener('DOMContentLoaded', function(){


    //Variabili globali
    let miniere = 
    [
        "Oro",
        "Carbone",
        "Ferro",
        "Rame",
        "Alluminio",
        "Zinco",
        "Nichel",
        "Piombo",
        "Uranio"
    ];

    let fattorie =
    [
        "Grano",
        "Verdura",
        "Frutta",
        "Cereali",
        "Mucche",
        "Polli"
    ];
    
    let soldi = 0;



    /*
        Questa è la funzione per visualizzare a schermo i tipi di fabbriche, ed i bottoni
        @param ---
        @return ---
        @version 1.0
    */
    function inserisciFabbriche() {
        for (let i = 0; i < miniere.length; i++) {
            let coppiaElemento = document.createElement("div");
    
            let paragrafo = document.createElement("p");
            paragrafo.textContent = miniere[i];
            paragrafo.style.position = "relative";
            paragrafo.style.display = "inline-block";
            paragrafo.style.paddingRight = "4px";

            let bottoneFabbrica = document.createElement("button");
            bottoneFabbrica.value = miniere[i];
            bottoneFabbrica.textContent = miniere[i];
            bottoneFabbrica.style.display = "inline-block";

            coppiaElemento.appendChild(paragrafo);
            coppiaElemento.appendChild(bottoneFabbrica);

            bottoneFabbrica.addEventListener("click",function(){
                lavora(miniere[i]);
            });
    
            document.body.appendChild(coppiaElemento);
        }

        let br = document.createElement("br");
        document.body.appendChild(br);

        for(let i =0; i< fattorie.length; i++){
            let coppiaElemento = document.createElement("div");

            let paragrafo = document.createElement("p");
            paragrafo.textContent = fattorie[i];
            paragrafo.style.position = "relative";
            paragrafo.style.display = "inline-block";
            paragrafo.style.paddingRight = "4px";

            let bottoneFattoria = document.createElement("button");
            bottoneFattoria.value = fattorie[i];
            bottoneFattoria.textContent = fattorie[i];
            bottoneFattoria.style.display = "inline-block";

            coppiaElemento.appendChild(paragrafo);
            coppiaElemento.appendChild(bottoneFattoria);

            bottoneFattoria.addEventListener("click",function(){
                lavora(fattorie[i]);
            });

            document.body.appendChild(coppiaElemento);

        }
    }

    /*
        Questa è la funzione di lavoro
        @param dipartimento il tipo di fabbrica su cui lavoro
        @return --
        @version 1.0
    */
    function lavora(dipartimento) {
        // Aggiungi una quantità specifica di soldi
        soldi += 10;

        // Aggiorna il testo all'interno del paragrafo
        document.getElementById("soldiValore").textContent = soldi;

        console.log("Hai cliccato su " + dipartimento);
    }

    /*
        Funzione per il calcolo dell'esperienza necessaria per il prossimo livello della fabbrica
        @param livelloFabbrica è il livello della fabbrica 
        @return l'esperienza necessaria per il prossimo livello
        @version 1.0
    */
   function calcoloEsperienzaNecessaria(livelloFabbrica){
        return (livelloFabbrica - 1) * Math.pow(livelloFabbrica, 2);
   }

    let livelloFabbrica = 60; // Cambia questo valore con il livello attuale della fabbrica
    let esperienzaNecessaria = calcoloEsperienzaNecessaria(livelloFabbrica);

    console.log(`Per avanzare dal livello ${livelloFabbrica - 1} al livello ${livelloFabbrica}, sono necessarie ${esperienzaNecessaria} punti esperienza.`);


    
    
    
    
    inserisciFabbriche();


    

});