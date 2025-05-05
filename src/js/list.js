"use strict";

let url = "http://127.0.0.1:3000/api/jobs";

//starta funktion för att visa jobb när fönstret öppnas

window.onload = () => {
    getJobs();
}
//Skapa funktion för att ta bort jobb

async function deleteJob(id) {


    return fetch("http://127.0.0.1:3000/api/jobs/" + id, {
        method: 'DELETE',
    }).then(response => response.json())
        .then(window.location.reload());

}

//funktion för att hämta jobb 

async function getJobs() {
    const response = await fetch(url);
    const jobs = await response.json();

    console.log(jobs);
    showJobs(jobs);
}

//funktion för att skriva ut jobb till DOM
async function showJobs(jobs) {
    const jobListEl = document.querySelector("#jobList");
    jobListEl.innerHTML = "";
    if (jobListEl) {
        jobs.forEach(job => {
            const article = document.createElement("article");
            article.innerHTML += `<h3>${job.title} på ${job.workplace}</h3><p>Arbetsgivare: ${job.employer}.<br>
        Startdatum: ${job.startdate}. Slutdatum: ${job.enddate}. <br>Beskrivning: ${job.description}</p>`;
            const deleteBtn = document.createElement("input");
            deleteBtn.type = "button";
            deleteBtn.className = "deleteBtn";
            deleteBtn.value = "Ta bort jobb";
            deleteBtn.addEventListener("click", () => deleteJob(job.id));

            article.appendChild(deleteBtn);
            jobListEl.appendChild(article);
        })
    }
}



