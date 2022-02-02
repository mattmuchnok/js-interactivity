const message = document.querySelector("#message")

const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector("input")
    
    const movie = document.createElement("li")
    
    const movieTitle = document.createElement("span")
    movieTitle.addEventListener("click", crossOffMovie)
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click",deleteMovie)
    movie.appendChild(deleteBtn)
    
    const list = document.querySelector("ul")
    list.appendChild(movie)
    
    inputField.value = ""
}

// hoisting appears to work differently for arrow functions versus function declarations
// the following code can go above addMovie() when addMovie() is declared but NOT when an arrow function structure is used
document.querySelector("form").addEventListener("submit", addMovie)

// test code, from Michael D
// const addMovie = event => {   event.preventDefault();   const inputField = document.querySelector('input');   let movie = document.createElement('li');   let movieTitle = document.createElement('span');   movieTitle.textContent = inputField.value    movieTitle.addEventListener('click', crossOffMovie);    console.log(movieTitle);   movie.appendChild(movieTitle);    const deleteBtn = document.createElement('button');   deleteBtn.textContent = 'X'   deleteBtn.addEventListener('click', deleteMovie);   movie.appendChild(deleteBtn);    document.querySelector('ul').appendChild(movie);   inputField.value = ""; }

const deleteMovie = (event) => {
    event.target.parentNode.remove() 

    message.textContent = `${event.target.parentNode.firstChild.textContent} DELETED!`

    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle("checked")

    if (event.target.classList.contains("checked") === true) {
        message.textContent = `${event.target.textContent} WATCHED!`
    } else {
        message.textContent = `${event.target.textContent} ADDED BACK!`
    }

    revealMessage()
}

const revealMessage = () => {
    message.classList.remove("hide")

    setTimeout(()=>{
        message.classList.add("hide")
    },1000)
}