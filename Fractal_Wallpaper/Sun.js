function Sun() 
{
    this.nombre = "hello"; 
     
    this.show = function() 
    {
        let xvalue   = random(width); 
        let yvalue   = random(0, height/4); 
        let diametro = 200; 
        
        fill(255);
        noStroke(); 
        ellipse(xvalue, yvalue, diametro, diametro); 
        console.log("hello"); 
    }
}