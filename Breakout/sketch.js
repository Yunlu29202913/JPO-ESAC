/* Breakout Mod
 * Author: Sofian Audry
 * Adapted from code by Julian Glass-Pilon
 * A mod of the breakout game where the point of the game is to break all
 * of the bricks on screen with the ball by bouncing it on the 
 * user-controlled paddle.
 *
 * Press SPACEBAR to throw the ball and use the mouse to control the paddle.
 *
 * This code is modeled after the Game Mod workshop: an intensive workshop that used 
 * the Breakout game mod to get non-coders to code. 
 *
 * Visit <http://www.trsp.net/teaching/gamemod/index.html> for more information.
 */

// The ball object.
let ball;

// The paddle object.
let pad;

// The array containing all the bricks.
let bricks = [];

// Determines the number of columns for the brick grid.
let COLUMNS= 4;


// Determines the number of rows for the birck grid.
let ROWS = 1;

function setup() {
  createCanvas(460, 690);
  bg = loadImage('../media/affiche_element_5.png');
  image_ball = loadImage('/media/ball_3_2.png');
  image_paddle = loadImage('/media/paddle_3.png');


  //bg = loadImage('../media/sample.jpg');


  // Initialize the ball.
  ball = new Ball(width / 2, height-200,30);

  // Initialize the paddle at bottom of screen.
  pad = new Paddle(width / 2, height-160, 100, 30);

  ////////////////// E ////////////////// 

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 1; j++) {

      bricks.push(new Brick(60 + (i * 40), 50 + (j * 40), 20, 10));
      bricks.push(new Brick(40 + (i * 40), 70 + (j * 40), 20, 10));
      bricks.push(new Brick(60 + (i * 40), 130 + (j * 40), 20, 10));
      bricks.push(new Brick(80 + (i * 40), 150 + (j * 40), 20, 10));
      bricks.push(new Brick(60 + (i * 40), 210 + (j * 40), 20, 10));
    }
  }
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < ROWS; j++) {
      bricks.push(new Brick(60 + (i * 40), 90 + (j * 40), 20, 10));
    }
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < ROWS; j++) {
      bricks.push(new Brick(40 + (i * 40), 110 + (j * 40), 20, 10));
      bricks.push(new Brick(60 + (i * 40), 170 + (j * 40), 20, 10));
      bricks.push(new Brick(40 + (i * 40), 190 + (j * 40), 20, 10));
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < ROWS; j++) {
      bricks.push(new Brick(40 + (i * 40), 230 + (j * 40), 20, 10));
   
    }
  }

////////////////// S //////////////////

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(280 + (i * 40), 90 + (j * 40), 20, 10));
    bricks.push(new Brick(260 + (i * 40), 110 + (j * 40), 20, 10));
    bricks.push(new Brick(360 + (i * 40), 170 + (j * 40), 20, 10));
    bricks.push(new Brick(380 + (i * 40), 190 + (j * 40), 20, 10));
  }

}for (let i = 0; i < 3; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(320 + (i * 40), 50 + (j * 40), 20, 10));
  }
}

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(280 + (i * 40), 130 + (j * 40), 20, 10));
    bricks.push(new Brick(280 + (i * 40), 210 + (j * 40), 20, 10));
    bricks.push(new Brick(260 + (i * 40), 230 + (j * 40), 20, 10));

  }
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(260 + (i * 40), 70 + (j * 40), 20, 10));
    bricks.push(new Brick(260 + (i * 40), 150 + (j * 40), 20, 10));
  }
}

////////////////// A //////////////////

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(100 + (i * 40), 280 + (j * 40), 20, 10));
    bricks.push(new Brick(40 + (i * 40), 340 + (j * 40), 20, 10));
    bricks.push(new Brick(160 + (i * 40), 340 + (j * 40), 20, 10));
    bricks.push(new Brick(40 + (i * 40), 420 + (j * 40), 20, 10));
    bricks.push(new Brick(160 + (i * 40), 420 + (j * 40), 20, 10));
    bricks.push(new Brick(60 + (i * 120), 440 + (j * 40), 20, 10));
    bricks.push(new Brick(40 + (i * 40), 460 + (j * 40), 20, 10));
    bricks.push(new Brick(160 + (i * 40), 460 + (j * 40), 20, 10));
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(80 + (i * 40), 300 + (j * 40), 20, 10));
  }
}

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(60 + (i * 40), 320 + (j * 40), 20, 10));
    bricks.push(new Brick(60 + (i * 40), 360 + (j * 40), 20, 10));
    bricks.push(new Brick(60 + (i * 40), 400 + (j * 40), 20, 10));
  }
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(40 + (i * 40), 380 + (j * 40), 20, 10));
  }
}

////////////////// C //////////////////

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(280 + (i * 40), 360 + (j * 40), 20, 10));
    bricks.push(new Brick(260 + (i * 40), 380 + (j * 40), 20, 10));
    bricks.push(new Brick(280 + (i * 40), 400 + (j * 40), 20, 10));
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(320 + (i * 40), 280 + (j * 40), 20, 10));
    bricks.push(new Brick(260 + (i * 40), 340 + (j * 40), 20, 10));
    bricks.push(new Brick(260 + (i * 40), 420 + (j * 40), 20, 10));
    bricks.push(new Brick(320 + (i * 40), 460 + (j * 40), 20, 10));

  }
}

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < ROWS; j++) {
    bricks.push(new Brick(300 + (i * 40), 300 + (j * 40), 20, 10));
    bricks.push(new Brick(280 + (i * 40), 320 + (j * 40), 20, 10));
    bricks.push(new Brick(300 + (i * 40), 440 + (j * 40), 20, 10));

  }
}


}




function draw() {
  // Refresh background.
  background(bg);

  // Moves the paddle according to the mouse.
  pad.move();

  // If ball has been thrown, move it.
  if (ball.isThrown)
    ball.move();

  // Verify collision with edges.
  ball.checkHitEdges();
  
  // Check collision with paddle.
  ball.checkHit(pad);

  //performs the following functions on all the bricks in the 2D array bricks
  for (let i = 0; i < bricks.length; i++) {
    // Check to see if the ball hits the brick.
    if (bricks[i].isAlive)
      ball.checkHit(bricks[i]);
    
    // Draw the brick on the screen
    bricks[i].display();
  }

  // Display the ball on the screen.
  ball.display();

  // Display the paddle.
  pad.display();
}

// Spacebar throws the ball.
function keyTyped() {
  if (key == ' ') {
    ball.isThrown = true;
  }
}