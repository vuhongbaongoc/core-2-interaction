var skyHeight;
var grassHeight;

function setup() {
    createCanvas(windowWidth, windowHeight); 

    skyHeight = windowHeight / 3;
    grassHeight = 2 * (windowHeight / 3);
  }
  
  function draw() {
    // Sky
    noStroke();
    fill (110, 110, 230);
    rect(0, 0, windowWidth,skyHeight);

    // Grass
    fill (0, 255, 0);
    rect(0, skyHeight, windowWidth, grassHeight);

    // Roof 
    fill (255, 204, 0);
    triangle(30, 75, 58, 20, 86, 75);
    
    // House
  }