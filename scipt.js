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

function displayTime(){
        //1 minute
    c.beginPath();
    c.moveTo(x,y);
    c.strokeStyle = '#C8C8C8';
    c.lineWidth = 4;
    c.lineTo((x + Math.sin((Math.PI/180)*6*time().minutes) * (radius2-60)), (y - Math.cos((Math.PI/180)*6*time().minutes) * (radius2-60)))
    c.stroke();

    //1 hour
    c.beginPath();
    c.moveTo(x,y);
    c.lineWidth = 8;
    c.strokeStyle = '#909090';
    c.lineTo((x + Math.sin((Math.PI/180)*(30*(time().hours + (time().minutes)/60))) * (radius2-70)), (y - Math.cos((Math.PI/180)*(30*(time().hours + (time().minutes)/60))) * (radius2-70)))
    c.stroke();
        // 1 second
        c.beginPath();
        c.moveTo(x,y);
        c.strokeStyle = '#ff0038';
        c.lineWidth = 2;
        c.lineTo((x + Math.sin((Math.PI/180)*6*time().seconds) * (radius2-120)), (y - Math.cos((Math.PI/180)*6*time().seconds) * (radius2-120)))
        c.stroke();
    
        // 1 second
        c.beginPath();
        c.moveTo(x,y);
        c.strokeStyle = '#ff0038';
        c.lineWidth = 2;
        c.lineTo((x - Math.sin((Math.PI/180)*6*time().seconds) * (radius2-40)), (y + Math.cos((Math.PI/180)*6*time().seconds) * (radius2-40)))
        c.stroke();
}

class Circle{
    constructor(radius, stroke, fill, width){
        this.radius = radius;
        this.width = width;
        this.fill = fill;
        this.stroke = stroke;

    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI*2, false);
        ctx.shadowBlur = this.stroke;
        ctx.shadowColor = "#3b3b3b";
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.stroke();

    }
}

var circle2 = new Circle(radius2, 10, '#f4f4f5', 30);
var circle3 = new Circle(8, 0.5, 'black',0);



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

var ctx = canvas.getContext('2d')




function displayTimes(){
    requestAnimationFrame(displayTimes);
    c.clearRect(0,0,innerWidth, innerHeight)
    ctx.strokeStyle = '#E0E0E0'
    ctx.lineWidth = 30;
    circle2.draw(ctx);

    drawTimeStamps();
    displayTime();
    c.strokeStyle = '#f4f4f5'
    c.lineWidth = 0;

    circle3.draw(c);
}

displayTimes();




