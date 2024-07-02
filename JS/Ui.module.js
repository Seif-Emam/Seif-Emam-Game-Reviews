export class Ui {
    displayDataGames(data) {
        let cartona = ` `;
        for (let i = 0; i < data.length; i++) {
            cartona += `
                <div class="col">
                    <div id="${data[i].id}" class="card bg-transparent text-white" style="width: 18rem;">
                           
                          <img src="${data[i].thumbnail } "   class=" card-img-top h-100 " alt="...">
                              <video   controls autoplay loop class="d-none card-vid ">
    <source src="./images/37585-414024825_small.mp4" type="video/mp4"  >
  </video> 
                
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">${data[i].title.split(" ", 4)}</h5>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text small text-center opacity-50">${data[i].short_description.split(" ", 8)}</p>
                        </div>
                        <div class="card-footer small d-flex hstack justify-content-between">
                            <span class="badge badge-color">${data[i].genre}</span>
                            <span class="badge badge-color">${data[i].platform}</span>
                        </div>
                    </div>
                </div>`;
        }
        document.getElementById("gamebox").innerHTML = cartona;
    }

    DisplayDiteails(data) {
        let content = `
            <div class="game-img col-md-4"> 
                <img src="${data.thumbnail}" alt="game-img">
            </div>
            <div class="col-md-8 details-con">
                <h2 class="text-white">Title: <span>${data.title}</span></h2>
                <h4 class="text-white h4-text">Category: <span class="blu-span badge text-bg-info">${data.genre}</span></h4>
                <h4 class="text-white h4-text">Platform: <span class="blu-span badge text-bg-info">${data.platform}</span></h4>
                <h4 class="text-white h4-text">Status: <span class="blu-span badge text-bg-info">${data.status}</span></h4>
                <p class="text-white small">${data.description}</p>
                <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
            </div>`;
        document.getElementById("details-content").innerHTML = content;
    }
}
