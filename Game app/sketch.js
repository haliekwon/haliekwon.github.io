
let ryan;
let heart;
let win;
let value = 0;
// let fillVal = 126;
let mouseDist;
let rotation = 0;
let heartX;
let heartY;

let heartXspeed;
let xsheartYspeed;

let mouseCollide;

let score = 0;

let endScreenBool = false;



function preload() {
  ryan = loadImage("image/ryan2.png");
  heart = loadImage("image/heart.png");
  win = loadImage("image/win.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  image(ryan, 0, 0);

  heartX = random(21, width-21);
  heartY = random(21, height-21);

  heartXspeed = 2;
  heartYspeed = 2;

  imageMode(CENTER);
}



function draw() {
  background(value);

  imageMode(CENTER);
  image(ryan, mouseX,height-70, 120, 140);
  print(ryan.height);

  textSize(40);
  text("score" + score + 0, 30, 50);
  fill('#ff8787')



  mouseCollide = dist(mouseX,mouseY,heartX,heartY);

  rotation++;
  heartX = heartX +heartXspeed;
  heartY = heartY + heartYspeed;

  // if(dist(mouseX, mouseY, heartX, heartY) < 70){
  //   heartXspeed=heartXspeed * -1;
  //   heartYspeed=heartYspeed * -1;
  // }

  if(heartY > height-140 && heartX > mouseX-ryan.width/2 && heartX < mouseX+ryan.width/2){
    heartYspeed=heartYspeed * -1;
    heartXspeed =   heartXspeed*1.2;
    heartYspeed =   heartYspeed*1.2;
    score++;
  }

  if(heartX >= width-20 || heartX <= 20){
    heartXspeed=heartXspeed * -1;
  }

  if( heartY <= 20){
    heartYspeed=heartYspeed * -1;
  }

  image(heart,heartX,heartY, 40, 40);


  if(score == 5){
    endScreenBool = true;
  }
  if (endScreenBool==true){
    endScreen();
}
}

function move(){
  heartX += xSpeed;
  heartY += ySpeed;
}


function bounce() {
  if(heartX < 10 || heartX > 400 - 10){
    xSpeed *= -1;
  }
  if(heartY < 10 || heartY > 400 - 10){
    ySpeed *= -1;
  }
}


function paddle(){
  if((heartX > mouseX &&
    heartX < mouseX + 90) &&
    (heartY + 10 >= 375)) {
      xSpeed *= -1;
      ySpeed *= -1;
      score++;
    }
  }


  function endScreen(){
    background(random(255), random(255), random(255));
    image(win, width/2, height/2, mouseX, mouseY);
  }

  function windowResize(){
    resizeCanvas(windowWidth, windowHeight);
  }
function keyPressed(){
  if (keyCode === LEFT_ARROW) {
  value = ('#ffdb87');
} else if (keyCode === RIGHT_ARROW) {
  value = ("#bff598");
}
}

  function mouseClicked() {
    if  (value === 255) {
      value = '#80b0ff';
    } else {
      value = 255;
    }
  }
