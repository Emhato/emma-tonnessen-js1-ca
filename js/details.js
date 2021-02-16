const plantContainer = document.querySelector(".plant-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const scientificName = params.get("scientific_name")

console.log(scientificName)


// console.log(id);

// const urlDet = "https://trefle.io/api/v1/plants?token=CWjAkNFJA0A2aMCvqHZh5FXHPyzn_ghmbIIc84-fgaA&filter[common_name]=quercus%20rotundifolia";

// const cors2 = "https://noroffcors.herokuapp.com/";

// const corsFix2 = cors2 + urlDet;

// console.log(urlDet);

// async function plantDetails() {
//     try {
//         const response = await fetch(corsFix2);
//         const data = await response.json();

//         console.log(data);
        

//     }
//     catch(error) {
//         console.log(error);
//         console.log("An error occurred");
//         plantContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
//     }
// }

// plantDetails();

// const plantContainer = document.querySelector(".plant-container");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const link = params.get("links.plant")

// console.log(link)

// const urlDet = "https://trefle.io/api/v1/plants/" + slug;

// const urlContinued = "?token=CWjAkNFJA0A2aMCvqHZh5FXHPyzn_ghmbIIc84-fgaA";

// const fullUrl = urlDet + urlContinued;

// const cors2 = "https://noroffcors.herokuapp.com/";

// const corsFix2 = cors + fullUrl;



// async function getArchive() {
//     try {
//         const response = await fetch(corsFix2);

//         const data = await response.json();

//         console.log(data);

//         // const facts = data.data;

//         plantContainer.innerHTML = "";

//         // for (let i = 0; i < facts.length; i++) {

//         //     if (i === 4) {
//         //         break;
//         //     }

//         //     plantContainer.innerHTML += `<a href="details.html?id=${facts[i].id}" class="result"><h2>${facts[i].common_name}</h2>
//         //                                 <p>(${facts[i].scientific_name})</p>
//         //                                 <p>In the ${facts[i].family_common_name}</p>
//         //                                 <p>(${facts[i].family})</p></a>`;
//         // }
//     } catch (error) {
//         console.log(error);
//         console.log("An error occurred");
//         plantContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
//     }

// }

// getArchive();