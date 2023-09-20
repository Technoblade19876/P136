noseX = 0;
noseY = 0;

leftwristX = 0;
rightwristX = 0;

size = 0;

function setup() {
    canvas = createCanvas(800, 600);
    video = createCapture(VIDEO);
    video.size(420, 420);
    canvas.position(600, 250);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function draw(){
        background("#00ffff");

        text("This is the text" , noseX, noseY);
        textSize(size)

        size = leftwristX - rightwristX;
        size = Math.floor(size);
        console.log(size);
    }
    
    function modelLoaded() {
        console.log("model loaded")
        
    }
    
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);

            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
    
            rightwristX = results[0].pose.rightWrist.x;
            leftwristX = results[0].pose.leftWrist.x;
        }

    }