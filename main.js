x = 0;
y = 0;
rect_stat = "";
circle_stat = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recog = new SpeechRecognition();


function start(){
    document.getElementById("status").innerHTML = "System is Listening";
    recog.start();
    
}

recog.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "System has recognized the speech as " + content;

    if (content=="circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Drawing Circle";
        circle_stat = "set";
    }
    if (content=="rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Drawing Rectangle";
        rect_stat = "set";
    }
}


function setup(){
    canvas = createCanvas(900,600);

}


function draw(){
    if(circle_stat = "set"){
        radius = Math.floor(Math.random() *100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        circle_stat = "";
    }
    if(rect_stat = "set"){
        w = Math.floor(Math.random() *100);
        h = Math.floor(Math.random() *100);
        rect(x,y, w,h);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        circle_stat = "";
    }
}