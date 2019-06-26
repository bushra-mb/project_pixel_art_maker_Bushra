// Select the form Element
let form = document.getElementById("sizePicker");
// Select size inputs Element
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
// Select the table Element
let table = document.getElementById('pixelCanvas');
// Select color input Element
let color = document.getElementById("colorPicker");

/* this function loops to clear and make the grid based on user inputs,
each cell has an event listener to set the background color */
function makeGrid() {
    table.innerHTML = "";
    let rows = parseInt(height.value);
    let columns = parseInt(width.value);
    for (let i = 0 ; i < rows  ; i++){
        let row = table.insertRow(i);
        for (let j = 0; j < columns ; j++ ){
            let cell = row.insertCell(j);
            cell.addEventListener('click', colorFill );
        }
    }
}

//this function fills the chosen square with the chosen color
function colorFill (){
    this.setAttribute('style', `background-color: ${color.value}`);
}

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function (event){
    event.preventDefault();
    makeGrid();

});
