document.addEventListener("DOMContentLoaded", ()=>{
    fetchFirstMovieContent()
    fetchAllMoviesContent()

})

function fetchFirstMovieContent(){
    return fetch("http://localhost:3000/films/1")
    .then(resp => resp.json())
    .then(data => firstMovieContent(data))
}


function firstMovieContent(data){
    const poster = document.getElementById("poster");
    poster.src = data.poster;
    const title = document.getElementById("title");
    title.textContent = data.title;
    const runtime = document.getElementById("runtime");
    runtime.textContent = data.runtime;
    const showtime = document.getElementById("showtime");
    showtime.textContent = data.showtime;
    const description = document.getElementById("film-info");
    description.textContent = data.description;
    const remainingTickets = document.getElementById("ticket-num")
    remainingTickets.textContent = data.capacity - data.tickets_sold;
    const button =document.getElementById("buy-ticket");
    button.addEventListener("click", (event) =>{
        if(remainingTickets.textContent > 0){
            remainingTickets.textContent -= 1
        if(remainingTickets.textContent == 0){
            button.textContent = "sold out";
            button.classList.remove("orange")
        }}
    })

}
function fetchAllMoviesContent(data){
    return fetch("http://localhost:3000/films")
    .then(resp => resp.json())
    .then(data =>data.forEach(data => fetchAllMoviesList(data)))

}
function fetchAllMoviesList(data){
    const filmSection = document.getElementById("films");
    const filmList = document.createElement("li");
    filmList.setAttribute("class", "film item");
    filmList.textContent = data.title;
    filmSection.appendChild(filmList);
    document.addEventListener("click", () =>{
        let title = document.getElementById("title");
        title.textContent = data.title
    })

}