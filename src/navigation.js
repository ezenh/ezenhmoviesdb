window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)


function navigator() {
if (location.hash.startsWith('#trends')) {
    trendsPage()
    }
if (location.hash.startsWith('#categories')) {
    categoriesPage()
    }
if (location.hash.startsWith('#popular')) {
    popularPages()
    }
if (location.hash.startsWith('#upcomming')) {
    upcommingPage()
    }
if (location.hash.startsWith('#search')) {
    searchPage()
    }
if (location.hash.startsWith('#home')) {
    homePage()
    }
}

function homePage(){
    console.log('Estas en Home!')
    }

let pageNumber = 1
async function trendsPage(){
    console.log('Estás en Trends!')

    let windowOption = document.getElementById('navigation--container')
        windowOption.style.display = 'flex'
        windowOption.style.height = String(homePageDisplay.offsetHeight + 'px')
        console.log(homePageDisplay.offsetHeight)
    let windowTitle = document.getElementById('navigation-title')
        windowTitle.innerText = 'Trends'
    let navigationContent = document.getElementById('navigation-content')

    let quitWindow = document.getElementById('quitWindow')
        quitWindow.addEventListener('click', function() {
            window.location.hash = '#home';
            windowOption.style.display = 'none'
        })
    
    let movies = ''
    let pages = ''

    if(pageNumber==1) {
        loadContent()
        loadPages()
    }
    let forwardPageButton = document.getElementById('forward')
        forwardPageButton.addEventListener('click', function backPage() {
            if(pageNumber < pages) {
                console.log('una mas')
                pageNumber = pageNumber + 1
                loadContent()
                }
    })
    let backPageButton = document.getElementById('back')
        backPageButton.addEventListener('click', function backPage() {
        if(pageNumber > 1) {
            console.log('una menos')
                pageNumber = pageNumber - 1
                loadContent()
                }
    })
    async function loadContent() {
        const response = await API_URL(trends_URL, {params:{page: String(pageNumber)}})
        movies = response.data.results
        pages = response.data.total_pages
    let moviesBody = ''
    movies.forEach(movie => {
        moviesBody +=
        `<article id= '${movie.id}'>
                <img alt='${movie.title}' src='https://image.tmdb.org/t/p/w300${movie.poster_path}'>
                <p>${movie.title}</p>
        </article>`
        })
    navigationContent.innerHTML = moviesBody
    if(pageNumber == 1) {
        loadPages()
    }
    }

    async function loadPages() {
    let navigationPages = document.getElementById('pages')


    for (let i = 1; i <= pages; i++) {
        if(i == pages) {
            let pageNumberLink = document.createElement('a')
                navigationPages.appendChild(pageNumberLink)
                pageNumberLink.className = 'pageNumberLink'
                pageNumberLink.id = 'page' + i
                pageNumberLink.innerText = i
                pageNumberLink.addEventListener('click', function goToPage(event) {
                    console.log(event.target.innerText)
                    pageNumber = event.target.innerText
                    loadContent()
                })
        }else{
            let pageNumberLink = document.createElement('a')
                navigationPages.appendChild(pageNumberLink)
                pageNumberLink.className = 'pageNumberLink'
                pageNumberLink.id = 'page' + i
                pageNumberLink.innerText = i
                pageNumberLink.addEventListener('click', function goToPage(event) {
                    console.log(event.target.innerText)
                    pageNumber = event.target.innerText
                    loadContent()
                })
            }
    }}
    }

function categoriesPage(){
    console.log('Estás en Categorias!')
    }

function popularPages(){
    console.log('Estás en Populares!')
    }

function upcommingPage(){
    console.log('Estás en Próximos Estrenos!')
    }

function searchPage(){
    console.log('Estás en Búsqueda!')
    }