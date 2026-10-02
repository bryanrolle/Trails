/*
    Author: Bryan Rolle
    Date: 10/1/2026
    Purpose: Flow-Control
*/

/* =========================================
   GREENWAY PARK TRAIL DATA
========================================= */

const trails = [
    { name: "River Walk", difficulty: "low", time: 20 },
    { name: "Forest Loop", difficulty: "medium", time: 45 },
    { name: "Hill Summit Trail", difficulty: "high", time: 90 },
    { name: "Lake Side Path", difficulty: "low", time: 30 },
    { name: "Rock Ridge Trail", difficulty: "high", time: 75 },
    { name: "Sunset Trail", difficulty: "medium", time: 45 },
    { name: "Eagle Peak Trail", difficulty: "high", time: 90},
    { name: "BRolle Mountain Trail", difficulty: "high", time: 75 }
];

/* =========================================
   TODO: DISPLAY TRAILS VIA LOOP
========================================= */
const trailList = document.getElementById("trails");

for (let trail of trails) {

    const article = document.createElement("article");
    article.className = "card";

    article.innerHTML = `
        <h3>${trail.name}</h3>
        <p>Difficulty: ${trail.difficulty}</p>
        <p>Average Time: ${trail.time}</p>
    `;

    trailList.appendChild(article);
}



/* =========================================
   TODO: FORM LOGIC
========================================= */
const form = document.getElementById("trail-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's selections
    const pets = document.querySelector('input[name="pets"]:checked').value;
    const experience = document.getElementById("experience").value;

    let recommendation = "";

    // Determine trail recommendation
    if (pets === "yes" && experience === "low") {
        recommendation = "River Walk";
    }
    else if (pets === "yes" && 
            (experience === "medium" || experience === "high")) {
        recommendation = "Forest Loop";
    }
    else if (pets === "no" && experience === "low") {
        recommendation = "Lake Side Path";
    }
    else if (pets === "no" && experience === "medium") {
        recommendation = "Forest Loop";
    }
    else if (pets === "no" && experience === "high") {
        recommendation = "Rock Ridge Trail";
    }
    else {
        recommendation = "River Walk";
    }

    // Display recommendation
    document.getElementById("recommendation").textContent =
        "Recommended Trail: " + recommendation;
});