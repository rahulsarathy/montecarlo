window.onload = function() {
    console.log("js loaded");
};

var red = 0;
var blue = 0;
ratio = 1;

function startMonteCarlo() {
    var diameter = getDiameter();
    var height = diameter;
    var width = diameter;

    var i = 0, howManyTimes = 100000;
    function f() {
        var x = getRandomInt(width);
        var y = getRandomInt(height);
        drawCoordinates(x, y);
        i++;
        var redtitle = document.getElementById('rednum');
        redtitle.innerHTML = red;
        var bluetitle = document.getElementById('bluenum');
        bluetitle.innerHTML = blue;
        var ratiotitle = document.getElementById('rationum');
        ratiotitle.innerHTML = 4 * (blue / (red + blue));        
        if( i < howManyTimes ){
            setTimeout( f, 0 );
        }
    }
    f();
}

$("#start").click(function() {
	startMonteCarlo();
});

$("#graph").mousemove(function(e) {
    console.log(getMousePos(e));
});

function getMousePos(evt) {
    var graph = document.getElementById('graph');
    var rect = graph.getBoundingClientRect(), // abs. size of element
    scaleX = graph.width / rect.width,    // relationship bitmap vs. element for X
    scaleY = graph.height / rect.height;  // relationship bitmap vs. element for Y

  return {
    x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}

function normalizeCoords(x, y) {
    var graph = document.getElementById('graph');
    var rect = graph.getBoundingClientRect(), // abs. size of element
    scaleX = graph.width / rect.width,    // relationship bitmap vs. element for X
    scaleY = graph.height / rect.height;  // relationship bitmap vs. element for Y

  return {
    x: (x - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (y - rect.top) * scaleY     // been adjusted to be relative to element
  }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function drawCoordinates(x,y){
    var pointSize = 3; // Change according to the size of the point.
    var ctx = document.getElementById("graph").getContext("2d");
    var distance = distanceFromOrigin(x, y);
    var radius = getDiameter() / 2.0;

    if (distance > radius) {
        ctx.fillStyle = "#ff2626"; // Red color  
        red++;
    }
    else {
        ctx.fillStyle = '#33B2FF';
        blue++;
    }


    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.
}

function distanceFromOrigin(x, y){

    var radius = getDiameter() / 2;

    var a = radius - x;
    var b = radius - y;
    var c = Math.sqrt( a*a + b*b );
    return c;
}

function getDiameter() {
    var canvas = document.getElementById('graph');
    var height = canvas.height;
    var width = canvas.width;
    return height;
}