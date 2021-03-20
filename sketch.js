var g, d;
var a, b;

function setup() {
  createCanvas(800,400);
  g = createSprite(400, 200, 50, 50);
  d = createSprite(200, 100, 40, 40);

  a = createSprite(600, 100, 50, 50);
  b = createSprite(600, 300, 40, 40);

  a.velocityY = 2;
  b.velocityY = -2

}

function draw() {
  background("lightblue");
  
  g.x = mouseX;
  g.y = mouseY;


  abc(g,d); // m = g   f = d

  jump(a,b); // m = a  f = b



  drawSprites();
}


function abc(m,f){

  if(m.x - f.x < m.width/2 + f.width/2 && f.x - m.x < f.width/2 + m.width/2 &&
    m.y - f.y < m.height/2 + f.height/2 && f.y - m.y < f.height/2 + m.height/2)
    {
       m.shapeColor = "red";
       f.shapeColor = "Orange";
    }
 
    else {
     m.shapeColor = "grey";
     f.shapeColor = "grey";  
    }


}


function jump(m,f){

  if(m.x - f.x < m.width/2 + f.width/2 && f.x - m.x < f.width/2 + m.width/2 )
   
    {
      m.velocityX = m.velocityX * (-1);
      f.velocityX = f.velocityX * (-1);
    }
 
   if( m.y - f.y < m.height/2 + f.height/2 && f.y - m.y < f.height/2 + m.height/2) 
   {

    m.velocityY = m.velocityY * (-1);
      f.velocityY = f.velocityY * (-1);
   }

}