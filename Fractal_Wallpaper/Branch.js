function Branch(inicio, fin, strength) 
{
    this.inicio = inicio; 
    this.fin = fin; 
    this.strength = strength; 
    
    if (this.strength < 3)
    {
        stroke(random(255),random(255), random(255));
    }
    else
    {
        stroke(74, 44, 0); 
    }
    
    strokeWeight(this.strength); 
    this.show = function() 
    {
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