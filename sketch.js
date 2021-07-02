var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database,position;

function preload(){
   bg =loadImage("Hot Air Ballon-01.png");
   balloonImage1=loadAnimation("Hot Air Ballon-02.png");
   balloonImage2=loadAnimation("Hot Air Ballon-02.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 

  var balloonref = database.ref('Balloon/Position');
  balloonref.on("value", readHeight,showError);
}

// function to display UI



function draw() {
  background(bg);

  


  if(keyDown(LEFT_ARROW)){
   
    //write code to move air balloon in left direction
    updateHeight(-10,0)
    
    
    
  }
  else if(keyDown(RIGHT_ARROW)){
   
    //write code to move air balloon in right direction
    updateHeight(10,0)
    
  }
  else if(keyDown(UP_ARROW)){
    
    //write code to move air balloon in up direction
    updateHeight(0,-10)
   
    balloon.scale = balloon.scale -0.01
  }
  else if(keyDown(DOWN_ARROW)){
   
    //write code to move air balloon in down direction
    updateHeight(0,10)
   
    balloon.scale = balloon.scale + 0.01
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("Instructions: Use the arrow keys to move!",40,40);
}

function updateHeight(x,y)
{
  database.ref('Balloon/Position').update({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readHeight(data)
{
  position = data.val();
  console.log(position.x);
  balloon.x = position.x;
  balloon.y = position.y;
}

function showError()
{
    console.log("Error in writing the database");
}
