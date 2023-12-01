
let itemCount;
const itemSlider = document.querySelector(".item-counter");
function changeItems(event) {
  const itemNumber = document.querySelector(".item-number");
  if (!itemSlider.classList.contains("inactive")) {
    itemCount = event.target.value;
    itemNumber.innerText = itemCount;
  } else {
    event.target.value = itemCount;
  }
}
itemSlider.addEventListener("input", function (event) {
  changeItems(event);
});
class Cell {
  constructor(div, cellID, mode, total) {
    this.div = div;
    this.cellID = cellID;
    this.mode = mode;
    this.tower = 0; 
    this.move = 0;
    this.moves = []; 
    this.occurences = []; 
    this.generateMoveSet(total); 
  }
  generateMoveSet(total) {
    let totalMoves = 2 ** (total - this.cellID); 
    let set; 
    if (this.mode === 0) {
      set = [2, 1, 0];
    } else {
      set = [1, 2, 0];
    }
    for (let i = 0; i < totalMoves; i++) {
      let indicator = i % 3; 
      this.moves.push(set[indicator]);
      this.occurences.push(2 ** this.cellID * (i + 0.5)); 
    }
  }
}
//Each tower works as a stack which can have cells added to it and taken away from it
class Tower {
  constructor(div, towerID) {
    this.div = div;
    this.towerID = towerID;
    this.cells = [];
  }
  //clear cells empties the tower
  clearCells() {
    while (this.div.firstChild) {
      this.div.removeChild(this.div.lastChild);
    }
    this.cells = [];
  }
  //add cell adds the cell object to the list, and redraws the tower in html so that it looks like the new cell has been added to the top
  addCell(cell) {
    while (this.div.firstChild) {
      this.div.removeChild(this.div.lastChild);
    }
    this.cells.push(cell);
    for (let i = 0; i < this.cells.length; i++) {
      this.div.appendChild(this.cells[this.cells.length - 1 - i].div);
    }
  }
  removeCell(cellID) {
    this.cells.pop(); //adjust array
    this.cells.forEach((cell) => {
      if (cellID === cell.cellID) {
        this.div.removeChild(cell.div); //adjust visual tower
      }
    });
  }
}
//the screen class manages all of the animations, and interactions between cells and towers
class Screen {
  constructor() {
    this.screen = document.querySelector(".screen");
    this.running = false; //while running is true new towers cant be generated and nothing can be simualted
    this.towers = []; //towers will contain the three tower objects
    this.cells = []; //cells will contain all of the cell objects
    this.moves = []; //moves is an array of all of the cell objects in the order they move
  }
  //generate towers creates the 3 tower divs and adds them to the screen div
  generateTowers() {
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      div.classList.add("tower");
      this.screen.appendChild(div);
      this.towers.push(new Tower(div, i));
    }
  }
  //generate cells creates all of the cell objects and adds them to the first tower
  generateCells() {
    this.clearCells(); //All cells in towers need to be removed before new ones can be added
    let total = parseInt(itemSlider.value); //get the number of cells the user has selected
    let colors = this.generateColors(total); //get the colors needed to colour in the cells
    for (let i = 0; i < total; i++) {
      let div = document.createElement("div");
      div.classList.add("cell");
      div.style.width = `${((total - i) / (total * 4)) * 80}rem`; //this ensures each cell gets smaller
      div.style.height = `${(1 / total) * 35}rem`; //this ensures the cells fill up the screen
      div.style.backgroundColor = `${colors[i]}`;
      let cell = new Cell(div, total - i, i % 2, total);
      this.towers[0].addCell(cell);
      this.cells.push(cell);
    }
  }
  //generate colors returns a list of colours split at even points along the colour spectrum
  generateColors(itemCount) {
    let colors = [];
    let number = Math.round(360 / itemCount);
    //this loop splits the colour spectrum evenly and gives each
    //div a colour so that when in order, they resemble the colour spectrum
    for (let i = 0; i < itemCount; i++) {
      let color = chroma("#ff0000");
      colors.push(color.set("hsl.h", i * number));
    }
    return colors;
  }
  clearCells() {
    this.towers.forEach((tower) => {
      tower.clearCells();
    });
    this.cells = [];
  }
  generateMoves() {
    this.moves = [];
    for (let i = 1; i < 2 ** this.cells.length; i++) {
      this.cells.forEach((cell) => {
        if (cell.occurences.includes(i)) {
          this.moves.push(cell);
        }
      });
    }
  }
  //animation is the function that actually simulates solving the puzzel
  async animation() {
    this.running = true;
    this.generateCells(); // regenerate all cells to make sure they are all in the first tower
    this.generateMoves();
    let interval = (this.cells.length * 2) / this.moves.length; //this ensures that animation speed increases for large amounts of cells
    for (let i = 0; i < this.moves.length; i++) {
      let cell = this.moves[i]; //get the cell that will be moving on this move
      let move = cell.moves[cell.move]; //get the tower it will be moving too
      this.towers[cell.tower].removeCell(cell.cellID); //first remove the cell from from its current tower
      cell.tower = move;
      this.towers[move].addCell(cell, 1); //move the cell to its new tower
      cell.move++;
      await this.pause(interval); //wait a set amount of time before the next move
    }
    this.running = false;
  }

  pause(time) {
    return new Promise((resolve) => setTimeout(resolve, time * 1000));
  }
}
generateButton = document.querySelector(".generate-button");
generateButton.addEventListener("click", function () {
  if (screen.running === false) {
    screen.generateCells();
  }
});
simulateButton = document.querySelector(".play-button");
simulateButton.addEventListener("click", function () {
  if (screen.running === false) {
    screen.animation();
  }
});
let screen = new Screen();
screen.generateTowers();
screen.generateCells();
