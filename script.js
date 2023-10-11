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
    const table = document.getElementById("grid")
    if (numRows !== 0) {
        const rows = table.getElementsByTagName("tr")
        for (var i = 0; i < rows.length; i++) {
            rows[i].deleteCell(numCols - 1);
        }
        numCols -= 1
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    const table = document.getElementById("grid")
    const cells = table.getElementsByTagName("td")
    console.log(cells)
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].classList.length === 0) {
            console.log(cells[i].classList.length)
            cells[i].className = colorSelected;
        }
        // cells[i].style.backgroundColor
    }

}

// Fill all cells
function fillAll() {
    const table = document.getElementById("grid")
    const cells = table.getElementsByTagName("td")
    console.log(cells)
    for (var i = 0; i < cells.length; i++) {
        cells[i].className = colorSelected;
        // cells[i].style.backgroundColor
    }
}

// Clear all cells
function clearAll() {
    alert("Clicked Clear All"); // Replace this line with your code.
}