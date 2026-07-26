// Welcome to p5.js in TextJam!

// function setup() { 
//   createCanvas(400, 400);
// }

// function draw() { 
//   background(255,249,226);
//   textSize(24);
//   textAlign(CENTER, CENTER);
  
//   //Change this text!
//   text("Brave, not perfect", width / 2, height / 2);
// }



 
//Variables
let eyeWidth= 50;
let eyeHeight= 40;
let pupilWidth= 22;
let pupilHeight= 25;
let browWidth= 30;
let browHeight= 15;
let toggle= false;
let blushWidth= 60;
let blushHeight= 20;
let bunsWidthAndHeight= 90;



//function
function setup() {
  //sets the screen size
  createCanvas(400, 400);

  //sets the background color
  background(255, 249, 226);
}

/* DRAW LOOP REPEATS */
function draw() {
  rectMode(CENTER)
  angleMode(DEGREES)

  //Text
  noStroke();
  textSize(15);
  text("Very little is needed to make a happy life;\n it is all within yourself, in your way of thinking. \n — Marcus Aurelius", 20, 20);

  // textSize(25);
  // text("Noor", 315, 370);
  

  //Buns
      stroke("#8B4513");
      fill("peru");
      ellipse(140, 110, bunsWidthAndHeight, bunsWidthAndHeight);
      ellipse(250, 110, bunsWidthAndHeight, bunsWidthAndHeight);

  


  //HairBack
  rect(200, 250, 160, 165);

  //Neck
  fill("#ffeecc");
  
  rect(200, 300, 55, 60);

  //turtleNeck
  fill("pink");
  
  rect(200, 330, 100, 40);

  
  
  //Face
  fill("#ffeecc");
  ellipse(width/2, height/2, 175, 200);

  //Eyes
  if (toggle==true){
       fill(0)
     ellipse(170, 170, eyeWidth, eyeHeight/8);
     ellipse(230, 170, eyeWidth, eyeHeight/8);
  }else if (toggle == false){
      fill("white");
      ellipse(170, 170, eyeWidth, eyeHeight);
      ellipse(230, 170, eyeWidth, eyeHeight);
  }

  

  
  // if (mouseIsPressed){
  //   //eyes closed
  //   fill(0)
  //    // ellipse(170, 170, eyeWidth, eyeHeight/8);
  //    // ellipse(230, 170, eyeWidth, eyeHeight/8);

  //   //right eye wink
  //   ellipse(230, 170, eyeWidth, eyeHeight/8);
  // }else{
  //   //eyes opened
  //     fill("white");
  // ellipse(170, 170, eyeWidth, eyeHeight);
  // ellipse(230, 170, eyeWidth, eyeHeight);
  // }
  
// fill("white");
//   ellipse(170, 170, eyeWidth, eyeHeight);

  

  
  
  //Nose
  line(199, 200, 205, 210)

  //Pupil

  if (toggle==true){
    //eyes closed
           fill(0)
    stroke("black")
     ellipse(170, 170, pupilWidth, pupilHeight/8);
     ellipse(230, 170, pupilWidth, pupilHeight/8);
  }else if (toggle == false){
      //eyes opened
      fill('#AFEEEE')
      ellipse(170, 170, pupilWidth, pupilHeight);
      ellipse(230, 170, pupilWidth, pupilHeight);
  }
  // if (mouseIsPressed){
  //   //eyes closed
  //    fill(0)
  //   stroke("black")
  //    // ellipse(170, 170, pupilWidth, pupilHeight/8);
  //    // ellipse(230, 170, pupilWidth, pupilHeight/8);

  //   //right eye wink
  //   ellipse(230, 170, pupilWidth, pupilHeight/8)
  // }else{
  //   //eyes opened
  //     fill('#AFEEEE')
  //     ellipse(170, 170, pupilWidth, pupilHeight);
  //     ellipse(230, 170, pupilWidth, pupilHeight);
  // }
  // stroke("#8B4513")
  // fill('#AFEEEE')
  //     ellipse(170, 170, pupilWidth, pupilHeight);



  
  //Mouth
  if (mouseIsPressed){
    //smile
    fill("white");
    arc(200, 230, 50, 50, 0, 180);
  }else{
    //eyes opened
      fill("tomato");
      arc(200, 230, 50, 50, 0, 180);
  }
  



  //line
  // line(379, 380, 300, 380)
  

  //HairFront
  fill("peru");
  arc(200, 160, 155, 120, 180, 0);

  
  

  //Eyebrows
  noFill();
  arc(165, 140, browWidth, browHeight, 180, 0);
  arc(230, 140, browWidth, browHeight, 180, 0);

  //Blush
  fill("tomato");
  noStroke();
  ellipse(155, 200, blushWidth, blushHeight);
  ellipse(255, 200, blushWidth, blushHeight);
  

   //Directions for mouse press
  fill(0);
  noStroke();
  textSize(15);
  text("Click to see me close my eyes\n. Click again to see me open them.",170,370)
}
/* FUNCTIONS */
function mousePressed() {
  toggle = !toggle;
}