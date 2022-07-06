song = "";

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600 , 420);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    img(video , 0 , 0 , 600 , 420);
}

function play(){
    song.play();
}

function stop(){
    song.stop();
}