let bosque = []; // para guardar los arboles

function setup() {
    createCanvas(windowWidth, windowHeight); 
    background(random(60, 105),random(112, 201), random(142, 255)); // --> cielo
    hacerArboles();
    makeBranches(7);  
    sun = new Sun(); 
    sun.show(); 
    

}

/*
    TODO: 
    * sun 
    * mountains 
    * arboles verticales 
    * bosque de arboles mixtos! 
    * hacer que los arboles generados no puedan estar muy cerca uno del otro 
    * arbustos? serían como mini arboles pero con varias bases 
    * ver esquemas de colores 
    * ver nature of code

*/
function hacerArboles() 
{
    let numarbol = random(1,10); 
    
    for (let arbolin = 0; arbolin < numarbol; arbolin++)
    {
        let newArbol = []; 
        let pos = random(0, width); 
        let a = createVector(pos, height);
        let altura = random(height/1.1, height/1.0025); 
        let b =createVector(pos, altura); 
        newArbol[0] = new Branch(a, b, 5); 
        newArbol[1] = newArbol[0].createBranchDer(); 
        newArbol[2] = newArbol[0].createBranchIzq(); 
        bosque[arbolin] = newArbol; 
        

    }


}
function makeBranches(len)
{
    this.len = len;
    for (let a = 0; a < this.len; a++)
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