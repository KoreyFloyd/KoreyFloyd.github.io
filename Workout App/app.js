let workout = [];

let addEntry = document.getElementById("addBtn");
let nameInput = document.getElementById("nameInput");
let distanceInput = document.getElementById("distanceInput");
let units = document.getElementById("units");
let showFilter = document.getElementsByName("distance");

addEntry.addEventListener("click", function(){
    let name = nameInput.value.trim();
    let distance = Number(distanceInput.value);
    if (units.value === "meters"){
        distance = distance / 1609.344 
    }
    if (name !== "" && distance > 0 && !Number.isNaN(distance));
    workout.push({ name: name, distance: distance.toFixed(2), unit: "Miles"});

    output.innerHTML = "";

    for (let item of workout) {
        let li = document.createElement("li");
        li.textContent = item.name + " - " + item.distance + " Miles";
        output.appendChild(li);    
    }
});

getStats(addEntry, function() {
    
});


     





