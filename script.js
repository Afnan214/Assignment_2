// Declare global variables
let numRows = 2;        //default Row Value
let numCols = 3;        //default Col Value
let colorSelected;

// Add a row
function addR() {
    const table = document.getElementById("grid")
    const newRow = table.insertRow(-1);
    for (var i = 0; i < numCols; i++) {

        const cell = newRow.insertCell(i);      // this will create a cell and put it in the row
        // This will allow new row to change colors when clicked 
        cell.onclick = function () {
            colorCell(this)
        }
    }
    numRows += 1;

}

// Add a column
function addC() {
    const table = document.getElementById("grid")
    if (numRows !== 0) {
        const rows = table.getElementsByTagName("tr")
        for (var i = 0; i < rows.length; i++) {
            const cell = rows[i].insertCell(-1);
            // This will allow new column to change colors when clicked 
            cell.onclick = function () {
                colorCell(this)
            }
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

    if (numRows !== 0) {
        const table = document.getElementById("grid")
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
    const table = document.getElementById("grid")//returns table
    const cells = table.getElementsByTagName("td")//returns cells
    for (var i = 0; i < cells.length; i++) {
        cells[i].className = ''
    }
}

//cell represents the cell that was clicked.
function colorCell(cell) {
    if (colorSelected.value !== '') {
        cell.className = colorSelected;//change the class for "cell" to selected color class
    }

}