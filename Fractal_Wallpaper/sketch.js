let bosque = []; // para guardar los arboles

function setup() {
    createCanvas(windowWidth, windowHeight); 
    background(0, random(0, 255), random(0, 255));  // podría poner un background aleatorio como para el cielo 
    hacerArboles(); 
    
    

}

/*
    TODO: 
    * sun 
    * mountains 
    * arboles verticales 
    * bosque de arboles mixtos! 
    * arbustos? serían como mini arboles pero con varias bases 
    * ver esquemas de colores 
    * ver nature of code

*/
function hacerArboles() 
{
    let numarbol = random(0,1) * 10; 
    
    for (let arbolin = 0; arbolin < numarbol; arbolin++)
    {
        let newArbol = []; 
        let pos = random(0, width); 
        let a = createVector(pos, height); 
        let b =createVector(pos, height/1.1); 
        newArbol[0] = new Branch(a, b, 5); 
        newArbol[1] = newArbol[0].createBranchDer(); 
        newArbol[2] = newArbol[0].createBranchIzq(); 
        bosque[arbolin] = newArbol; 
        

    }


}
function mousePressed()
{
    for (let i = 0; i < bosque.length; i++)
    {
        for (let j = bosque[i].length -1; j > 0; j--)
        {
            if (!bosque[i][j].acabado)
            {

                bosque[i].push(bosque[i][j].createBranchDer());
                bosque[i].push(bosque[i][j].createBranchIzq());
            }
            bosque[i][j].acabado = true; 
        }
    }
    

}
function draw() {
    for (let i = 0; i < bosque.length; i++)
    {
        for (let j = 0; j < bosque[i].length; j++)
        {
            bosque[i][j].show()
        } 
    }
      
   
}