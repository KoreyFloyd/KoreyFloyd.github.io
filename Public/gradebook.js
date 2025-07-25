function fetchGradeData() {
    console.log("Fetching grade data");
    let xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";
    xhr.onreadystatechange = function(){
        let results;
        if(xhr.readyState === xhr.DONE){
            if(xhr.status !== 200){
                console.error(`Could not get grades. 
                    Status: ${xhr.ststus}`);
            }
            populateGradebook(JSON.parse(xhr.responseText));
        }
    }.bind(this);
    xhr.open("get", apiRoute, true);
    xhr.send();
}

function populateGradebook(data){
    console.log("Populating gradebook with data", data);
    let tableElm = document.getElementById("gradebook");
        data.forEach(function(assignments){
            let row = document.createElement("tr");
            let colums = [];
            colums.name = document.createElement('td');
            colums.name.appendChild(
                document.createTextNode(assignments.last_name + "," + assignments.first_name)
            );
            colums.grade = document.createElement('td');
            colums.grade.appendChild(
                document.createTextNode(assignments.total_grade)
            );
            row.appendChild(colums.name);
            row.appendChild(colums.grade);
            tableElm.appendChild(row);
        })
            
        };
const gradeData = fetchGradeData();
populateGradebook(gradeData)