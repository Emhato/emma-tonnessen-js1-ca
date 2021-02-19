const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const button = document.querySelector("button");
const message = document.querySelector(".message");

function formValidation(event) {
    event.preventDefault();

    if (lengthCheck(fullName.value, 4)) {
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

    if (emailValidation(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    console.log("hello");
}

form.addEventListener("submit", formValidation);

function messageValidation() {
    if ((lengthCheck(fullName.value, 4) === true) && (lengthCheck(subject.value, 9) === true) && (lengthCheck(adress.value, 24) === true) && (emailValidation(email.value) === true)) {
        message.innerHTML = "The form has been properly filled out and is ready to be submitted";
    } else {
        message.innerHTML = "";
    }
}

fullName.addEventListener("keyup", messageValidation);
subject.addEventListener("keyup", messageValidation);
adress.addEventListener("keyup", messageValidation);
email.addEventListener("keyup", messageValidation);

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