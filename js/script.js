window.onload = function() {
  ShowTable();
};

var idx = 0;

function CycleImages(img) {
    idx = (idx + 1) % 5;
    var next_img = "../img/doggo" + idx + ".jpg";
    console.log("Cuurent -> " + img)
    console.log("Next -> " + next_img)
    document.getElementById("carousel").src = next_img;
}

function PushDataToTable(event) {
    let table_entry = {
        name: "",
        skill: "",
        expertise: ""
    };
    table_entry.name = document.getElementById("name").value;
    table_entry.skill = document.getElementById("skill").value;
    table_entry.expertise = document.getElementById("expertise").value;

    document.getElementById("skills").reset();

    let curr_data_string = localStorage.getItem("table-data") || "[]";
    let curr_data = JSON.parse(curr_data_string);

    curr_data.push(table_entry);

    let new_data_string = JSON.stringify(curr_data);
    localStorage.setItem("table-data", new_data_string);

    currentTable = document.getElementById("skills-table");
    currentTable.innerHTML = "";

    curr_data.forEach((element) => {
        currentTable.innerHTML += `<tr><td>${element.name}</td><td>${element.skill}</td><td>${element.expertise}</td>`;
    });
    event.preventDefault();
}

function ShowTable() {
    let curr_data_string = localStorage.getItem("table-data") || "[]";
    let curr_data = JSON.parse(curr_data_string);
    currentTable = document.getElementById("skills-table");
    currentTable.innerHTML = "";
    curr_data.forEach((element) => {
        currentTable.innerHTML += `<tr><td>${element.name}</td><td>${element.skill}</td><td>${element.expertise}</td>`;
    });
}

function navChange(id) {
  document.getElementById(id).style.color = "#8080f8";
  document.getElementById(id).style.transition = "color 7 50ms ease";
}

function navRevert(id) {
  document.getElementById(id).style.color = "#e2e8f0";
  document.getElementById(id).style.transition = "color 750ms ease";
}

// $(document).ready(
//     function() {
//         $(".el a").hover(function() {
//             $(this).css("color", "#8080f8");
//         }, function() {
//             $(this).css("color", "#e2e8f0");
//         });
//     });


var nav_links = document.getElementsByClassName("navigation-link");

var hoverLink = function() {
    this.style.color = "#8fbcbb";
}

var hoverOut = function() {
    this.style.color = "grey";
}
for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].addEventListener('mouseover', hoverLink);
}

for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].addEventListener('mouseout', hoverOut);
}
document.getElementById("nav-bar").style.position = "fixed";
document.getElementById("nav-bar").style.top = "0";