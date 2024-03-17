window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)


function navigator() {
console.log({location})

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
else{
    homepage()}
}

function homepage(){
    console.log('Estas en Home!')
    }

function trendsPage(){
    console.log('Estás en Trends!')
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