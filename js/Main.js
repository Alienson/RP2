var canvas, canvasContext;

var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;

var firstCar = new carClass("First Car");
var secondCar = new carClass("Second Car");

window.onload = function() {
    canvas = document.createElement('canvas');
    
    canvas.setAttribute('width', CANVAS_WIDTH);
    canvas.setAttribute('height', CANVAS_HEIGHT);
    
    canvas.style.border="1px solid black";
    document.body.appendChild (canvas);
    canvasContext = canvas.getContext('2d');
    canvasContext.strokeStyle = "#000000";
    canvasContext.lineWidth = 3;

	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

	loadImages();
}

function imageLoadingDoneSoStartGame() {
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();

	loadLevel(levelList[levelNow]);
}

function nextLevel() {
	levelNow++;
	if(levelNow >= levelList.length) {
		levelNow = 0;
	}
	loadLevel(levelList[levelNow]);
}

function loadLevel(whichLevel) {
	trackGrid = whichLevel.slice();
    var firstName = firstCar.name;
    var secondName = secondCar.name;
	secondCar.reset(otherCarPic, secondName);
	firstCar.reset(carPic, firstName);
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	firstCar.move();
	secondCar.move();
}

function drawAll() {
	drawTracks();
	firstCar.draw();
	secondCar.draw();
} 