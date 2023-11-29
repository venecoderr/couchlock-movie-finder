let userInput = $('#userSearch')
let searchForm = $('#searchForm')
let favBtn = $('#favBtn')
let exportInput = ''

function goToResults(event){
    event.preventDefault()
    localStorage.setItem('search', userInput.val() )
    window.location = ('./movies.html')
}

function goToFavorites(event){
    event.preventDefault()
    window.location = ('./favorites.html')
}


searchForm.on('submit', goToResults)
favBtn.on('click', goToFavorites)