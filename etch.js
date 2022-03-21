let chosenColor = 'white';
function changecolor(el) {
    chosenColor = el.value;
    console.log(chosenColor)
  }


const gridContainer = document.querySelector('.gridContainer');

const EIGHT_EIGHT = () => {

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    } // This resets the grid

    gridContainer.classList.add('eight_eight');  // css class style for grid

    for (let numberOfGrids = 1; numberOfGrids <= 8*8; numberOfGrids++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');

        gridBox.addEventListener('mouseover', function handleMouseOver() {
            gridBox.style.backgroundColor = chosenColor;
          });

        gridContainer.appendChild(gridBox);
    }

    defaultGrid = EIGHT_EIGHT;
}

const SIXTEEN_SIXTEEN = () => {

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }  // This resets the grid

    gridContainer.classList.add('sixteen_sixteen');  // css class style for grid

    for (let numberOfGrids = 1; numberOfGrids <= 16*16; numberOfGrids++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');

        gridBox.addEventListener('mouseover', function handleMouseOver() {
            gridBox.style.backgroundColor = chosenColor;
          });

        gridContainer.appendChild(gridBox);
    }

    defaultGrid = SIXTEEN_SIXTEEN;
}

const THIRTYTWO_THIRTYTWO = () => {

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }  // This resets the grid

    gridContainer.classList.add('thirtytwo_thirtytwo');  // css class style for grid

    for (let numberOfGrids = 1; numberOfGrids <= 32*32; numberOfGrids++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');

        gridBox.addEventListener('mouseover', function handleMouseOver() {
            gridBox.style.backgroundColor = chosenColor;
          });

        gridContainer.appendChild(gridBox);
    }
    
    defaultGrid = THIRTYTWO_THIRTYTWO;
}

const SIXTYFOUR_SIXTYFOUR = () => {

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }  // This resets the grid

    gridContainer.classList.add('sixtyfour_sixtyfour');  // css class style for grid

    for (let numberOfGrids = 1; numberOfGrids <= 64*64; numberOfGrids++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        gridContainer.appendChild(gridBox);

        gridBox.addEventListener('mouseover', function handleMouseOver() {
            gridBox.style.backgroundColor = chosenColor;
          });

    }
    
    defaultGrid = SIXTYFOUR_SIXTYFOUR;
}

let defaultGrid = SIXTEEN_SIXTEEN;
window.onload = defaultGrid;

const reset = document.querySelector('#reset');
reset.onclick = () => {
    defaultGrid();
};

const eightButton = document.querySelector('#eightButton');
eightButton.onclick = () => EIGHT_EIGHT();

const sixteenButton = document.querySelector('#sixteenButton');
sixteenButton.onclick = () => SIXTEEN_SIXTEEN();

const thirtytwoButton = document.querySelector('#thirtytwoButton');
thirtytwoButton.onclick = () => THIRTYTWO_THIRTYTWO();

const sixtyfourButton = document.querySelector('#sixtyfourButton');
sixtyfourButton.onclick = () => SIXTYFOUR_SIXTYFOUR();