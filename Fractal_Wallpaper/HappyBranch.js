function HappyBranch(inicio, fin) 
{
    this.inicio = inicio; 
    this.fin = fin;
    if (abs(this.inicio.y - this.fin.y) > 25)
    {
        strokeWeight(3); 
    }
    this.show = function() 
    {
        line(this.inicio.x, this.inicio.y, this.fin.x, this.fin.y); 
    }
    

    
}