// Declare global variables
let numRows = 2;
let numCols = 3;
let colorSelected;

// Add a row
function addR() {
    const table = document.getElementById("grid")
    const newRow = table.insertRow(-1);
    for (var i = 0; i < numCols; i++) {
        newRow.insertCell(i);
    }
    numRows += 1;

}

// Add a column
function addC() {
    const table = document.getElementById("grid")
    if (numRows !== 0) {
        const rows = table.getElementsByTagName("tr")
        for (var i = 0; i < rows.length; i++) {
            rows[i].insertCell(-1);
        }
        numCols++;
    }
}

// Remove a row
function removeR() {
    //if the number of rows is greater than 0
    if (numRows >= 0) {
        const table = document.getElementById("grid")
        table.deleteRow(numRows - 1)
        numRows -= 1;
    }
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll() {
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll() {
    alert("Clicked Clear All"); // Replace this line with your code.
}