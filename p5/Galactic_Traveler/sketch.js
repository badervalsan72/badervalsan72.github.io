function setup() {
    createCanvas(400, 400);
    background(255);
    x = new Square(); 
    
    
  }
  
  function draw() {
   
    x.show(); 
    x.expand();
    
    
  }