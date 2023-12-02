let savedCardEl = '<div class="column is-4 card fav"><div class="card-image"><figure><img src="/couchlock-movie-finder/assets/img/bg-project.jpg"></figure></div>'+
'<div class="card-content"><p class="heading movieCat"></p><h1 class="movieTitle"></h1><p class="movieSynopsis"></p></div></div>'

for(let i = 0; i < movieCard.length; i++){
    $(posterDisplay[i]).attr('src', data.Search[i].Poster)
    $(movieTitle[i]).text(data.Search[i].Title)
    $(movieYear[i]).text(data.Search[i].Year)
    let plotUrl = 'http://www.omdbapi.com/?t='+data.Search[i].Title+'&type=movie&plot&page=1&i=tt3896198&apikey=5e93a94c'
    fetch(plotUrl)
    .then(function (response) {
        return response.json()})
    .then(function(data){
        for(let i = 0; i < movieCard.length; i++){
            $(movieSynopsis[i]).text(data.Plot)
            $(movieCat[i]).text(data.Genre)
            // $(movieYear[i]).text(data.Search[i].Year)
        }
        console.log(data)
    })
}