fetch('data/moovies.json')
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < data.length; i++) {
            console.log(data[i].Title)
            let tab = data[i];
            document.querySelector("#fichesfilms").innerHTML +=

    `<section id="fichesfilms">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <img class="Poster" src="${tab.Poster}">
                </div>
                <div class="col-sm-2"> </div>
                <div class="col-sm-7 d-flex flex-column justify-content-around">
                    <div class="Title"> 
                        ${tab.Title}
                    </div>
                    <div class="Genre">
                        ${tab.Genre}
                    </div> 
                    <div class="Released">
                        ${tab.Released}
                    </div>    
                    <div class="Plot">
                        ${tab.Plot} 
                    </div>              
                    <div class="row">
                        <div class="notation col-sm-2">
                        <p>Score:</p>${tab.imdbRating}
                        </div>
                        <div class="col-sm-3">
                            <img class="Images" src="${tab.Images[0]}">
                        </div>
                        <div class="col-sm-3">
                            <img class="Images" src="${tab.Images[1]}">
                        </div>
                        <div class="col-sm-3">
                            <img class="Images" src="${tab.Images[2]}">
                        </div>
                        <div class="col-sm-1"> </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
        }
    })