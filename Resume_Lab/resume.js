

displayPosition("James Ward", "Full Stack Developer", "AT Thru Hiker/Student")

let interests = ["Technology", "Backpacking", "Skateboarding", "Kayaking", "Video Games"];
console.log("My Interests:");
for (let interest of interests) {
    console.log("* " + interest);
}

let prevExp = ["Built an online multiplayer 3D Pokemon fan game in Unity.",
                "Two years towards a Computer Science degree at JSCC.",
                "Started web development company called DevFraccas."];
console.log("My Previous Experience");
for (let exp of prevExp) {
    console.log("* " + exp);
}

let skills = ["Java", "C#", "PHP", "MySQL", "HTML", "Long Distance Hiking"];
console.log("My Skills:");
for (let skill of skills) {
    var isCool = false;
    if (skill.includes("Hiking")) isCool = true;
    displaySkill(skill, isCool);
}


function displayPosition(cName, jobTitle, description) {
    console.log("Name: " + cName.toUpperCase());
    console.log("Career: " + jobTitle);
    console.log("Description: " + description);
}

function displaySkill(skillName, isCool) {
    if (isCool) {
        console.log("* BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
}