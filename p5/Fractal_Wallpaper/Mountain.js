function Mountain() 
{
    let alturamax = random(height*0.25, height/2.5);  
    let steepness = random(); 
        /*
        los vertex funcionan con coordenadas en width y height, y se conectan uno con otro 
        lo que necesito hacer en este momento es generar una montaña, así que debería ver como funciona
        para poder generar algo que se parezca al menos un poco a una montaña 
        también podría generar una cantidad aleatoria de montañas de diferentes colores una encima de otra 
        y así tener una imagen más colorida y feliz.  
        También quiero tener la posibilidad de que las montañas sean o en pico ^ (comenzando y terminando en el inicio y el fin del canvas)
        o que sean más grandes que el canvas, osea que la imagen que se ve en el canvas sea más pequeña que 
        la longitud de la montaña
*/  

    
}

    this.show = function() 
    {
        fill = (random(100), random(100), random(100)); 
        beginShape(); // necesito iniciar la forma, obviamente. esto no iría dentro de ningún ciclo. 
        let forma = random(); 
        if (forma > 0.5)
        {

        }
        else
        {
            
        }
        vertex(30, 20);
        vertex(85, 20);
        vertex(85, 75);
        vertex(30, 75);
        endShape(CLOSE);

    }