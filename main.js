function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    strokeWeight(40);
    stroke(255,0,0);
    fill(255,255,255);
    rect(75,35,490,410);
    strokeWeight(1);
    stroke(50,205,50);
    fill(50,205,50);
    circle(560,50,100);
    circle(80,430,100);
    circle(80,50,100);
    circle(560,430,100);
    image(video,160,120,320,240);
}

function take_snapshot(){
    save('Digital_Fram.png')
}