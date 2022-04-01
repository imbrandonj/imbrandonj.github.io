let chosenColor = 'white';  // changes color of mouse over event
function changecolor(el) {
    chosenColor = el.value;
    console.log(chosenColor);
  }  // this function is called by the colorpicker of the html file


const gridContainer = document.querySelector('.gridContainer');

const RESET_GRID = () => {
    // This resets the grid
    gridContainer.classList.remove('eight_eight');
    gridContainer.classList.remove('sixteen_sixteen');
    gridContainer.classList.remove('thirtytwo_thirtytwo');
    gridContainer.classList.remove('sixtyfour_sixtyfour');

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }  
}

const GRID_CREATOR = (int) => {
    //  This creates the etch grid with the argument providing the number of boxes
    for (let numberOfGrids = 1; numberOfGrids <= int*int; numberOfGrids++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');  // adds individual grid boxes

        gridBox.addEventListener('mouseover', function handleMouseOver() {
            gridBox.style.backgroundColor = chosenColor;
          });  // this creates the color mouseover event

        gridContainer.appendChild(gridBox);
    }

}

const EIGHT_EIGHT = () => {

    gridContainer.classList.add('eight_eight');  // css class style for grid

    GRID_CREATOR(8);

    defaultGrid = EIGHT_EIGHT;
}

const SIXTEEN_SIXTEEN = () => {

    gridContainer.classList.add('sixteen_sixteen');  // css class style for grid

    GRID_CREATOR(16);

    defaultGrid = SIXTEEN_SIXTEEN;
}

const THIRTYTWO_THIRTYTWO = () => {

    gridContainer.classList.add('thirtytwo_thirtytwo');  // css class style for grid

    GRID_CREATOR(32);
    
    defaultGrid = THIRTYTWO_THIRTYTWO;
}

const SIXTYFOUR_SIXTYFOUR = () => {

    gridContainer.classList.add('sixtyfour_sixtyfour');  // css class style for grid

    GRID_CREATOR(64);
    
    defaultGrid = SIXTYFOUR_SIXTYFOUR;
}

let defaultGrid = EIGHT_EIGHT;
window.onload = defaultGrid;

const reset = document.querySelector('#reset');
reset.onclick = () => {
    RESET_GRID();
    defaultGrid();
}

const eightButton = document.querySelector('#eightButton');
eightButton.onclick = () => {
    RESET_GRID();
    EIGHT_EIGHT();
}

const sixteenButton = document.querySelector('#sixteenButton');
sixteenButton.onclick = () => {
    RESET_GRID();
    SIXTEEN_SIXTEEN();
}

const thirtytwoButton = document.querySelector('#thirtytwoButton');
thirtytwoButton.onclick = () => {
    RESET_GRID();
    THIRTYTWO_THIRTYTWO();
}

const sixtyfourButton = document.querySelector('#sixtyfourButton');
sixtyfourButton.onclick = () => {
    RESET_GRID();
    SIXTYFOUR_SIXTYFOUR();
}