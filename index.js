window.onload = function() {
    console.log("js loaded");
};

function startMonteCarlo() {
    var canvas = document.GetElementById("graph");
    var height = canvas.height;
    var width = canvas.width;

    var x = getRandomInt(500);
    var y = getRandomInt(500);

    drawCoordinates(x, y)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



function drawCoordinates(x,y){
    var pointSize = 3; // Change according to the size of the point.
    var ctx = document.getElementById("graph").getContext("2d");


    ctx.fillStyle = "#ff2626"; // Red color

    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.
}