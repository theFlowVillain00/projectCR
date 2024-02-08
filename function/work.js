document.addEventListener('DOMContentLoaded', function(){
    
    //C'HO DA FIXARE GLI ID CHE CREA QUANDO CREO LE ISTANZE DELLE FABBRICHE



    //Variabili globali
    let soldi = 0;
    let counter = 0;
    //Contatore che aumento ogni volta che CREO una fabbrica
    let identificativoFabbrica = 0;


    //Oggetti

    /**
     * 
     */
    class user {
        /**
         * 
         * @param {*} nome 
         * @param {*} forza 
         * @param {*} istruzione 
         * @param {*} resistenza 
         */
        constructor(nome, forza, istruzione, resistenza){
            this.nome = nome || "user" + contaUser();
        }
    }
    
   /**
    * Classe padre delle miniere
    * 
    */
    class Miniera {
        /**
         * Costruttore di miniera
         * @param {*} nome 
         * @param {*} lvl 
         * @param {*} exp 
         * @param {*} wage 
         */
        constructor(nome, lvl, exp, wage, identificativo) {
            this.nome = nome || "";
            this.lvl = lvl || 2;
            this.exp = exp || 0;
            this.wage = wage || "";
            this.identificativo = identificativo;
        }

        /**
         * Funzione per aumentare
         * @param {*} exp 
         */
        aumentaExp(exp){
            if(exp >= 0){
                this.exp = exp;
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

        getExp(){
            return this.exp;
        }

    }

    // Classe figlia GoldMine
    class GoldMine extends Miniera {
        constructor(nome, lvl, exp, wage, goldProperty, identificativo) {
            super(nome, lvl, exp, wage, identificativo);
            this.goldProperty = goldProperty;
        }
    }
    
    // Classe figlia OilMine
    class OilMine extends Miniera {
        constructor(nome, lvl, exp, wage, oilProperty, identificativo) {
            super(nome, lvl, exp, wage, identificativo);
            this.oilProperty = oilProperty;
        }
    }

    // Classe figlia WoodMine
    class WoodMine extends Miniera {
        constructor(nome, lvl, exp, wage, woodProperty, identificativo) {
            super(nome, lvl, exp, wage, identificativo);
            this.woodProperty = woodProperty;
        }
    }

    /**
     * Classe padre delle farm
     * 
     */
    class farm{
        /**
         * 
         * @param {*} nome 
         * @param {*} lvl 
         * @param {*} exp 
         * @param {*} wage 
         */
        constructor(nome, lvl, exp, wage) {
            this.nome = nome || "";
            this.lvl = lvl || 2;
            this.exp = exp || 0;
            this.wage = wage || "";
        }

        aumentaExp(exp){
            if(exp > 0){
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




    
    //Stipendio calcolato in base => Livello fabbrica * 

    //INDEX COLONNA 0 => NOME, 1 => LIVELLO, 2 => XP FABBRICA
    let miniere = 
    [
        ["Oro",       2, 0],
        ["Oil",       2, 0],
        ["Wood",      2, 0],
        
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
    

    console.table(miniere);
    console.table(fattorie);

    /**FUNZIONE CHE SERVE PER ANDARE A INSERIRE LA FABBRICA SULLO SCHERMO UNA VOLTA CREATA
     * 
     * @param {*} fabbrica 
     */
    function inserisciFabbrichePrivate(fabbrica) {
        //L'identificatore fabbrica (il numero della fabbrica)
        counter = counter;
        // Crea un div per contenere le informazioni della fabbrica
        let divFabbrica = document.createElement("div");
    
        // Utilizza la riflessione per ottenere tutte le proprietà dell'oggetto
        for (let prop in fabbrica) {
            if (fabbrica.hasOwnProperty(prop) && typeof fabbrica[prop] !== 'function') {
                // Ignora i metodi e mostra solo le proprietà
                let paragrafo = document.createElement("p");
    
                // Assegna un id unico a ciascun paragrafo basato sul nome della proprietà e il contatore
                let paragrafoId = prop + counter;
                paragrafo.id = paragrafoId;
    
                paragrafo.textContent = prop + ": " + fabbrica[prop];
    
                // Aggiungi il pulsante "Lavora" solo per la proprietà 'nome'
                if (prop === 'nome') {
                    let bottoneFabbrica = document.createElement("button");
                    bottoneFabbrica.value = fabbrica[prop];
                    bottoneFabbrica.textContent = "Lavora";
                    bottoneFabbrica.style.display = "inline-block";
    
                    // Assegna un id unico al pulsante basato sull'id del paragrafo
                    let bottoneId = "bottone_" + paragrafoId;
                    bottoneFabbrica.id = bottoneId;
    
                    // Aggiungi l'evento click per il pulsante "Lavora"
                    bottoneFabbrica.addEventListener("click", function () {
                        // Lavora prendendo in considerazione le proprietà specifiche
                        lavora(fabbrica);
                    });
    
                    // Aggiungi il pulsante al paragrafo
                    paragrafo.appendChild(bottoneFabbrica);
                }
    
                // Aggiungi il paragrafo al divFabbrica
                divFabbrica.appendChild(paragrafo);
            }
        }

        // Incrementa il contatore per la prossima iterazione
        counter++;
    
        // Aggiungi il divFabbrica al documento
        document.body.appendChild(divFabbrica);
    }
    


    function creazioneContatoreIdentificativoFabbrica(){
        const identificatore = identificativoFabbrica;
        identificativoFabbrica++;
        return identificatore;
    }
    
    
    

    /**
     * 
     * @param {*} nome 
     * @param {*} livello 
     * @param {*} esperienza 
     * @param {*} salario 
     * @param {*} proprietà 
     * @param {*} contatoreIdentificativo
     * @returns 
     */
    function creaFabbrica(nome, livello, esperienza, salario, proprietà,ramo){    
        livello = 2;
        esperienza = 0;
        let nuovaFabbrica = nome;
        console.log(ramo);
        if(nome.length > 0){
            let identificativo = creazioneContatoreIdentificativoFabbrica();
            console.log(identificativo);
            if(ramo == "Oro"){
                nuovaFabbrica = new GoldMine(nome, livello, esperienza, salario, proprietà, identificativo);
                console.log(nuovaFabbrica)
            }
            if(ramo == "Oil"){
                nuovaFabbrica = new OilMine(nome, livello, esperienza, salario, proprietà, identificativo);
                console.log(nuovaFabbrica);
            }
            if(ramo == "Wood"){
                nuovaFabbrica = new WoodMine(nome, livello, esperienza, salario, proprietà, identificativo);
                console.log(nuovaFabbrica);
            }  
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
        creaFabbrica("BeuNack", 2, 0, 10, nomeMiniera, ramo);
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
     * 
     * @param {*} fabbrica 
     * @version 1.1
     */
    function lavora(fabbrica) {

        console.log(fabbrica);

        //Aggiorno l'esperienza
        let exp = fabbrica.getExp() + 10;
        console.log(exp); 
        fabbrica.aumentaExp(exp);

        let e = "exp" + fabbrica.identificativo;
        document.getElementById(e).textContent = "exp: " + fabbrica.exp;

        //Aggiorno il livello della fabbrica
        if(fabbrica.exp > calcoloEsperienzaNecessaria(fabbrica.lvl)){
            fabbrica.lvl += 1;
            let l = "lvl" + fabbrica.identificativo;
            document.getElementById(l).textContent = "lvl: " + fabbrica.lvl;
        }

        

        soldi += fabbrica.wage;    
        //Aggiorna il testo all'interno del paragrafo
        document.getElementById("soldiValore").textContent = soldi;
    }


    /**
     * 
     * @param {*} livelloFabbrica 
     * @returns 
     */
    function calcoloEsperienzaNecessaria(livelloFabbrica){
        return (livelloFabbrica - 1) * Math.pow(livelloFabbrica, 2);
    }

    /**
     * Funzione prototipo che servirà per calcolare il guadagno dell'esperienza della fabbrica ad ogni chiamata della funzione lavoro
     * 
     * @param {*} fabbrica l'oggetto 
     * @param {*} user l'utente
     */
    function calcoloGuadagnoEsperienza(fabbrica, user){

    }

    function contaUser(oldNumber){
        return oldNumber+1;
    }

    let livelloFabbrica = 60; // Cambia questo valore con il livello attuale della fabbrica
    let esperienzaNecessaria = calcoloEsperienzaNecessaria(livelloFabbrica);

    //console.log(`Per avanzare dal livello ${livelloFabbrica - 1} al livello ${livelloFabbrica}, sono necessarie ${esperienzaNecessaria} punti esperienza.`);


    
    
    
    
    //inserisciFabbriche();
    popolaTapparella();

    

});