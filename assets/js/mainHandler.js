let userInput = $('#userSearch')
let searchForm = $('#searchForm')
let keyChain = []

if(localStorage.getItem('keyChain') === null){
    keyChain.shift()
    localStorage.setItem('keyChain', JSON.stringify(keyChain))
}

function goToResults(event){
    event.preventDefault()
    localStorage.setItem('search', userInput.val() )
    window.location = ('./movies.html')
}

searchForm.on('submit', goToResults)