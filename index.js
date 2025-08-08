const boxContainer = document.querySelector('.container');


createGrid();


function createGrid() {
  const size = parseInt(prompt("How many boxes per side? (max 100): "));

  if (isNaN(size) || size <= 0) {
    alert("Please enter a valid positive number for the grid size.");
    return;
  }


  boxContainer.innerHTML = '';


  boxContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  boxContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover', () => {
      gridItem.classList.add('hovered-trail');
    });
    boxContainer.appendChild(gridItem);
  }
}

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Assuming 'squares' is a NodeList of your square elements
const squares = document.querySelectorAll('.grid-item'); 

squares.forEach(square => {
  square.addEventListener('click', () => { 
    // Or 'click' or other interaction
    square.style.backgroundColor = getRandomRgbColor();
  });
});


document.querySelector('.new-grid').addEventListener('click', () => {
  createGrid();
})


document.querySelector('.color-mode').addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('colored-trail');
      item.style.backgroundColor = getRandomRgbColor();
    });
  });
});


document.querySelector('.black-mode').addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('hovered-trail');
      item.style.backgroundColor = 'black';
    });
  }); 
});


document.querySelector('.clear-grid').addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => item.classList.remove('hovered-trail'));  
  gridItems.forEach(item => item.classList.remove('colored-trail'));
  gridItems.forEach(item => item.style.backgroundColor = ''); // Reset background color
});





