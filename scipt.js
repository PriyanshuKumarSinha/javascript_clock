var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');



var radius = canvas.height/4;
var radius2 = radius -25;
    
var x = canvas.width/2;
var y = canvas.height/4+100;


window.addEventListener('resize', 
    function(){
    canvas.width = window.innerWidth;
    x = canvas.width/2;
    c.clearRect(0,0,innerWidth, innerHeight)
    
    }
)

class Circle{
    constructor(radius2, strokeStyles, fillStyles, lineWidth){
        this.radius = radius2;
        this.strokeStyle = strokeStyles;
        this.fillStyle = fillStyles;
        this.lineWidth = lineWidth;

    }
    draw(){
        c.beginPath();
        c.arc(x, y, this.radius, 0, Math.PI*2, false);
        c.shadowBlur = 10;
        c.shadowColor = "#3b3b3b";
        c.fillStyle = this.fillStyle;
        c.lineWidth = this.lineWidth;
        c.fill();
        c.stroke();

    }
}

circleArray = []

function createCircles(){
    var circle2 = new Circle(radius2, 'white', '#f4f4f5', 30);
    
    circleArray.push(circle2);

}


function drawTimeStamps(){
    var timeStamp = 1
    var startingAngle = 30
    var endingAngle = 360
    for (let angle = startingAngle; angle <= endingAngle; angle += 30){
        c.beginPath();
        fontSize = 20
        c.font = `bold ${fontSize}px Arial`
        c.shadowBlur = 0;
        c.fillStyle = "#3b3b3b";
        c.fillText(timeStamp,(x + Math.sin((Math.PI/180)*angle) * (radius2-35))-4, (y - Math.cos((Math.PI/180)*angle) * (radius2-35))+4);
        timeStamp += 1;
    }
}

function time(){
    var d = new Date();
    var time = {
        hours : d.getHours(),
        minutes : d.getMinutes(),
        seconds : d.getSeconds()
    }
    return time
}

function displayTime(){
    // 1 second
    c.beginPath();
    c.moveTo(x,y);
    c.strokeStyle = 'red';
    c.lineWidth = 2;
    c.lineTo((x + Math.sin((Math.PI/180)*6*time().seconds) * (radius2-35)), (y - Math.cos((Math.PI/180)*6*time().seconds) * (radius2-35)))
    c.stroke();

        //1 minute
    c.beginPath();
    c.moveTo(x,y);
    c.strokeStyle = 'black';
    c.lineWidth = 4;
    c.lineTo((x + Math.sin((Math.PI/180)*6*time().minutes) * (radius2-45)), (y - Math.cos((Math.PI/180)*6*time().minutes) * (radius2-45)))
    c.stroke();

    //1 hour
    c.beginPath();
    c.moveTo(x,y);
    c.lineWidth = 8;
    c.strokeStyle = '#DCDCDC';
    c.lineTo((x + Math.sin((Math.PI/180)*30*time().hours) * (radius2-50)), (y - Math.cos((Math.PI/180)*30*time().hours) * (radius2-50)))
    c.stroke();
}



createCircles();
// drawTimeStamps();
// displayTime();
// drawCircles();


function displayTimes(){
    requestAnimationFrame(displayTimes);
    c.clearRect(0,0,innerWidth, innerHeight)
    for (let i = 0; i < circleArray.length; i++){
        circleArray[i].draw();
    }
    drawTimeStamps();
    displayTime();
    var circle3 = new Circle(10, 'gray', '#7D6B7D',0);
    circle3.draw();
}

displayTimes();




