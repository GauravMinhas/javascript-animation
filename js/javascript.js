var shapes;
var ctx;
var x = 0;
var y = 0;
var s = 0.2;
var scale = 0.8;
var translateX = 520;
var translateX2 = 560;
var translateX3 = 540;
var translateY = 150;

function drawMe() {
    ctx = document.getElementById("myShapes").getContext("2d");

    var interval = setInterval(animateSmoke, s);
}

function speed() {
    s = document.getElementById("speeder").value;
}



var animateSmoke = function () {
    ctx.clearRect(translateX, 0, 400, 300);
    y = ctx.canvas.height / 2;
    var temp = (x * s) / 400;
    ctx.beginPath();
    ctx.ellipse(x * s + translateX, y, 40 * temp, 20 * temp, 0, 0, 10 * Math.PI);
    ctx.lineTo(x * s + translateX, y - 100);
    ctx.ellipse(x * s + translateX, y, 40 * temp, 20 * temp, Math.PI / 3, 0, 10 * Math.PI);
    ctx.lineTo(x * s + translateX, y - 100);
    ctx.ellipse(x * s + translateX, y, 40 * temp, 20 * temp, Math.PI / 3 + Math.PI / 3, 0, 10 * Math.PI);
    ctx.lineTo(x * s + translateX, y - 100);
    ctx.fillStyle = "silver";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x * s + translateX2, y - 20, 80 * temp, 40 * temp, 0, 0, 10 * Math.PI);
    ctx.lineTo(x * s + translateX2, y - 20);
    ctx.ellipse(x * s + translateX2, y - 20, 80 * temp, 40 * temp, Math.PI / 3, 0, 10 * Math.PI);
    ctx.lineTo(x * s + translateX2, y - 20);
    ctx.ellipse(x * s + translateX2, y - 20, 80 * temp, 40 * temp, Math.PI / 3 + Math.PI / 3, 0, 10 * Math.PI);
    ctx.lineTo(x * s + translateX2, y - 20);
    ctx.fillStyle = "silver";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x * s + translateX3, y + 20, 60 * temp, 30 * temp, 0, 0, 10 * Math.PI);
    ctx.lineTo(x * s + translateX3, y + 20);
    ctx.ellipse(x * s + translateX3, y + 20, 60 * temp, 30 * temp, Math.PI / 3, 0, 10 * Math.PI);
    ctx.lineTo(x * s + translateX3, y + 20);
    ctx.ellipse(x * s + translateX3, y + 20, 60 * temp, 30 * temp, Math.PI / 3 + Math.PI / 3, 0, 10 * Math.PI);
    ctx.lineTo(x * s + translateX3, y + 20);
    ctx.fillStyle = "silver";
    ctx.fill();
    ctx.closePath();

    x += 5;
    y += 3;
    if (x > ctx.canvas.width / s) {
        x = 0;
        y = 0;
    }
};

function drawShapes() {
    shapes = document.getElementById("myShapes").getContext("2d");

    //https://www.youtube.com/watch?v=cttyhbBd7EM
    //Link of how we drew the car

    //Car Body
    shapes.beginPath();
    shapes.moveTo(292 * scale, 18 * scale + translateY);
    shapes.bezierCurveTo(350 * scale, 0 * scale + translateY, 470 * scale, 0 * scale + translateY, 540 * scale, 12 * scale + translateY);
    shapes.bezierCurveTo(580 * scale, 20 * scale + translateY, 630 * scale, 20 * scale + translateY, 647 * scale, 57 * scale + translateY);
    shapes.lineTo(647 * scale, 120 * scale + translateY);
    shapes.lineTo(438 * scale, 200 * scale + translateY);
    shapes.lineTo(440 * scale, 81 * scale + translateY);
    shapes.lineTo(292 * scale, 18 * scale + translateY);
    shapes.lineWidth = 0;
    shapes.stroke();
    shapes.fillStyle = "yellow";
    shapes.fill();
    shapes.lineWidth = 0;
    shapes.closePath();

    //Front windshield
    shapes.beginPath();
    shapes.moveTo(172 * scale, 85 * scale + translateY);
    shapes.lineTo(291 * scale, 18 * scale + translateY);
    shapes.lineTo(450 * scale, 21 * scale + translateY);
    shapes.lineTo(438 * scale, 96 * scale + translateY);
    shapes.lineWidth = 1;
    shapes.stroke();
    shapes.fillStyle = "black";
    shapes.fill();
    shapes.closePath();

    //Front bumper trim
    shapes.beginPath();
    shapes.ellipse(190 * scale, 172 * scale + translateY, 180 * scale, 50 * scale, Math.PI, Math.PI + Math.PI / 6, 2 * Math.PI - Math.PI / 6);
    shapes.lineTo(16 * scale, 186 * scale + translateY);
    shapes.lineTo(38 * scale, 148 * scale + translateY);
    shapes.lineTo(47 * scale, 154 * scale + translateY);
    shapes.ellipse(199 * scale, 133 * scale + translateY, 163 * scale, 56 * scale, 0, 2 * Math.PI - (Math.PI + Math.PI / 6), Math.PI / 6, true);
    shapes.lineTo(371 * scale, 153 * scale + translateY);
    shapes.lineTo(341 * scale, 202 * scale + translateY);
    shapes.lineWidth = 1;
    shapes.stroke();
    shapes.fillStyle = "yellow";
    shapes.fill();
    shapes.closePath();

    //Passenger side bump
    shapes.beginPath();
    shapes.moveTo(39 * scale, 147 * scale + translateY);
    shapes.lineTo(47 * scale, 154 * scale + translateY);
    shapes.bezierCurveTo(55 * scale, 140 * scale + translateY, 203 * scale, 73 * scale + translateY, 208 * scale, 79 * scale + translateY);
    shapes.bezierCurveTo(170 * scale, 30 * scale + translateY, 37 * scale, 90 * scale + translateY, 39 * scale, 149 * scale + translateY);
    shapes.lineWidth = 1;
    shapes.stroke();
    shapes.fillStyle = "yellow";
    shapes.fill();
    shapes.closePath();

    //Passenger headlamp
    shapes.beginPath();
    shapes.moveTo(39 * scale, 147 * scale + translateY);
    shapes.lineTo(47 * scale, 154 * scale + translateY);
    shapes.bezierCurveTo(500 * scale, 128 * scale + translateY, 300 * scale, 40 * scale + translateY, 90 * scale, 105 * scale + translateY);
    shapes.bezierCurveTo(190 * scale, 35 * scale + translateY, 35 * scale, 90 * scale + translateY, 39 * scale, 140 * scale + translateY);
    shapes.lineWidth = 1;
    shapes.stroke();
    shapes.fillStyle = "white";
    shapes.fill();
    shapes.closePath();

    //Hood
    shapes.beginPath();
    shapes.moveTo(47 * scale, 154 * scale + translateY);
    shapes.bezierCurveTo(55 * scale, 140 * scale + translateY, 203 * scale, 73 * scale + translateY, 208 * scale, 79 * scale + translateY);
    shapes.lineTo(327 * scale, 82 * scale + translateY);
    shapes.lineTo(327 * scale, 169 * scale + translateY);
    shapes.ellipse(199 * scale, 133 * scale + translateY, 163 * scale, 56 * scale, Math.PI, (Math.PI + Math.PI / 6), 2 * Math.PI - Math.PI / 6);
    shapes.lineWidth = 1;
    shapes.stroke();
    shapes.fillStyle = "yellow";
    shapes.fill();
    shapes.closePath();

    //Driver side bump
    shapes.beginPath();
    shapes.moveTo(326 * scale, 83 * scale + translateY);
    shapes.bezierCurveTo(350 * scale, 70 * scale + translateY, 420 * scale, 65 * scale + translateY, 442 * scale, 82 * scale + translateY);
    shapes.bezierCurveTo(415 * scale, 85 * scale + translateY, 365 * scale, 148 * scale + translateY, 371 * scale, 154 * scale + translateY);
    shapes.lineTo(328 * scale, 169 * scale + translateY);
    shapes.lineTo(326 * scale, 83 * scale + translateY);
    shapes.lineWidth = 0;
    shapes.stroke();
    shapes.fillStyle = "yellow";
    shapes.fill();
    shapes.lineWidth = 0;
    shapes.closePath();

    //Driver headlamp
    shapes.beginPath();
    shapes.moveTo(326 * scale, 83 * scale + translateY);
    shapes.bezierCurveTo(320 * scale, 220 * scale + translateY, 420 * scale, 75 * scale + translateY, 440 * scale, 82 * scale + translateY);
    shapes.bezierCurveTo(415 * scale, 85 * scale + translateY, 365 * scale, 148 * scale + translateY, 371 * scale, 154 * scale + translateY);
    shapes.lineTo(328 * scale, 169 * scale + translateY);
    shapes.lineTo(326 * scale, 83 * scale + translateY);
    shapes.lineWidth = 0;
    shapes.stroke();
    shapes.fillStyle = "white";
    shapes.fill();
    shapes.lineWidth = 0;
    shapes.closePath();


    //Driver window
    shapes.beginPath();
    shapes.moveTo(583 * scale, 50 * scale + translateY);
    shapes.lineTo(450 * scale, 90 * scale + translateY);
    shapes.quadraticCurveTo(450 * scale, -30 * scale + translateY, 583 * scale, 50 * scale + translateY);
    shapes.lineWidth = 0;
    shapes.stroke();
    shapes.fillStyle = "black";
    shapes.fill();
    shapes.lineWidth = 0;
    shapes.closePath();

    //Door shape
    shapes.beginPath();
    shapes.moveTo(583 * scale, 50 * scale + translateY);
    shapes.bezierCurveTo(600 * scale, 50 * scale + translateY, 580 * scale, 100 * scale + translateY, 570 * scale, 135 * scale + translateY);
    shapes.lineTo(485 * scale, 165 * scale + translateY);
    shapes.stroke();
    shapes.closePath();

    //Front bumper
    shapes.beginPath();
    shapes.ellipse(191 * scale, 212 * scale + translateY, 190 * scale, 66 * scale, Math.PI, Math.PI + Math.PI / 6 + Math.PI / 12 - Math.PI / 96, 2 * Math.PI - Math.PI / 6, false);
    shapes.lineTo(16 * scale, 187 * scale + translateY);
    shapes.ellipse(190 * scale, 172 * scale + translateY, 180 * scale, 50 * scale, 0 * scale, Math.PI - Math.PI / 6, 2 * Math.PI + Math.PI / 6, true);
    shapes.lineTo(330 * scale, 258 * scale + translateY);
    shapes.lineWidth = 1;
    shapes.stroke();
    shapes.fillStyle = "yellow";
    shapes.fill();
    shapes.closePath();

    //Front driver fender
    shapes.beginPath();
    shapes.moveTo(330 * scale, 258 * scale + translateY);
    shapes.lineTo(438 * scale, 200 * scale + translateY);
    shapes.lineTo(443 * scale, 82 * scale + translateY);
    shapes.bezierCurveTo(415 * scale, 85 * scale + translateY, 365 * scale, 148 * scale + translateY, 371 * scale, 154 * scale + translateY);
    shapes.lineTo(345 * scale, 198 * scale + translateY);
    shapes.lineTo(330 * scale, 258 * scale + translateY);
    shapes.lineWidth = 1;
    shapes.stroke();
    shapes.fillStyle = "yellow";
    shapes.fill();
    shapes.closePath();

    //Front tire
    shapes.beginPath();
    shapes.ellipse(420 * scale, 200 * scale + translateY, 35 * scale, 50 * scale, Math.PI + Math.PI / 24, 0, 2 * Math.PI, false);
    //shapes.arc(420,200,50,0,2*Math.PI);
    shapes.stroke();
    shapes.fillStyle = "black";
    shapes.fill();
    shapes.closePath();

    //Front rim
    shapes.beginPath();
    shapes.ellipse(420 * scale, 200 * scale + translateY, 28 * scale, 40 * scale, Math.PI + Math.PI / 24, 0, 2 * Math.PI, false);
    // 	shapes.arc(420,200,40,0,2*Math.PI);
    shapes.stroke();
    shapes.fillStyle = "grey";
    shapes.fill();
    shapes.closePath();

    //Rear tire
    shapes.beginPath();
    shapes.ellipse(614 * scale, 130 * scale + translateY, 28 * scale, 40 * scale, Math.PI + Math.PI / 24, 0, 2 * Math.PI, false)
    //shapes.arc(614,130,35,0,2*Math.PI);
    shapes.stroke();
    shapes.fillStyle = "black";
    shapes.fill();
    shapes.closePath();

    //Rear rim
    shapes.beginPath();
    shapes.ellipse(614 * scale, 130 * scale + translateY, 21 * scale, 30 * scale, Math.PI + Math.PI / 24, 0, 2 * Math.PI, false);
    //shapes.arc(614,130,28,0,2*Math.PI);
    shapes.stroke();
    shapes.fillStyle = "grey";
    shapes.fill();
    shapes.closePath();
}
