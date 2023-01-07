// This class represents a paddle.
class Paddle {
  // Initializes the paddle with x,y position and w x h dimensions.
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }
  
  // Should be called when the paddle is hit.
  hit() {
    // nothing happens to the paddle when it is hit...
  }
  
  // Moves the paddle according to the user control.
  move() {
    this.x = constrain(mouseX, this.width/2, width-this.width/2);
  }
  
  // Displays the paddle.
  display() {
    noStroke();
    fill(255, 255, 255);
    push();
    translate(this.x-50, this.y);
    rectMode(CENTER);
    image(image_paddle, 0, 0, this.width, this.height);
    pop();
    //rect(this.x, this.y, this.width, this.height,20);
  }
}