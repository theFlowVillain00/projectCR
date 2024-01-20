document.addEventListener('DOMContentLoaded', function(){
    
    //Variabili globali


    //Oggetti
    
    /*
        Classe padre delle miniere
    */
    class Miniera {
        constructor(nome, lvl, exp, wage) {
            this.nome = nome || "";
            this.lvl = lvl || 2;
            this.exp = exp || 0;
            this.wage = wage || "";
        }

        aumentaExp(exp){
            if(exp >= 0){
                this.exp += exp;
            }else{
                console.log("Esperienza negativa");
            }
        }

        aumentaLivello(){
            this.lvl +=1;
        }

        setWage(wage){
            if(wage >= 1000){
                this.wage = wage;
            }else{
                console.log("Salario troppo basso");
            }
        }

        
    }

    // Classe figlia GoldMine
    class GoldMine extends Miniera {
        constructor(nome, lvl, exp, wage, goldProperty) {
            super(nome, lvl, exp, wage);
            this.goldProperty = goldProperty;
        }


    }

    // Classe figlia OilMine
    class OilMine extends Miniera {
        constructor(nome, lvl, exp, wage, oilProperty) {
            super(nome, lvl, exp, wage);
            this.oilProperty = oilProperty;
        }
    }

    // Classe figlia WoodMine
    class WoodMine extends Miniera {
        constructor(nome, lvl, exp, wage, woodProperty) {
            super(nome, lvl, exp, wage);
            this.woodProperty = woodProperty;
        }
    }

    // Esempio di utilizzo delle classi
    let goldMine = new GoldMine("GoldMine1", 3, 100, "HighWage", "GoldProperty");
    let oilMine = new OilMine("OilMine1", 4, 150, "MediumWage", "OilProperty");
    let woodMine = new WoodMine("WoodMine1", 2, 50, "LowWage", "WoodProperty");

    console.table(goldMine);
    console.table(oilMine);
    console.table(woodMine);
    
    
    


    //INDEX COLONNA 0 => NOME, 1 => LIVELLO, 2 => XP FABBRICA
    let miniere = 
    [
        ["Oro",       2, 0],
        ["Carbone",   2, 0],
        ["Ferro",     2, 0],
        ["Rame",      2, 0],
        ["Alluminio", 2, 0],
        ["Zinco",     2, 0],
        ["Nichel",    2, 0],
        ["Piombo",    2, 0],
        ["Uranio",    2, 0]
    ];

    let fattorie =
    [
       [ "Grano",     2, 0],
       [ "Verdura",   2, 0],
       [ "Frutta",    2, 0],
       [ "Cereali",   2, 0],
       [ "Mucche",    2, 0],
       [ "Polli",     2, 0]
    ];
    
    let soldi = 0;

    console.table(miniere);
    console.table(fattorie);


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
            paragrafo.textContent = miniere[i][0];
            paragrafo.style.position = "relative";
            paragrafo.style.display = "inline-block";
            paragrafo.style.paddingRight = "4px";

            let bottoneFabbrica = document.createElement("button");
            bottoneFabbrica.value = miniere[i][0];
            bottoneFabbrica.textContent = "Lavora";
            bottoneFabbrica.style.display = "inline-block";
            bottoneFabbrica.id = "bottone";
            

            coppiaElemento.appendChild(paragrafo);
            coppiaElemento.appendChild(bottoneFabbrica);

            bottoneFabbrica.addEventListener("click",function(){
                lavora(i, miniere[i][0], miniere[i][1], miniere[i][2]);
            });
    
            document.body.appendChild(coppiaElemento);
        }

        let br = document.createElement("br");
        document.body.appendChild(br);

        for (let i = 0; i < fattorie.length; i++) {
            let coppiaElemento = document.createElement("div");
        
            let paragrafo = document.createElement("p");
            paragrafo.textContent = fattorie[i][0];
            paragrafo.style.position = "relative";
            paragrafo.style.display = "inline-block";
            paragrafo.style.paddingRight = "4px";
        
            let bottoneFattoria = document.createElement("button");
            bottoneFattoria.value = fattorie[i][0];
            bottoneFattoria.textContent = "Lavora";
            bottoneFattoria.style.display = "inline-block";
        
            coppiaElemento.appendChild(paragrafo);
            coppiaElemento.appendChild(bottoneFattoria);
        
            bottoneFattoria.addEventListener("click", function () {
                lavora(i, fattorie[i][0], fattorie[i][1], fattorie[i][2]);
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
    function lavora(index, dipartimento, livello, exp) {
        console.log("index: " + index + ", dipartimento: " + dipartimento + ", livello: " + 
        livello + ", exp: " + exp);
        //Aggiungi una quantità specifica di soldi
        soldi += 10;
    
        //Aggiorna il testo all'interno del paragrafo
        document.getElementById("soldiValore").textContent = soldi;

        //Aggiorno l'exp della fabbrica
        exp += 100;
        dipartimento.push(['Oro',2]);
        
    
        // Vado a dare l'esperienza alla fabbrica
        console.log("Hai cliccato su " + dipartimento + ", livello " + livello + ", exp " + exp);
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

    //console.log(`Per avanzare dal livello ${livelloFabbrica - 1} al livello ${livelloFabbrica}, sono necessarie ${esperienzaNecessaria} punti esperienza.`);


    
    
    
    
    inserisciFabbriche();


    

});