let posterDisplay = $('.posterDisplay')
let movieCard = $('.movieDisplay')
let movieTitle = $('.movieTitle')
let movieYear = $('.movieYear')
let movieSynopsis = $('.movieSynopsis')


function searchMovie(){
    let infoUrl = 'http://www.omdbapi.com/?s='+localStorage.getItem('search')+'&type=movie&page=1&i=tt3896198&apikey=5e93a94c'
    fetch(infoUrl)
    .then(function (response) {
        return response.json()})
    .then(function(data){
        for(let i = 0; i < movieCard.length; i++){
            $(posterDisplay[i]).attr('src', data.Search[i].Poster)
            $(movieTitle[i]).text(data.Search[i].Title)
            $(movieYear[i]).text(data.Search[i].Year)
            let plotUrl = 'http://www.omdbapi.com/?t='+data.Search[i].Title+'&type=movie&plot&page=1&i=tt3896198&apikey=5e93a94c'
            fetch(plotUrl)
            .then(function (response) {
                return response.json()})
            .then(function(data){
                movieSynopsis.text(data.Plot)
        })
        }
        
        console.log(data)
    })


    let trailerUrl = 'https://youtube.googleapis.com/youtube/v3/search?q='+localStorage.getItem('search')+'%20movie&part=snippet&maxResults=3&type=video&key=AIzaSyAOhw0g_HG6u1sGbR9QUsFNACC8uTIPQ0Q'
    fetch(trailerUrl)
    .then(function (response) {
        return response.json()})
    .then(function(data){
        console.log(data)
        for(let i = 0; i < movieCard.length; i++){
            let requestedTrailer = 'https://www.youtube.com/watch?v='+data.items[i].id[1]
        }        
        //when we have the I frame ill use requestTrailer and attr to change iframe href
    })

}

searchMovie()