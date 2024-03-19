let lang = 'es'
let homePageDisplay = document.getElementById('body')
console.log()
// let homeOption = document.getElementById('homeOption')
//       homeOption.addEventListener('click', completeWindow)
let trendsOption = document.getElementById('trendsOption')
      // trendingOption.addEventListener('click', completeWindow)
let categoriesOption = document.getElementById('categoriesOption')
      // categoriesOption.addEventListener('click', completeWindow)
let popularOption = document.getElementById('popularOption')
      // popularOption.addEventListener('click', completeWindow)
let upcomingOption = document.getElementById('upcomingOption')
      // upcomingOption.addEventListener('click', completeWindow)
let searchOption = document.getElementById('searchOption')
      // searchOption.addEventListener('click', completeWindow)

const API_URL = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': API_KEY,
            },
      params: {
            language: lang,
            // 'api_key': API_KEY
            }
})
let configuration_URL = 'configuration'
let trends_URL = '/trending/movie/day'
let genres_URL = '/genre/movie/list'
let popular_URL = '/movie/popular'
let upcomming_URL = '/movie/upcoming'

async function getConfiguration () {
      const response = await API_URL(configuration_URL)
      // console.log(response)
}
getConfiguration()

async function getMainMoviesPreview() {
      const response = await API_URL(trends_URL)
      let movies = response.data.results
      // console.log(movies[0])
      // console.log(typeof response)

      let mainMovies = document.getElementById('main-movies--container')
      let body = ''
      for(let i = 0; i < 5; i++) {
            body +=
            `<article id= '${movies[i].id}' class='main-movie-article' style= 'background-image: url("https://image.tmdb.org/t/p/original${movies[i].backdrop_path}")'>
                  <div class='main-movie'>
                        <div>Movie info</div>
                        <h2>${movies[i].title}</h2>
                        <p>${movies[i].overview}</p>
                        <div class="main-movie-buttons">
                              <button class="main-movie-trailer"><img src="icons/play.png" alt="">TRAILER</button>
                              <button class="main-movie-details"><img src="icons/info.png" alt="">DETALLES</button>
                        </div>
                  </div>
            </article>`
            }
      mainMovies.innerHTML = body

      count = 0
      direction = 'left'
      
      dot1 = document.getElementById('dot1')
      dot2 = document.getElementById('dot2')
      dot3 = document.getElementById('dot3')
      dot4 = document.getElementById('dot4')
      dot5 = document.getElementById('dot5')
      dot1.style.backgroundColor = 'white'

      setInterval(function changePic(){
            if(count == 0) {
                  direction = 'left'
                  }
            if(count == 4) {
                  direction = 'right'
                  }
            if(direction == 'left') {
                  mainMovies.scrollBy({
                        top: 0,
                        left:300,
                        behavior:'smooth'
                  })
                  count++
                  }
            if(direction == 'right') {
                  mainMovies.scrollBy({
                        top: 0,
                        left:-300,
                        behavior:'smooth'
                  })
                  count--
                  }
                  // console.log(count)
            if(count == 0) {
                  dot1.style.backgroundColor = 'white'
                  dot2.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot3.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot4.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot5.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  }
            if(count == 1) {
                  dot1.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot2.style.backgroundColor = 'white'
                  dot3.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot4.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot5.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  }
            if(count == 2) {
                  dot1.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot2.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot3.style.backgroundColor = 'white'
                  dot4.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot5.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  }
            if(count == 3) {
                  dot1.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot2.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot3.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot4.style.backgroundColor = 'white'
                  dot5.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  }
            if(count == 4 || count == 5) {
                  dot1.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot2.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot3.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot4.style.backgroundColor = 'rgb(128,128,128, 0.3)'
                  dot5.style.backgroundColor = 'white'
                  }
      },2000)
}
getMainMoviesPreview()

async function getTrendingMoviesPreview() {
      const response = await API_URL(trends_URL)
      let movies = response.data.results

      let trendingContainer = document.getElementById('trending--container')
      let body = ''
      for(let i = 0; i < 10; i++) {
            body +=
            `<article id= '${movies[i].id}'>
                  <img alt='${movies[i].title}' src='https://image.tmdb.org/t/p/w300${movies[i].poster_path}'>
                  <p>${movies[i].title}</p>
            </article>`
            }
      trendingContainer.innerHTML = body
}
getTrendingMoviesPreview()

async function getGenresMoviesPreview () {
      const response = await API_URL(genres_URL)
      const genres = response.data.genres
      let categories = document.getElementById('categories--container')
      let body = ''
      genres.forEach(genre => {
            body +=
            `<a id='${genre.id}' src='' class='genre-tag'>${genre.name}</a>`
      });
      categories.innerHTML = body
}
getGenresMoviesPreview()

async function getPopularMoviesPreview() {
      const response = await API_URL (popular_URL)
      // console.log(response)

      let movies = response.data.results
      let popularContainer = document.getElementById('popular--container')
      let body = ''
      for(let i = 0; i < 10; i++) {
            body +=
            `<article id= '${movies[i].id}'>
                  <img alt='${movies[i].title}' src='https://image.tmdb.org/t/p/w300${movies[i].poster_path}'>
                  <p>${movies[i].title}</p>
            </article>`
            }
      popularContainer.innerHTML = body
}
getPopularMoviesPreview()

async function getUpcomingMoviesPreview() {
      const response = await API_URL(upcomming_URL);
      const movies = response.data.results
      // console.log(movies)

      let upcoming = document.getElementById('upcoming--container')
      let body = ''
      for(let i = 0; i < 10; i++) {
            body +=
            `<article id='${movies[i].id}'>
            <img alt='${movies[i].title}' src='https://image.tmdb.org/t/p/w300${movies[i].poster_path}'>
            <p>${movies[i].title}</p>
            </article>`
            }
      upcoming.innerHTML = body
}
getUpcomingMoviesPreview()

// function completeWindow(event) {
//       let quitWindow = document.getElementById('quitWindow')
//             quitWindow.addEventListener('click', function() {
//                   window.location.hash = '#home';
//                   windowOption.style.display = 'none'
//                   })
//       let windowOption = document.getElementById('navigation--container')
//             windowOption.style.display = 'flex'

//       // console.log(event.target)
//       // console.log(event.target.id)
//       // console.log(location.hash)
// }