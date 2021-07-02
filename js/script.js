document.getElementById("nav-bar").style.position = "fixed";
document.getElementById("nav-bar").style.top = "0px";

var idx = 0;

function CycleImages() {
    idx = (idx + 1) % 5;
    document.getElementById("carousel").src = "../img/doggo" + idx + ".jpg";
}

function PushDataToTable(event) {
    let row_data = {
        name: "",
        skill: "",
        expertise: ""
    };

    row_data.expertise = document.getElementById("expertise").value;

    var expertise_flag = (row_data.expertise == "Choose an Option");

    if(expertise_flag == true) {
        alert("Select the Expertise Level!")
        return false;
    }

    row_data.name = document.getElementById("name").value;
    row_data.skill = document.getElementById("skill").value;

    document.getElementById("skills").reset();

    let local_data = JSON.parse(localStorage.getItem("table-data") || "[]");

    local_data.push(row_data);

    localStorage.setItem("table-data", JSON.stringify(local_data));

    local_table = document.getElementById("skills-table");
    local_table.innerHTML = "";

    local_data.forEach((record) => {
        local_table.innerHTML += `<tr><td>${record.name}</td><td>${record.skill}</td><td>${record.expertise}</td>`;
    });

    event.preventDefault();
}


function ShowTable() {
    local_table = document.getElementById("skills-table");
    local_table.innerHTML = "";

    let local_data = JSON.parse(localStorage.getItem("table-data") || "[]");
    local_data.forEach((record) => {
        local_table.innerHTML += `<tr><td>${record.name}</td><td>${record.skill}</td><td>${record.expertise}</td>`;
    });
}

window.onload = function() {
    ShowTable();
};

var navbar_menu = document.getElementsByClassName("navigation-links");

var howerTowards = function() {
    this.style.color = "#8080F8";
    this.style.transition = "color 7 500ms ease";
}

var howerAway = function() {
    this.style.color = "#E2E8F0";
    this.style.transition = "color 7 500ms ease";
}

for (var i = 0; i < navbar_menu.length; i++) {
    navbar_menu[i].addEventListener('mouseover', howerTowards);
}

for (var i = 0; i < navbar_menu.length; i++) {
    navbar_menu[i].addEventListener('mouseout', howerAway);
}
