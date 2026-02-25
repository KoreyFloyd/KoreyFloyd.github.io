let log = [];

let button = document.getElementById("addBtn");
let nameInput = document.getElementById("nameInput");
let distanceInput = document.getElementById("distanceInput");
let output = document.getElementById("output");

button.addEventListener("click", function() {

    let name = nameInput.value.trim();
    let distance = Number(distanceInput.value);

    if (name !=="" && distance > 0 && !Number.isNaN(distance)){
    log.push({ name: name, distance: distance });

    output.innerHTML = "";
    
    for (let item of log) {
        let li = document.createElement("li");
        li.textContent = item.name + " - " + item.distance;
        output.appendChild(li);
    }
}
});