
let workout = [];

let button = document.getElementById("addBtn");
let nameInput = document.getElementById("nameInput");
let distanceInput = document.getElementById("distanceInput");
let unitInput = document.getElementById("units");
let showFilter = document.getElementsByName("distanceFilter");
console.log("radios found:", showFilter.length);
console.log("radio changed:", this.value);
console.log(showFilter);
for (let r of showFilter) console.log(r);


button.addEventListener("click", function(){
   let name = nameInput.value.trim()
   let rawDistance = Number(distanceInput.value)
   let unit = unitInput.value.trim()
   if (name !== "" && rawDistance > 0 && !Number.isNaN(rawDistance)){
    addEntry(name, rawDistance, unit)
    render(workout)
    const stats = getStats(workout)
    renderStats(stats)

   }  
});

for (let radio of showFilter){
    radio.addEventListener("change", function(){
        const selectedValue = this.value;

        if (selectedValue === "3_miles"){
            const filteredEntries = filtered(workout);
            render(filteredEntries);
            renderStats(getStats(filteredEntries));
        }else{
            render(workout);
            renderStats(getStats(workout))
        }
    });
    console.log("tag:", this.tagName, "type:", this.type, "value:", this.value);
}


function addEntry(name, distance, unit){
    let miles = distance
    if (unit === "meters"){
        miles = distance / 1609.344
    }
    workout.push({name: name, distance: distance, unit: unit, miles: miles}); 
}

function render(entries){
    output.innerHTML = "";

    for (let item of entries){
        let li = document.createElement("li")
        li.textContent = item.name + " - " + item.miles.toFixed(2);
        output.appendChild(li);
    }
}

function renderStats(stats){
    totalInfo.innerHTML = "";
    let li = document.createElement("li")
    li.textContent = `Entries:  ${stats.count}` + ` | Total Miles:  ${stats.totalMiles.toFixed(2)}` + ` | Average Miles: ${stats.avgMiles.toFixed(2)}`;
    totalInfo.appendChild(li)
    
}

function getStats(entries){
    const count = entries.length;
    const totalMiles = entries.reduce((sum, item)=>{
                return sum + item.miles;
                }, 0);
    let avgMiles = 0
    if (count === 0) {
        avgMiles = 0
    }else{avgMiles = totalMiles / count};
    return{count, totalMiles, avgMiles}
}

function filtered(item){
    const filterStats = item.filter(function(item){
        return item.miles > 3
    })
    return filterStats
};

    



     





