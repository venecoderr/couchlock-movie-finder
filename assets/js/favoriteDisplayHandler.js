let savedCardEl = '<div class="column is-3 card">'+
'<div class="card-image">'+
'<figure><img class="posterDisplay" src="#"></figure></div>'+
'<div class="card-content">'+
'<p class="heading movieCat"></p>'+
'<h1 class="movieTitle"></h1>'+
'<p class="movieSynopsis"></p></div></div>'
let savedDisplay = $('#savedDisplay')
let keys = JSON.parse(localStorage.getItem('keyChain'))


function displaySaves(){
    if(keys !== null){
        for(let i = 0; i < keys.length; i++){
            $(savedDisplay).append(savedCardEl)
        }
        let posterDisplay = $('.posterDisplay')
        let movieTitle = $('.movieTitle')
        let movieSynopsis = $('.movieSynopsis')
        let movieCat = $('.movieCat')
        for(let i = 0; i < keys.length; i++){
            let workingSave = JSON.parse(localStorage.getItem(keys[i]))
            $(posterDisplay[i]).attr('src', workingSave[0])
            $(movieTitle[i]).text(workingSave[1])
            $(movieSynopsis[i]).text(workingSave[2])
            $(movieCat[i]).text(workingSave[3])

        }
    }
}

displaySaves()