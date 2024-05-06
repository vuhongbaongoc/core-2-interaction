// var skyHeight;
// var grassHeight;

// function setup() {
//     createCanvas(windowWidth, windowHeight); 

//     skyHeight = windowHeight / 3;
//     grassHeight = 2 * (windowHeight / 3);
//   }
  
//   function draw() {
//     // Sky
//     noStroke();
//     fill (110, 110, 230);
//     rect(0, 0, windowWidth,skyHeight);

//     // Grass
//     fill (0, 255, 0);
//     rect(0, skyHeight, windowWidth, grassHeight);

//     // Roof 
//     fill (255, 204, 0);
//     triangle(30, 75, 58, 20, 86, 75);
    
//     // House

//   }


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(250, 200, 200);

  let rows = height / 50;
  let co1s = width / 50;

  for (row = 0; row < rows; row++) {
    for (co1 =0; co1 < rows; co1++) {
      let r = Math.floor(random(colorValues));
      let g = Math.floor(random(colorValues));
      let b = Math.floor(random(colorValues));

      fill(r,g,b);

      drawCircle(co1 * 50 + 25, row * 50 + 25)
    }
  }

}