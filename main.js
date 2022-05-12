Status = "";
input_text = "";

function setup(){
    canvas = createCanvas(300,290);
    canvas.position(680,255);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}

function draw (){
    image(video, 0 , 0 , 300 , 290);
}

function start(){
    object_Detector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_text = document.getElementById("input_id").value;
}

function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}