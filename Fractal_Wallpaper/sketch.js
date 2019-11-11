var bosque = []; // para guardar los arboles
var arbol = []; // para guardar las ramas de cada arbol 

function setup() {
    createCanvas(windowWidth, windowHeight); 
    background(0);  // podría poner un background aleatorio como para el cielo 
    
    let pos = random(0, width); 
    let a = createVector(pos, height); 
    let b =createVector(pos, height/1.1); 
    base = new Branch(a, b, 5); 
    
    arbol[0] = base; 
    arbol[1] = base.createBranchDer(); 
    arbol[2] = base.createBranchIzq(); 
    

}

/*
    TODO: 
    * sun 
    * mountains 
    * arboles verticales 
    * arbustos? 
    * ver esquemas de colores 
    * ver nature of code

*/
function mousePressed()
{
    for (let i = arbol.length -1; i > 0; i--)
    {
        if (!arbol[i].acabado)
        {

            arbol.push(arbol[i].createBranchDer());
            arbol.push(arbol[i].createBranchIzq());
        }
        arbol[i].acabado = true; 
    }

}
function draw() {
    for (let i = 0; i < arbol.length; i++) 
    {
        arbol[i].show(); 
    }
      
   
}