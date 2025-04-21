"use strict";

//skapa variabler för att lägga till jobb samt ansluta till API

let url = "http://127.0.0.1:3000/api/jobs";
let submitBtnEl = document.querySelector("#submitBtn");


//skapa händelsehanterare för att lägga till jobb
submitBtnEl.addEventListener("click", addJob);


async function addJob() {
    let title = document.querySelector("#title").value;
    let workplace = document.querySelector("#workplace").value;
    let employer = document.querySelector("#employer").value;
    let startdate = document.querySelector("#startdate").value;
    let enddate = document.querySelector("#enddate").value;
    let description = document.querySelector("#description").value;
    let errorSpaceEl = document.querySelector("#errorSpace");

    if(title===""||workplace===""||employer===""||startdate===""||enddate===""||description==="")
        errorSpaceEl.innerHTML= '<p>Fyll i alla textfält!</p>';
    
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
