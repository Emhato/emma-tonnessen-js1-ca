const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const nameParam = params.get("filter[scientific_name]");

console.log(nameParam);



const url = "https://trefle.io/api/v1/plants?token=CWjAkNFJA0A2aMCvqHZh5FXHPyzn_ghmbIIc84-fgaA&filter[scientific_name]=" + nameParam;

const cors = "https://noroffcors.herokuapp.com/";

const corsFix = cors + url;

const plantContainer = document.querySelector(".plant-container");
const title = document.querySelector("title")

async function getPlant() {
    try {
        const response = await fetch(corsFix);

        const data = await response.json();

        console.log(data);

        const facts = data.data;

        title.innerHTML = `${facts[0].common_name}`;

        plantContainer.innerHTML = "";

        plantContainer.innerHTML = `<div class="results">
                                    <h1>${facts[0].common_name}</h1>
                                    <div class="details-image"
                                        style="background-image: url('${facts[0].image_url}')"></div>
                                    <p>${facts[0].common_name} or ${facts[0].scientific_name} belongs to the ${facts[0].family_common_name} (${facts[0].family}).</p>
                                    </div>`;

    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        plantContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getPlant();