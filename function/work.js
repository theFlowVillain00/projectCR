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


    
    
    
    //Stipendio calcolato in base => Livello fabbrica * 

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

    
    function inserisciFabbrichePrivate(fabbrica) {
        // Crea un div per contenere le informazioni della fabbrica
        let divFabbrica = document.createElement("div");
    
        // Crea paragrafi per ogni informazione della fabbrica
        let paragrafoNome = document.createElement("p");
        paragrafoNome.textContent = "Nome: " + fabbrica.nome;
    
        let paragrafoLivello = document.createElement("p");
        paragrafoLivello.textContent = "Livello: " + fabbrica.lvl;
    
        let paragrafoExp = document.createElement("p");
        paragrafoExp.textContent = "Esperienza: " + fabbrica.exp;
    
        let paragrafoSalario = document.createElement("p");
        paragrafoSalario.textContent = "Salario: " + fabbrica.wage;
    
        let paragrafoGoldProperty = document.createElement("p");
        paragrafoGoldProperty.textContent = "Proprietà Gold: " + fabbrica.goldProperty;
    
        // Aggiungi i paragrafi al divFabbrica
        divFabbrica.appendChild(paragrafoNome);
        divFabbrica.appendChild(paragrafoLivello);
        divFabbrica.appendChild(paragrafoExp);
        divFabbrica.appendChild(paragrafoSalario);
        divFabbrica.appendChild(paragrafoGoldProperty);
    
        // Aggiungi il divFabbrica al documento
        document.body.appendChild(divFabbrica);
    }
    

    /**
     * 
     * @param {*} nome 
     * @param {*} livello 
     * @param {*} esperienza 
     * @param {*} salario 
     * @param {*} proprietà 
     * @returns 
     */
    function creaFabbricaGold(nome, livello, esperienza, salario, proprietà){    
        livello = 2;
        esperienza = 0;
        let nuovaFabbrica = nome;
        if(nome.length > 0){
            nuovaFabbrica = new GoldMine(nome, livello, esperienza, salario, proprietà);
            console.log(nuovaFabbrica);   
        }

        inserisciFabbrichePrivate(nuovaFabbrica);

        return nuovaFabbrica;
    }

    
    document.getElementById('ottieniInput').addEventListener('click', ottieniInput);
    /**
     * Questa funzione server ad ottenere i campi di input per la  nuova fabbrica
     * 
     * 
     */
    function ottieniInput() {
        let nomeMiniera = document.getElementById("name").value;
        let ramo = document.getElementById("miniere").value;
        alert("Nome: " + nomeMiniera + "\nRamo: " + ramo);
        // Chiamo la funzione di instanziamento della Fabbrica
        creaFabbricaGold("BeuNack", 2, 0, 10, nomeMiniera);
    }
    

    /**
     * Questa è la funzione per visualizzare a schermo i tipi di fabbriche, ed i bottoni
     * @param ---
     * @return ---
     * @version 1.0
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
        popolaTapparella();        
    }

    // Funzione per popolare la tapparella con i valori dell'array
    function popolaTapparella() {
        let tapparella = document.getElementById("miniere");

        for (let i = 0; i < miniere.length; i++) {
            let opzione = document.createElement("option");
            opzione.text = miniere[i][0];
            tapparella.add(opzione);
        }
    }

    /**
     * Funzione di lavoro
     * @param {*} index 
     * @param {*} dipartimento 
     * @param {*} livello 
     * @param {*} exp 
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
        
        
    
        // Vado a dare l'esperienza alla fabbrica
        console.log("Hai cliccato su " + dipartimento + ", livello " + livello + ", exp " + exp);
    }

    /**
     * 
     * @param {*} livelloFabbrica 
     * @returns 
     */
    function calcoloEsperienzaNecessaria(livelloFabbrica){
        return (livelloFabbrica - 1) * Math.pow(livelloFabbrica, 2);
    }

    let livelloFabbrica = 60; // Cambia questo valore con il livello attuale della fabbrica
    let esperienzaNecessaria = calcoloEsperienzaNecessaria(livelloFabbrica);

    //console.log(`Per avanzare dal livello ${livelloFabbrica - 1} al livello ${livelloFabbrica}, sono necessarie ${esperienzaNecessaria} punti esperienza.`);


    
    
    
    
    inserisciFabbriche();


    

});