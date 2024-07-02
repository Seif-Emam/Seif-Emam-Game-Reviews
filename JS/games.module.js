import { detailsgames } from "./details.module.js";
import { Ui } from "./Ui.module.js";

console.log("seif");

export class Games {
    constructor() {
        this.looding = document.querySelector(".loading");

        this.ui = new Ui();
        this.displayApi("mmorpg");

        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const activeLink = document.querySelector(".nav-link.active");
                if (activeLink) {
                    activeLink.classList.remove("active");
                }
                e.currentTarget.classList.add("active");

                this.looding.classList.remove("d-none");
                setTimeout(() => {
                    this.displayApi(e.target.dataset.category);
                }, 100); 


            });
        });
    
    
    }

    

    async displayApi(category) {
     
        
        setTimeout(async () => {
            const response = await fetch(`Https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,{    method: "GET",
                headers: {
                    "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
                    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                },});
            const data = await response.json();
            this.ui.displayDataGames(data);
            this.showVid();


            this.EventCard();

            this.looding.classList.add("d-none");

        }, 100 ) ; 
        
        
    }

    EventCard() {
        document.querySelectorAll(".card").forEach((CARD_ITEM) => {
            CARD_ITEM.addEventListener("click", () => {
                const id = CARD_ITEM.id;
                this.ShowDetails(id); 
            });
        });
        
    }
    
  
    ShowDetails(game_id) {
        const detailsGamesInstance = new detailsgames(game_id); 
        
        document.querySelector(".home").classList.add("d-none");
        document.querySelector(".Detials").classList.remove("d-none"); 
    }
    

     showVid() {
        document.querySelectorAll(".card").forEach((card) => {
          card.addEventListener('mouseenter', () => {
            card.querySelector(".card-img-top").classList.add("d-none");
            const video = card.querySelector(".card-vid");
            video.classList.remove("d-none");
            video.play();
            video.removeAttribute("controls");
          });
          
          card.addEventListener('mouseleave', () => {
            card.querySelector(".card-img-top").classList.remove("d-none");
            const video = card.querySelector(".card-vid");
            video.classList.add("d-none");
            video.pause();
            video.currentTime = 0; // Optional: Reset video to start
          });
        });
      }
      

    
}
