function setup() {
    createCanvas(width, height);
    background(random(0, 125));
    x = new Square(); 
    
    
  }
  
  function draw() {
   
    x.show(); 
    x.expand();
    
    
  }