let posterDisplay = $('.posterDisplay')
let movieCard = $('.movieDisplay')
let movieTitle = $('.movieTitle')
let movieYear = $('.movieYear')
let movieSynopsis = $('.movieSynopsis')
let movieCat = $('.movieCat')
let trailerDisplay = $('.trailerDisplay')
let saveBtn = $('.saveBtn')

function searchMovie(){
    let infoUrl = 'https://www.omdbapi.com/?s='+localStorage.getItem('search')+'&type=movie&page=1&i=tt3896198&apikey=5e93a94c'
    fetch(infoUrl)
    .then(function (response) {
        return response.json()})
    .then(function(data){
        for(let i = 0; i < movieCard.length; i++){
            $(posterDisplay[i]).attr('src', data.Search[i].Poster)
            $(movieTitle[i]).text(data.Search[i].Title+' ('+data.Search[i].Year+')')
            let plotUrl = 'https://www.omdbapi.com/?t='+data.Search[i].Title+'&type=movie&plot&page=1&i=tt3896198&apikey=5e93a94c'
            fetch(plotUrl)
            .then(function (response) {
                return response.json()})
            .then(function(data){
                for(let i = 0; i < movieCard.length; i++){
                    $(movieSynopsis[i]).text(data.Plot)
                    $(movieCat[i]).text(data.Genre)
                }
            })
        }
    })
  
    let trailerUrl = 'https://youtube.googleapis.com/youtube/v3/search?q='+localStorage.getItem('search')+'%20movie%20trailer&maxResults=20&part=snippet&type=video&key=AIzaSyAOhw0g_HG6u1sGbR9QUsFNACC8uTIPQ0Q'
    fetch(trailerUrl)
    .then(function (response) {
        return response.json()})
    .then(function(data){
        for(let i = 0; i < trailerDisplay.length; i++){
            let requestedTrailer = 'https://www.youtube.com/embed/'+data.items[i].id.videoId
            $(trailerDisplay[i]).attr('src', requestedTrailer)
        }        
    })

}

function saveKeys(event){
    let keyChain = JSON.parse(localStorage.getItem('keyChain'))
    let cardEl = $(this).parent()
    let favSaved = []
    if(keyChain.includes(cardEl.children('.movieTitle').text())){

    }else{
        keyChain.push(cardEl.children('.movieTitle').text())
        favSaved.push(cardEl.children('.posterDisplay').attr('src'))
        favSaved.push(cardEl.children('.movieTitle').text())
        favSaved.push(cardEl.children('.movieSynopsis').text())
        favSaved.push(cardEl.children('.movieCat').text())
    }
    localStorage.setItem('keyChain', JSON.stringify(keyChain))
    localStorage.setItem(cardEl.children('.movieTitle').text(), JSON.stringify(favSaved))
}

movieCard.on('click', '.saveBtn', saveKeys)
searchMovie()