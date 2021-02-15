






// API info: https://www.songsterr.com/a/wa/api/

const url = "http://www.songsterr.com/a/ra/songs.json?pattern=beatles";

// const cors = "https://noroffcors.herokuapp.com/";

// const corsFix = cors + url;

const apiContainer = document.querySelector(".api-container");

async function getArchive() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        // facts = data.results

        // apiContainer.innerHTML = "";

        // for (let i = 0; i < facts.length; i++) {

        //     if (i === 8) {
        //         break;
        //     }

        //     apiContainer.innerHTML += `<div class="result"><p>Name: ${facts[i].name}</p>
        //     <p>Rating: ${facts[i].rating}</p>
        //     <p> Number of tagss: ${facts[i].tags.length}</div>`;
        // }

    } catch (error) {
        console.log(error)
        console.log("An error occurred");
        apiContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getArchive()