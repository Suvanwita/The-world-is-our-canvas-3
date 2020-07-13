/*var painting= [];
var currentPath = [];
var database;
var point;

function setup() {
  var canvas = createCanvas(700,500);
 
  database=firebase.database();
  var databaseRef=database.ref("cursor/currentPath");
  databaseRef.on("value",startPath,endPath);

  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
}

function startPath(data){
   currentPath=data.val();
   currentPath = [];
   painting.push(currentPath);
}

function endPath(){

}

function draw() {
  background("pink");
  if(mouseIsPressed){
    database.ref("cursor/currentPath").set(
     point = {
      x : mouseX,
      y : mouseY
    }//point close
    )
    currentPath.push(point);
    
  } 


 

  noFill("purple");
  stroke("purple"); 
  strokeWeight(10);

  for(var i = 0; i< painting.length; i++){
    var path = painting[i];
    beginShape();
    for(var p = 0; p< path.length; p++){
        vertex(path[p].x, path[p].y);
    }
    endShape();
  }//for loop close

}
 */  




/////////////////////////////////////////////////////////////////////


var painting= [];
var currentPath = [];
var database;
var point;

function setup() {
  var canvas = createCanvas(1000,600);
 
  database=firebase.database();
  var databaseRef=database.ref("cursor/currentPath");
  databaseRef.on("value",startPath,endPath);

  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
}

function startPath(){
   currentPath = [];
   painting.push(currentPath);
}

function endPath(){

}

function draw() {
  background("pink");
  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
    }
    
    currentPath.push(point);

  } 


  button = createButton('CLEAR DRAWINGS');
  button.position(240,600);
 
  if(button.mousePressed()){
    currentPath=[];
  }



  noFill("purple");
  stroke("purple"); 
  strokeWeight(10);

  for(var i = 0; i< painting.length; i++){
    var path = painting[i];
    beginShape();
    for(var p = 0; p< path.length; p++){
        vertex(path[p].x, path[p].y);
    }
    endShape();
  }

}