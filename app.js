document.querySelector('.get-jokes').addEventListener('click', loadJoke)

function loadJoke() {
    // Create a xhr object
    const xhr = new XMLHttpRequest()
    

    // Open the xhr
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true)  //GET mean read the url

    // 
    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);
            const response = JSON.parse(this.responseText);
            document.querySelector('.output').innerHTML = `<ul><li>${response.value}</li></ul>`;
        }
    }

    // On Progress
    // On Error

    xhr.send();
}