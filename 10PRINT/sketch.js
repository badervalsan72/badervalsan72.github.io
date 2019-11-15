let xvalue = 0; 
let yvalue = 0;  
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(random(255), random(255), random(255)); 
    stroke(random(255), random(255), random(255)); 
}


    
function four_lines() 
{
    
    let x = random(); 
    
    if (x >= 0 && x < 0.25) 
    {
        line(xvalue+25/2, yvalue, xvalue+25/2, yvalue+25); // I
    }

    else if (x >= 0.25 && x < 0.5)     
    {
        line(xvalue,yvalue,xvalue+25, yvalue+25); // /
    }

    else if (x >= 0.5 && x < 0.75)  
    {
        line(xvalue+25, yvalue, xvalue, yvalue+25); // \
    }
    else 
    {
        line(xvalue, yvalue+25/2, xvalue+25, yvalue+25/2);// --
    }

    xvalue+=25;
    if (xvalue >= width)
    {
        xvalue = 0; 
        yvalue += 25;
    } 
    if (yvalue >= height)
    {
        xvalue = 0;
        yvalue = 0;
        background(40, 64, 108); 
    }
    xvalue+=25;
    if (xvalue >= width)
    {
        xvalue = 0; 
        yvalue += 25;
    } 
    if (yvalue >= height)
    {
        xvalue = 0;
        yvalue = 0;
        background(40, 64, 108); 
    }

    
}
function two_lines()
{
    
    let x = random(); 

    if (x > 0.5)
    {
        line(xvalue,yvalue,xvalue+25, yvalue+25); // /
    }
    else
    {
        line(xvalue+25, yvalue, xvalue, yvalue+25); // \
    }
    xvalue+=25;
    if (xvalue >= width)
    {
        xvalue = 0; 
        yvalue += 25;
    } 
    if (yvalue >= height)
    {
        stroke(random(255), random(255), random(255));
        xvalue = 0;
        yvalue = 0;
        background(random(255), random(255), random(255)); 
    }
}


function draw() {
    /*
    let valor_random = random(); 
    if (valor_random > 0.5)
    {
        two_lines();
    }

    else
    {
        four_lines();
    }
    */ // --> terminar, tiene que cambiar cuando las líneas lleguen al final 
    two_lines(); 

}
