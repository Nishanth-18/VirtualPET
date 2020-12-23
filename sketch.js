//Create variables here

var dog,dogImage,happyDog,database,foodS,foodStock
var database

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite (250,250,50,50)
  dog.addImage(dogImage)
  dog.scale = 0.25

  foodStock=database.ref('Food');
   foodStock.on("value",readStock);

   
   


  
}


function draw() {  

  background(46,129,87);

  if(keyWentDown(DOWN_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  
  fill(255,255,254);
  stroke("black");
  text("Food Remaining : " +foodS,170,200);
  textSize(13);
  text("Note: Press Down_Arrow Key To Feed Drago Milk");


}

function readStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{
  if(x<=0)
  {
    x=0;
  }
  else{
    x=x-1
  }
  
  database.ref('/').update({Food:x})
}



