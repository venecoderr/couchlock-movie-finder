//Carousel logic for displayment needs to be added.
let userInput = $('#userSearch')
let searchForm = $('#searchForm')

function searchMovie(event){
    event.preventDefault()
    let trailerUrl = 'https://youtube.googleapis.com/youtube/v3/search?q='+userInput.val()+'%20movie&part=snippet&maxResults=3&type=video&key=AIzaSyAOhw0g_HG6u1sGbR9QUsFNACC8uTIPQ0Q'
    fetch(trailerUrl)
    .then(function (response) {
        return response.json()})
    .then(function(data){
        console.log(data)
    })

    let infoUrl = 'http://www.omdbapi.com/?s='+userInput.val()+'&type=movie&plot=full&page=1&i=tt3896198&apikey=5e93a94c'
    fetch(infoUrl)
    .then(function (response) {
        return response.json()})
    .then(function(data){
        console.log(data)
    })


}

searchForm.on('submit', searchMovie)
