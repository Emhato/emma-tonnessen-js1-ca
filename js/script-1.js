


// // Api info: https://docs.trefle.io/docs/guides/getting-started/

// // Botanics token: CWjAkNFJA0A2aMCvqHZh5FXHPyzn_ghmbIIc84-fgaA

// const url = "https://trefle.io/api/v1/plants?token=CWjAkNFJA0A2aMCvqHZh5FXHPyzn_ghmbIIc84-fgaA";

// const cors = "https://noroffcors.herokuapp.com/";

// const corsFix = cors + url;

// const apiContainer = document.querySelector(".api-container");

// async function getArchive() {
//     try {
//         const response = await fetch(corsFix);

//         const data = await response.json();

//         console.log(data);

//         const facts = data.data;

//         apiContainer.innerHTML = "";

//         for (let i = 0; i < facts.length; i++) {

//             if (i === 4) {
//                 break;
//             }

//             apiContainer.innerHTML += `<a href="details.html?[scientific_name]=${facts[i].scientific_name}" class="result"><h2>${facts[i].common_name}</h2>
//                                         <p>(${facts[i].scientific_name})</p>
//                                         <p>In the ${facts[i].family_common_name}</p>
//                                         <p>(${facts[i].family})</p>
//                                         <p>(${facts[i].links.plant})</p>
//                                         <p>(${facts[i].slug})</p></a>`;
//         }
//     } catch (error) {
//         console.log(error);
//         console.log("An error occurred");
//         apiContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
//     }

// }

// getArchive();


// Form

const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const button = document.querySelector("button")

// Create a form with the following inputs and validation rules.
// Name - required
// Subject - must have a value with a minimum length of 10
// Email - must have a value and be formatted like an email address
// Address - must have a value with a minimum length of 25
// When the form on this page is submitted, write code to validate the input. If any of the inputs fail validation 
// display an error message for the relevant input.

function formValidation(event) {
    event.preventDefault();

    if (lengthCheck(fullName.value, 4) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (lengthCheck(subject.value, 9)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (lengthCheck(adress.value, 24)) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
    }

    if (emailValidation(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    console.log("hello");
}

form.addEventListener("submit", formValidation);


function emailValidation(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function lengthCheck(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}