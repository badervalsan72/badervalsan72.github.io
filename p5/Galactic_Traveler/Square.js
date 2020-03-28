function Square() 
{
  let xvalue = 100;
  let yvalue = 100;
  fill(random(255), random(255), random(255));
  frameRate(30);
  
  this.show = function() 
  {
    rectMode(CENTER);
    rect(width / 2, height / 2, xvalue, yvalue);
    stroke(0); 
    strokeWeight(5);
    /* 
    line(250, 150, width, 0); 
    line(250,250, width, height);
    line(150, 150, 0, 0);
    line(150, 250, 0, height);
    */
  }

  this.expand = function() 
  {
    
    if (this.xvalue <= width)
    {
      this.xvalue += 10;
      this.yvalue += 10;
    }
    
    
    if (this.xvalue > width) 
    {
      this.xvalue = 0; 
      newsquare = new Square(); 
      newsquare.show(); 
      newsquare.expand(); 
    }
  }
}

 
