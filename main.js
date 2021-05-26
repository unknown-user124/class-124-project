function setup() {
    video=createCapture(VIDEO);
    video.size(560,560);
    canvas=createCanvas(560,560);
    canvas.position(560,160);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    background('#3446eb');
}
function modelLoaded() {
console.log('PoseNEt is initialized');
}
function gotPoses(results) {
    if (results.length>0)
     {
        console.log(results);
    }
}