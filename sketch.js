function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(40,30,20);
  
  let h = hour();
  let m = minute();
  let s = second();
  
  let totaltime = (h * 3600 ) + (m * 60) + s;
  
  let waterheight = map(totaltime, 0, 86400, height, 0);
  
  fill (0, 150, 150, 150); 
  rect(0, height - waterheight, width, waterheight)
  
  for(let i = 0; i < s; i++) {
    fill(255,255,255,50);
    
    let x = noise(i*10, frameCount *0.005) * width;
    let y = (height - waterheight) + noise(i * 20, frameCount *0.005) * waterheight;
    
    ellipse (x, y, 10);
  }
  
  //fill(100);
  //textSize(20);
  //text(`debug current time: ${h}:${m}:${s}`, 20, 70);
  
}
