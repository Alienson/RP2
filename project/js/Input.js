var KEY_LEFT_ARROW = 37;
var KEY_UP_ARROW = 38;
var KEY_RIGHT_ARROW = 39;
var KEY_DOWN_ARROW = 40;

var KEY_W = 87;
var KEY_A = 65;
var KEY_S = 83;
var KEY_D = 68;

var mouseX = 0;
var mouseY = 0;

function keySet(keyEvent, whichCar, setTo) {
	if (keyEvent.keyCode === whichCar.controlKeyLeft) {
		whichCar.keyHeld_TurnLeft = setTo;
	}
	if (keyEvent.keyCode === whichCar.controlKeyRight) {
		whichCar.keyHeld_TurnRight = setTo;
	}
	if (keyEvent.keyCode === whichCar.controlKeyUp) {
		whichCar.keyHeld_Gas = setTo;
	}
	if (keyEvent.keyCode === whichCar.controlKeyDown) {
		whichCar.keyHeld_Reverse = setTo;
	}
}

function keyPressed(evt) {
	keySet(evt, secondCar, true);
	keySet(evt, firstCar, true);
}

function keyReleased(evt) {
	keySet(evt, secondCar, false);
	keySet(evt, firstCar, false);
}

function setupInput() {
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	secondCar.setupInput(KEY_W, KEY_D, KEY_S, KEY_A);
	firstCar.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
} 



