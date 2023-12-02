let posterDisplay = $('.posterDisplay')
let movieCard = $('.sec-movie')
let movieTitle = $('.movieTitle')
let movieYear = $('.movieYear')
let movieSynopsis = $('.movieSynopsis')
let movieCat = $('.movieCat')
let trailerDisplay = $('trailerDisplay')
let saveBtn = $('#saveBtn')


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
                for(let i = 0; i < movieCard.length; i++){
                    $(movieSynopsis[i]).text(data.Plot)
                    $(movieCat[i]).text(data.Genre)
                    // $(movieYear[i]).text(data.Search[i].Year)
                }
                console.log(data)
            })
        }
        
        console.log(data)
    })


    // let trailerUrl = 'https://youtube.googleapis.com/youtube/v3/videos ?q='+localStorage.getItem('search')+'%20movie&part=snippet&maxResults=3&type=video&key=AIzaSyAOhw0g_HG6u1sGbR9QUsFNACC8uTIPQ0Q'
    // fetch(trailerUrl)
    // .then(function (response) {
    //     return response.json()})
    // .then(function(data){
    //     console.log(data)
    //     for(let i = 0; i < movieCard.length; i++){
    //         let requestedTrailer = 'https://www.youtube.com/watch?v='+data.items[i].id[1]
    //         $(iFrames[i]).attr('src', requestedTrailer)
    //     }        
    //     //when we have the I frame ill use requestTrailer and attr to change iframe href
    // })

}

function saveCards(){
    for(let i = 0; i < movieCard.length; i++){
        let saveEntry = []
        let entryKey = 'saved' + i
        saveEntry.push($(posterDisplay[i]).text())
        saveEntry.push($(movieTitle[i]).text())
        saveEntry.push($(movieYear[i]).text())
        saveEntry.push($(movieSynopsis[i]).text())
        saveEntry.push($(movieCat[i]).text())
        saveEntry.shift()
        localStorage.setItem(entryKey, JSON.stringify(saveEntry))
    }
}


saveBtn.on('click', saveCards)
searchMovie()