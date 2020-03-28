function Sun() 
{
    // this.nombre = "hello"; 
     
    this.show = function() 
    {
        let xvalue   = random(width); 
        let yvalue   = random(0, height/4); 
        let diametro = random(50, 300); 
        let alpha = 70; 
        
        noStroke(); 

        fill(255, 100);
        ellipse(xvalue, yvalue, diametro, diametro); 
       
        fill(255, alpha * 0.80); 
        ellipse(xvalue, yvalue, diametro * 1.15, diametro * 1.15);
        
        fill(255, alpha * 0.75);
        ellipse(xvalue, yvalue, diametro * 1.30, diametro * 1.30); 

        fill(255, alpha * 0.50); 
        ellipse(xvalue, yvalue, diametro * 1.45, diametro * 1.45); 
        
    }
}
