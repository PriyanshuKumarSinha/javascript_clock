var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight/2;
var c = canvas.getContext('2d');



var radius = canvas.height/2.1;
var radius2 = radius -12;
    
var x = canvas.width/2;
var y = canvas.height/2;


window.addEventListener('resize', 
    function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/2;
    x = canvas.width/2;
    y = canvas.height/2;
    c.clearRect(0,0,innerWidth, innerHeight)
    myFunction()
    }
)

myFunction();
function myFunction() {
  document.querySelector(".clock-bg").style.height = `${innerHeight/2.5}px`;
  document.querySelector(".clock-bg").style.width = `${innerWidth}px`;

}

class Circle{
    constructor(radius2, strokeStyles, fillStyles){
        this.radius = radius2;
        this.strokeStyle = strokeStyles;
        this.fillStyle = fillStyles;
    }
    draw(){
        c.beginPath();
        c.arc(x, y, this.radius, 0, Math.PI*2, false);
        // c.strokeStyle = this.strokeStyle;
        c.fillStyle = this.fillStyle;
        c.fill();
        c.stroke();

    }
}

circleArray = []

function createCircles(){
    var circle1 = new Circle(radius, 'gray', '#7D6B7D');
    var circle2 = new Circle(radius2, 'gray', '#978897');

    circleArray.push(circle1);
    circleArray.push(circle2);

}


function drawTimeStamps(){
    var timeStamp = 1
    var startingAngle = 30
    var endingAngle = 360
    for (let angle = startingAngle; angle <= endingAngle; angle += 30){
        c.beginPath();
        fontSize = 13
        c.font = `bold ${fontSize}px Arial`
        c.fillStyle = "#7D6B7D";
        c.fillText(timeStamp,(x + Math.sin((Math.PI/180)*angle) * (radius2-12))-4, (y - Math.cos((Math.PI/180)*angle) * (radius2-12))+4);
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
    c.strokeStyle = '#7D6B7D';
    c.lineWidth = 2;
    c.lineTo((x + Math.sin((Math.PI/180)*6*time().seconds) * (radius2-20)), (y - Math.cos((Math.PI/180)*6*time().seconds) * (radius2-20)))
    c.stroke();

        //1 minute
    c.beginPath();
    c.moveTo(x,y);
    c.strokeStyle = '#7D6B7D';
    c.lineWidth = 4;
    c.lineTo((x + Math.sin((Math.PI/180)*6*time().minutes) * (radius2-30)), (y - Math.cos((Math.PI/180)*6*time().minutes) * (radius2-30)))
    c.stroke();

    //1 hour
    c.beginPath();
    c.moveTo(x,y);
    c.lineWidth = 8;
    c.strokeStyle = '#7D6B7D';
    c.lineTo((x + Math.sin((Math.PI/180)*30*time().hours) * (radius2-35)), (y - Math.cos((Math.PI/180)*30*time().hours) * (radius2-35)))
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
    var circle3 = new Circle(4, 'gray', '#7D6B7D');
    circle3.draw();
}

displayTimes();




