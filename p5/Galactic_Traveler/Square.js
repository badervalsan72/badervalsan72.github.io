function Square() 
{
  xvalue = 100;
  yvalue = 100;
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
    
    if (xvalue <= width)
    {
      xvalue += 10;
      yvalue += 10;
    }
    
    
    if (xvalue > width) 
    {
      newsquare = new Square(); 
      newsquare.show(); 
      newsquare.expand(); 
    }
  }
}

 
