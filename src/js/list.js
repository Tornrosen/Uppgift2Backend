"use strict";

let url = "http://127.0.0.1:3000/api/jobs";

//starta funktion för att visa jobb när fönstret öppnas

window.onload = () => {
    getJobs();
}

//funktion för att hämta jobb 

async function getJobs() {
    const response = await fetch(url);
    const jobs= await response.json();

    console.log(jobs);
    showJobs(jobs);
}

//funktion för att skriva ut jobb till DOM
function showJobs(jobs) {
    const jobListEl = document.querySelector("#jobList");
    jobListEl.innerHTML = "";
    if(jobListEl) {
        jobs.forEach(job => {
        jobListEl.innerHTML += `<article><h3>${job.title} på ${job.workplace}</h3><p>Arbetsgivare: ${job.employer}.
        Startdatum: ${job.startdate}. Slutdatum: ${job.enddate}. <br>Beskrivning: ${job.description}</p>
        <input type="button" class="deleteBtn" value="Ta bort jobb"></article>`;
        let id= job.id;
        let deleteBtnEl = document.querySelector(".deleteBtn");
        deleteBtnEl.addEventListener("click", ()=> deleteJob(id));
    })
}
}

//Skapa funktion för att ta bort jobb


 async function deleteJob(id) {

    return fetch("http://127.0.0.1:3000/api/jobs/:"+id, {
        method: 'DELETE',
    }).then(response => response.json())
}
