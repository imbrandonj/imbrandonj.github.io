let chosenColor = 'white';
function changecolor(el) {
    chosenColor = el.value;
    console.log(chosenColor)
  }


const gridContainer = document.querySelector('.gridContainer');

const RESET_GRID = () => {
    gridContainer.classList.remove('eight_eight');
    gridContainer.classList.remove('sixteen_sixteen');
    gridContainer.classList.remove('thirtytwo_thirtytwo');
    gridContainer.classList.remove('sixtyfour_sixtyfour');

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }  // This resets the grid
}

const EIGHT_EIGHT = () => {

    gridContainer.classList.add('eight_eight');  // css class style for grid

    for (let numberOfGrids = 1; numberOfGrids <= 8*8; numberOfGrids++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');  // adds individual grid boxes

        gridBox.addEventListener('mouseover', function handleMouseOver() {
            gridBox.style.backgroundColor = chosenColor;
          });

        gridContainer.appendChild(gridBox);
    }

    defaultGrid = EIGHT_EIGHT;
}

const SIXTEEN_SIXTEEN = () => {

    gridContainer.classList.add('sixteen_sixteen');  // css class style for grid

    for (let numberOfGrids = 1; numberOfGrids <= 16*16; numberOfGrids++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');  // adds individual grid boxes

        gridBox.addEventListener('mouseover', function handleMouseOver() {
            gridBox.style.backgroundColor = chosenColor;
          });

        gridContainer.appendChild(gridBox);
    }

    defaultGrid = SIXTEEN_SIXTEEN;
}

const THIRTYTWO_THIRTYTWO = () => {

    gridContainer.classList.add('thirtytwo_thirtytwo');  // css class style for grid

    for (let numberOfGrids = 1; numberOfGrids <= 32*32; numberOfGrids++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');  // adds individual grid boxes

        gridBox.addEventListener('mouseover', function handleMouseOver() {
            gridBox.style.backgroundColor = chosenColor;
          });

        gridContainer.appendChild(gridBox);
    }
    
    defaultGrid = THIRTYTWO_THIRTYTWO;
}

const SIXTYFOUR_SIXTYFOUR = () => {

    gridContainer.classList.add('sixtyfour_sixtyfour');  // css class style for grid

    for (let numberOfGrids = 1; numberOfGrids <= 64*64; numberOfGrids++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');  // adds individual grid boxes

        gridBox.addEventListener('mouseover', function handleMouseOver() {
            gridBox.style.backgroundColor = chosenColor;
          });
        
        gridContainer.appendChild(gridBox);
    }
    
    defaultGrid = SIXTYFOUR_SIXTYFOUR;
}

let defaultGrid = EIGHT_EIGHT;
window.onload = defaultGrid;

const reset = document.querySelector('#reset');
reset.onclick = () => {
    RESET_GRID();
    defaultGrid();
};

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