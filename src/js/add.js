"use strict";

//skapa variabler för att lägga till jobb, kolla input samt ansluta till API

let url = "http://127.0.0.1:3000/api/jobs";
let submitBtnEl = document.querySelector("#submitBtn");
let descriptionEl = document.querySelector("#description");
let errorSpaceEl = document.querySelector("#errorSpace");



//skapa händelsehanterare för att lägga till jobb och kolla input
submitBtnEl.addEventListener("click", addJob);
descriptionEl.addEventListener("keyup", checkInput);

//funktion för att kontrollera längd på input
function checkInput() {
    let title = document.querySelector("#title").value;
    let workplace = document.querySelector("#workplace").value;
    let employer = document.querySelector("#employer").value;
    let startdate = document.querySelector("#startdate").value;
    let enddate = document.querySelector("#enddate").value;
    let description = document.querySelector("#description").value;
    if (title.length < 1 || workplace.length < 1 || employer.length < 1 || startdate.length < 1 || enddate.length < 1 || description.length < 1) { errorSpaceEl.innerHTML = "Fyll i alla textfält!"; }
    else { errorSpaceEl.innerHTML = ''; }
}

//funktion för att lägga till jobb
async function addJob() {
    let title = document.querySelector("#title").value;
    let workplace = document.querySelector("#workplace").value;
    let employer = document.querySelector("#employer").value;
    let startdate = document.querySelector("#startdate").value;
    let enddate = document.querySelector("#enddate").value;
    let description = document.querySelector("#description").value;

    let job = {
        title: title,
        workplace: workplace,
        employer: employer,
        startdate: startdate,
        enddate: enddate,
        description: description
    }


    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
    })
    let data = await response.json();
    console.log(data);
}
