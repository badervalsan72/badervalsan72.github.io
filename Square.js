function Square() {
  xvalue = 100;
  yvalue = 100;
  fill(random(255), random(255), random(255));
  frameRate(30);
  this.show = function() {
    
    rectMode(CENTER);
    rect(width / 2, height / 2, xvalue, yvalue);
    /*
    line(); 
    line(); 
    line();
    line(); 
    */
  }

  this.expand = function() {
    if (xvalue < width) {
      xvalue += 10;
      yvalue += 10;
    }
    
    if (xvalue >= 399) {
      newsquare = new Square(); 
      newsquare.show(); 
      newsquare.expand(); 
      }
    }
}
