const init = () => {
  
//}

//document.addEventListener('DOMContentLoaded', init);

const inputForm = document.querySelector('form');

//adding an eventListener
inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    //console.log(event);
    const input = document.querySelector('input#searchByID');
  console.log(input.value);

  //fetching data 

    fetch('http://localhost:3000/movies')
//getting response
    .then(response => response.json())
    //console logging the data
    .then(data => {
      console.log(data);

        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
});
});
}
document.addEventListener('DOMContentLoaded', init);