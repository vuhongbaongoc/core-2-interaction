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

  background(255, 182, 193);

}

function draw() {
  noStroke();

  //body
  fill (196, 164, 132);
  ellipse(700, 600, 350, 300);

  fill (255, 253, 208);
  ellipse(700, 600, 230, 200);

  //ears
  fill (196, 164, 132);
  circle(550, 250, 150);

  fill (196, 164, 132);
  circle(850, 250, 150);

  //inner ears
  fill (255, 253, 208);
  circle(550, 250, 100);

  fill (255, 253, 208);
  circle(850, 250, 100);

  //head
  fill (196, 164, 132);
  ellipse(700, 380, 400, 380);

  //cheeks
  fill (255, 214, 209);
  ellipse(600, 470, 60, 50);

  fill (255, 214, 209);
  ellipse(800, 470, 60, 50);

  //eyes
  fill (0,0,0);
  circle(620, 450, 50);

  fill (0,0,0);
  circle(780, 450, 50);

  fill (255,255,255);
  circle(620, 450, 40);

  fill (255,255,255);
  circle(780, 450, 40);

  fill (0,0,0);
  circle(620, 450, 30);

  fill (0,0,0);
  circle(780, 450, 30);

  fill (255,255,255);
  circle(770, 440, 10);

  fill (255,255,255);
  circle(610, 440, 10);

  //nose
  fill (255, 253, 208);
  ellipse(700, 470, 100, 90);

  fill (92, 64, 51);
  ellipse(700, 450, 40, 30);

  //feet
  fill (92, 64, 51);
  ellipse(760, 740, 80, 60);

  fill (92, 64, 51);
  ellipse(650, 740, 80, 60);

  //hands
  fill (196, 164, 132);
  ellipse(850, 530, 80, 60);

  fill (196, 164, 132);
  ellipse(550, 530, 80, 60);
}