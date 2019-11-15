function Branch(inicio, fin, strength) 
{
    this.inicio = inicio; 
    this.fin = fin; 
    this.strength = strength;

    this.red = random(255);
    this.green = random(255);
    this.blue = random(255); 
    
    //stroke(random(255),random(255), random(255));
    //strokeWeight(this.strength);
    
    this.show = function() 
    {
        strokeWeight(this.strength);
        
        if (this.strength > 0.15)
        {
            stroke(64, 38, 21);
        } 
        else 
        {
            stroke(this.red, this.green, this.blue);
        }
         
        //stroke(this.red, this.green, this.blue);

        line(this.inicio.x, this.inicio.y, this.fin.x, this.fin.y); 
    }
    this.createBranchIzq = function()
    {
        let direccion = p5.Vector.sub(this.fin, this.inicio);        
        direccion.rotate(random(-PI / 9, -PI / 7)); 
        direccion.mult(0.75);
        let nuevofin = p5.Vector.add(this.fin, direccion);
        let izq = new Branch(this.fin, nuevofin, this.strength * 0.5);
        return izq; 
    }
    this.createBranchDer = function()
    {
        let direccion = p5.Vector.sub(this.fin, this.inicio);        
        direccion.rotate(random(PI / 9, PI / 7));
        direccion.mult(0.75);
        let nuevofin = p5.Vector.add(this.fin, direccion); 
        let der = new Branch(this.fin, nuevofin, this.strength * 0.5); 
        
        return der; 
    }

}