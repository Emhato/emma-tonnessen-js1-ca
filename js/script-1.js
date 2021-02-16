// // Api info: https://docs.trefle.io/docs/guides/getting-started/

// // Botanics token: CWjAkNFJA0A2aMCvqHZh5FXHPyzn_ghmbIIc84-fgaA

const url = "https://trefle.io/api/v1/plants?token=CWjAkNFJA0A2aMCvqHZh5FXHPyzn_ghmbIIc84-fgaA";

const cors = "https://noroffcors.herokuapp.com/";

const corsFix = cors + url;

const apiContainer = document.querySelector(".api-container");

async function getArchive() {
    try {
        const response = await fetch(corsFix);

        const data = await response.json();

        console.log(data);

        const facts = data.data;

        apiContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {

            if (i === 4) {
                break;
            }

            apiContainer.innerHTML += `<a href="details.html&filter[scientific_name]=${facts[i].scientific_name}" class="result"><h2>${facts[i].common_name}</h2>
                                        <p>(${facts[i].scientific_name})</p>
                                        <p>In the ${facts[i].family_common_name}</p>
                                        <p>(${facts[i].family})</p>
                                        <p>(${facts[i].links.plant})</p>
                                        <p>(${facts[i].slug})</p></a>`;
        }
    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        apiContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getArchive();
