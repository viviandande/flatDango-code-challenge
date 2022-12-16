function renderAllMovies(data){
    const filmSection = document.querySelector('#films');
    const filmList = document.createElement('li');
    filmList.setAttribute('class', 'film item');
    filmList.textContent = data.title;
    filmSection.appendChild(filmList);
    filmList.addEventListener('click',()=>{
      firstMovieDetails(data)
    })
  }


  function firstMovieDetails(data){
    // console.log(data)
    const poster = document.querySelector('div.four.wide.column img#poster');
    poster.src = data.poster;

    // title
    const title = document.querySelector('#title')
    title.textContent = data.title;

    // runtime
    const runtime = document.querySelector('#runtime')
    runtime.textContent = data.runtime;

    // descriptiona
    const description = document.querySelector('#film-info')
    description.textContent = data.description;

    // showtime
    const showtime = document.querySelector('#showtime')
    showtime.textContent = data.showtime

    // remainder tickets
    const remainingTickets = document.querySelector('#ticket-num')
    remainingTickets.textContent = data.capacity - data.tickets_sold
   const button =document.getElementById("buy-ticket");
      button.addEventListener("click", (event) =>{
          if(remainingTickets.textContent > 0){
              remainingTickets.textContent -= 1
          if(remainingTickets.textContent == 0){
              button.textContent = "sold out";
              button.classList.remove("orange")
          }}

  })}

  function fetchFirstMovieData(){
    return fetch('http://localhost:3000/films/1')
    .then(res => res.json())
    .then(data => firstMovieDetails(data))
  }
  function fetchAllMovies(){
    return fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data => data.forEach(item => renderAllMovies(item)))
  }

  document.addEventListener('DOMContentLoaded',() => {
    fetchFirstMovieData()
    fetchAllMovies()
  })
