function HappyTree() 
{   
    let startX = random(width); 
    let startY =  height;
    let endX = startX; 
    let endY = random(height/3); 

    this.show = function() 
    {
        stroke(50, 26, 3);
        line(startX,startY, endX, endY); 
        stroke(random(255), random(255),random(255));
        let branches = random(0, 20); 
        for (let i = 0; i < branches; i++)
        {
        }
    }
}