import { Ui } from "./Ui.module.js";

export class detailsgames {
    constructor(id) {
        this.Ui = new Ui();

        document.getElementById("BTN").addEventListener("click", () => {
            document.querySelector(".home").classList.remove("d-none");
            document.querySelector(".Detials").classList.add("d-none"); 
        });


        this.getDetailsGames(id); 

        console.log("DONE");

    }



    async getDetailsGames(gameid) {
        const looding = document.querySelector(".loading");
        looding.classList.remove("d-none");

       
          
        const response = await fetch( `Https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameid}`, {  method: "GET",
            headers: {
              "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },});
        const api = await response.json();
        this.Ui.DisplayDiteails(api); 
        looding.classList.add("d-none");
        console.log("DONE")
    }
}
