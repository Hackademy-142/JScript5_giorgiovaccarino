// ESERCIZIO 1:
// Replicare lo stesso esercizio del bowling visto durante la lezione.

    let ans2 = prompt(`Digita 1 per giocare a bowling oppure 2 per controllare il garage`);

    if(ans2 == 1){
        const bowling = {
            "players": [],
            "setScores": function () {
                this.players.forEach((player) => {
                    for (let i = 0; i < 10; i++) {
                        let play = Math.floor(Math.random() * 11);
                        player.points.push(play);
                    }
                    // console.log(player); //controllo
                })
            },
            "setTotalScore": function () {
                this.players.forEach((player) => {
                    player.totalPoints = player.points.reduce((a, b) => a + b)
                    // console.log(`nome: ${player.name}, punteggio: ${player.totalPoints}`); //controllo
                })
            },
            "setClassifica": function () {
                this.players.sort((a, b) => b.totalPoints - a.totalPoints)

                console.log("classifica finale")
                this.players.forEach((player) => {
                    console.log(`nome: ${player.name}, punteggio: ${player.totalPoints}`)
                }) //controllo
            },



            "setNewGame": function () {
                let nGiocatori = prompt(`Quanti giocatori siete?`)
                for (let i = 0; i < nGiocatori; i++) {
                    let name = prompt(`Nome giocatore ${i + 1}:`);
                    this.players.push({ "name": name, "points": [] });
                    // console.log(`${i+1}${name}`) //controllo
                }
                this.setScores();
                this.setTotalScore();
                this.setClassifica();
            },
        };
        bowling.setNewGame();
    } else if (ans2 == 2) {

        // EXTRA: 
        // Provate ad aggiungere altri metodi oltre quelli visti a lezione come per esempio una stampa completa della classifica.


        // ESERCIZIO 2 :
        // Realizzare un oggetto che rappresenti un garage, dovrà contenere una lista di automobili. Ciascuna automobile dovra’ avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso).
        // Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

        const garage = {
            "auto": [
                { "marca": "Fiat", "modelli": ["600", "multipla", "panda 4x4", "croma", "idea", "ducato camperizzato"] },
                { "marca": "Dacia", "modelli": ["sandero"] },
                { "marca": "Opel", "modelli": ["corsa", "meriva"]}
            ],
            "marchiDisponibili": function(){
                console.log(`ecco i marchi in scuderia`)
                this.auto.forEach((automobili)=>console.log(automobili.marca));
            },

            // "consultaGarage": function () {
            //     this.marchiDisponibili();
            //     let marca = prompt(`Di quale casa vuoi controllare i modelli?`);
            //     this.auto.forEach((automobili) => {
            //         if (automobili.marca.toLowerCase() == marca.toLowerCase()) {
            //             console.log(`ecco i modelli ${automobili.marca}: ${automobili.modelli}`);
            //         };
            //     });
            // },

            "consultaGarage": function(){
                this.marchiDisponibili();
                let marca = prompt(`Di quale casa vuoi controllare i modelli?`);
                let found = this.auto.find((automobili)=>automobili.marca.toLowerCase() == marca.toLowerCase());
                if (typeof(found) == "undefined"){
                    console.log(`Questo marchio non é presente`);
                } else {
                console.log(`Ecco i modelli ${found.marca}:`)
                found.modelli.forEach((modello)=>console.log(modello));
                };
            },
        };
        garage.consultaGarage();
    } else {
        allert(`iserisci una risposta valida (1, 2)`)
    }
