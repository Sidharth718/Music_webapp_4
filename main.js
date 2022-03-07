music1 = "";
music2 = "";
lfwx = "";
lfwy = "";
rgwx = "";
rgwy = "";
lwscore = 0;
song_1 = "";


function preload(){
music2 = loadSound("music.mp3");
music1 = loadSound("music2.mp3");
}

function setup(){
canvas = createCanvas(600,500);
canvas.position(420, 210 );
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video, modelLoaded)
posenet.on('pose', gotPoses)
}

function modelLoaded(){
console.log("The posenet is initialized!");
}

function draw(){
image(video, 0, 0, 600, 500);
fill("red");
stroke("red");

song_1 = music1.isPlaying();
console.log(song_1);

if(lwscore > 0.01){
    circle(lfwx, lfwy, 20);
    music2.stop();
    if(song_1 == false ){
        music1.play()
    }
    else{
      document.getElementById("Song_name").innerHTML = "Peter Pan Song "
    }
}
}


function gotPoses(results){

    if(results.length > 0){
    console.log(results);

    lwscore = results[0].pose.keypoints[9].score;
    console.log(lwscore);

    lfwx = results[0].pose.leftWrist.x;
    lfwy = results[0].pose.leftWrist.y;
    console.log("Left Wrist X is " + lfwx + " and Left Wrist Y is " + lfwy);
    
    rgwx = results[0].pose.rightWrist.x;
    rgwy = results[0].pose.rightWrist.y;
    console.log("Right Wrist X is " + rgwx + " and Right Wrist Y is " + rgwy);

    }
}
