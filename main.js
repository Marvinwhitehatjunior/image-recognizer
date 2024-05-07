video="";


function setup(){
    canvas=createCanvas(500,400);
    canvas.position(679,340);
    video=createCapture(VIDEO);
    video.size(500,400);
    video.hide()
}





function draw(){
    image(video,0,0,500,400);
    if(status !=""){
        objectDetector.detect(video,gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status:Objects Detected";
            document.getElementById("number_of_objects").innerHTML="number of objects detected are:"+objects.length;;

            
        }
    }
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:detectig objects";
    let inputValue = document.getElementById('inputBox').value;
}


function modelLoaded(){
    console.log("model is loaded");
    status=true;
    

}

function gotResult(error,results){
    if(error){
        console.error(error);
    }

    console.log(results);
    objects=results;
}