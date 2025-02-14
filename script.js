// Function runs on page load to view current popular movies in the US
// endpoint here: https://developer.themoviedb.org/reference/movie-popular-list

function getPopularMovies(){
    // the endpoint
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=26cbadba3715ae229cdf350c34d7e326&language=en-US&page=1" // **modified by adding the api_key
    // the place on the page where we'll display the movies
    let popularMovies = document.getElementById("popular");
    let imgUrl = "https://image.tmdb.org/t/p/w400";

    // ajax time!
    // create the object
    // const data = null;  **commented out

    const xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;  **commented out

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.response); //** removed Text from responseText

            let json = JSON.parse(this.responseText);
            
            let html = "";

            //display featured movie
            html += `<section id="featured">
                        <h3>${json.results[0].title}</h3>
                        <img src="${imgUrl}${json.results[0].poster_path}" alt="">
                        <p>"${json.results[0].overview}"</p>
                    </section>`;
            
            for(let i = 1; i < 19; i++) {
                html += `<section class="movie">
                            <img src="${imgUrl}${json.results[i].poster_path}" alt="">
                            <div>
                                <h3>${json.results[i].title}</h3>
                                <p>${json.results[i].overview}
                                    <span class="vote">Vote Average: ${json.results[i].vote_average}</span>
                                </p>
                            </div>
                        </section>`
            };

            //add to page
            popularMovies.innerHTML = html;
        }
    });

    // open the request
    xhr.open('GET', url);
    // xhr.setRequestHeader('accept', 'application/json');  **commented out
    // xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmNiYWRiYTM3MTVhZTIyOWNkZjM1MGMzNGQ3ZTMyNiIsIm5iZiI6MTczOTQ4NDQ5MS41NzQwMDAxLCJzdWIiOiI2N2FlNmQ0YmVmMTQ0MTRjN2IzNmViNWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fE_gYZCwFXqCKLZOmHIwNKUFxsbQiagEPGtccpLovaM');  **commented out

    // xhr.responseType = "json"; //**added => actually, this depends on the api so you have to try to figure it out!!

    // send the request
    xhr.send();
}

// function runs only after a year is entered/chosen and submitted through the form
// endpoint here: https://developer.themoviedb.org/reference/discover-movie
function getBirthYearMovies(e){
    e.preventDefault();

    // Get the user's input/year value
    let year = encodeURI(document.getElementById("userYear").value);
    // the place on the page where we'll add the movies
    let birthYearMovies = document.getElementById("birthYear");

    if(year < 1940 || year > 2024 || year == ""){
        birthYearMovies.innerHTML = `<p style="color: red; background-color: white;">Please enter a year between 1940 and 2022</p>`;
    }else{
        // TO DO - Build the endpoint we need (this one has additional parameters)
        let beginURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year="
        let endURL = "&sort_by=revenue.desc"
        let url = `${beginURL}${year}${endURL}`
        let imgUrl = "https://image.tmdb.org/t/p/w400";

        // ajax time!
        // create the object
        // TO DO

        // attach event handlers
        // TO DO

        /*
            // This code can be used for the display of the movies from the given year
            // currently only displays the top six movies from that year but can be adjusted
            let counter = 0;
            for(let i = 0; counter < 6; i++){
                // It skips any movies that don't include a poster
                if(json.results[i].poster_path === null){
                    continue;
                }else{
                    `<section class="yrMovie">
                        <img src="${"TO DO"}" alt="">
                        <h3>${"TO DO"}</h3>
                    </section>`; 
                    counter++;
                }
            }
        */
        
        // set the response type
        // TO DO
        // open the request
        // TO DO
        // attach the headers (optional)

        // send the request
        // TO DO
    }
}

window.addEventListener("load", function(){
    getPopularMovies();
    document.getElementById("yearBtn").addEventListener("click", getBirthYearMovies);
});
