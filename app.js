// from data.js
// const tableData = data;
const tabledata = data

console.log(tabledata);

var tbody = d3.select("tbody");
tabledata.forEach(function(Info){
    console.log(Info)
    var row = tbody.append("tr");

    Object.entries(Info).forEach(function([x,y]){
        console.log(`x is ${x} and y is ${y}`)
        row.append("td").text(y)
    })

});
var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runFiilterTable);
form.on("submit", runFiilterTable);

function runFiilterTable(){
    
    tbody.html("");
    d3.event.preventDefault();

    var DateElement = d3.select("#datetime");
    var InputValue = DateElement.property("value");

    console.log(InputValue);
    console.log(tabledata);
    
    var filteredData = tabledata.filter(tabledata => tabledata.datetime === InputValue);
    console.log(filteredData);
    
    
    filteredData.forEach(function(filtered){
        console.log(filtered)
        row = tbody.append("tr");
        console.log(row)
        console.log("check")
        Object.entries(filtered).forEach(function([a,b]){
             console.log(`a is ${a} and b is ${b}`)
             row.append("td").text(b)
         })
        
    })
    


    
};


