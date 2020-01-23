//our custom variable
let pointX;
let mouseDist;
let triY;

function setup() {
  //create the canvas element
  createCanvas(900, 500);

  //giving pointX a value of 300
  pointX = 600;
  triY = 300;
  rectMode(CENTER);
  print(pointX);
}



function draw() {
  background(168, 50, 153);
 mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
 print(mouseDist);
 smooth();
  //line and point styles
  strokeWeight(50);
  //point expects an x and y coordinate
  point(pointX, 300);

  strokeWeight(mouseDist);
  //line expects two x, y coordinates
  //then conects the coordinates
  line(mouseX, mouseY, pmouseX, pmouseY);

  //ellipse styles
  noStroke();
  fill(190, 55, 12, 50);

  //ellipse expects an x, y coordinate
  //and width and Height
  //ellipse(mouseX, mouseY, 200, 100);

  stroke(random(255), random(255), random(255));

  //rect styles
  strokeWeight(mouseDist);

  //fills in shapes with color
  //affects shapes that come after
  fill(30, 20,255);

  //rect expecting an x, y coordinate
  //and width and Height
  rect(width/3, height/3, mouseX, 100);

  //triangle syles
  noFill();
  strokeWeight(30);
  stroke(120, 150, 150);
  //triagle expects three set of x, y
  triangle(800, 12, 850, 200, 700, triY);
  //print(mouseX);

  if(mouseIsPressed){
    //when mouse is pressed reset pointx to 200
    pointX = 200;
  } else {
    //when mouse is released reset pointx to 600
    pointX = 600;

  }

  if(keyIsPressed){
    //when mouse is pressed reset pointx to 200
    triY= 600;
  } else {
    //when mouse is released reset pointx to 600
    triY = 300;

  }

}
