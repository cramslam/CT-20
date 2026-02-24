let mygames;

function preload(){
  mygames = loadJSON('games.json')
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(15, 15, 35);
  
  // json object into array for iteration
  let gamearray = Object.values(mygames);
  
  for (let i = 0; i < gamearray.length; i++) {
    let g = gamearray[i];
    // planet pos
    let x = (i + 1) * (width / (gamearray.length + 1));
    let y = height / 2 + sin(frameCount * 0.02 + i) * 50;
    // size = hours
    let size = map(g.hours, 0, 400, 20, 150);
    
    // hover check
    let d = dist(mouseX, mouseY, x, y);
    
    if (d < size / 2) {
      fill (255, 204, 0);
      
      textAlign(CENTER);
      fill(255);
      text(g.title, x, y - size/2 - 20);
      text(g.hours + " hours played", x, y - size/2 - 5);
      
      fill (255, 204, 0);
    } else {
      fill(70, 70, 150);
    }
    
    ellipse(x,y, size);
  }
  
  
}

