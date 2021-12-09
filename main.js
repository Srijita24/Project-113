function preload() {

};

function setup() {
    canvas = createCanvas(800, 600);
    canvas.position(265, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video,0,0,800,600);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(10, 5, 760, 25);
    rect(10, 565, 760, 25);
    rect(5, 5, 23, 560);
    rect(770, 5, 23, 560);
    fill(222, 49, 99);
    stroke(222, 49, 99);
    circle(20, 20, 40);
    circle(780, 20, 40);
    circle(780, 580, 40);
    circle(20, 580, 40);
    
}

function take_snapshot() {
    save('Srijita_picture.png');
}