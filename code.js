// ==UserScript==
// @name     Hack Hans
// @version  1
// @grant    none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

var btn = document.createElement('input');
btn.setAttribute('type', 'button');
btn.style.position = "absolute";
btn.setAttribute('value', 'Hack Hans');
document.body.appendChild(btn);
btn.onclick = setupRepeat;

var myInterval;
var myTimer;

//var answerCount = 0;

function setupRepeat() {
	$(".begin").click(); // begin survey
	myInterval = setInterval(repeatAction, 500);

	// for randomization if needed
	//answerCount = 0;
}

var answerSequence = [0, 10, 5, 0, 0, 7, 1, 3, 2, 4, 1, 2, 5, 1, 3, 2, 1, 0, 0, 4];
var sequenceIndex = 0;

function repeatAction() {
	//$("#diagnostics").html(answerSequence[sequenceIndex]);

	// console.log("Answering question " + (parseInt(sequenceIndex) + 1) + " with #" + answerSequence[sequenceIndex]);

	// find total number of answers (for randomization)
	//var numItems = $('.answer').length - answerCount;
	//answerCount = $('.answer').length;
	//console.log("there are " + numItems + " answers");

	var theAnswer = 0;

	switch (sequenceIndex) {
		case 0:
			var percentages = [2, 2, 23, 33, 15, 15, 9, 2];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 1:
			var percentages = [47, 14, 15, 3, 1, 2, 13, 0, 1, 3, 1];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 2:
			var percentages = [30, 4, 2, 6, 1, 1, 15, 41];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 3:
			var percentages = [7, 40, 42, 11];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 4:
			var percentages = [3, 6, 43, 37, 11];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 5:
			var percentages = [8, 47, 28, 12, 2, 1, 1, 1];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 6:
			var percentages = [4, 1, 14, 2, 5, 14, 27, 15, 9, 9];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 7:
			var percentages = [46, 44, 5, 5];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 8:
			var percentages = [66, 19, 15];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 9:
			var percentages = [54, 42, 3, 1, 1];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 10:
			var percentages = [2, 13, 82, 2];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 11:
			var percentages = [9, 78, 13];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 12:
			var percentages = [30, 20, 25, 20, 2, 2, 1];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 13:
			theAnswer = 1;
			break;

		case 14:
			var percentages = [2, 60, 3, 3, 25, 6];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 15:
			var percentages = [32, 56, 4, 8];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 16:
			var percentages = [90, 4, 6];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 17:
			var percentages = [70, 30];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 18:
			var percentages = [87, 5, 8];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

		case 19:
			var percentages = [28, 35, 15, 1, 2, 2, 8, 8];
			//theAnswer = percentageGuess(percentages.length, percentages);
			theAnswer = getRandom(0, percentages.length - 1);
			break;

	}

	sequenceIndex++;

	console.log("Answering question " + parseInt(sequenceIndex) + " with #" + theAnswer);

	$(".answer[value='" + theAnswer + "']").click();

	if (sequenceIndex == 20) {

		// we've reached the end
		clearInterval(myInterval);
		myTimer = setInterval(startTimer, 10000);

		console.log("sleep starting");

		sequenceIndex = 0;

	}
}

function percentageGuess(numAnswers, percentages) {

	var convertedPercentages = [];
	var lastFloor = 0;
	//convertedPercentages[0] = 0;

	for (var i = 0; i < numAnswers; i++) {
		convertedPercentages[i] = percentages[i] + lastFloor;
		lastFloor = convertedPercentages[i];
	}

	//console.log(convertedPercentages);

	var rando = Math.floor(Math.random() * 101);
	//console.log(rando);

	var theAnswer = 0;

	for (var i = 1; i < numAnswers; i++) {
		if (rando >= convertedPercentages[i - 1] && rando < convertedPercentages[i]) {
			theAnswer = i;
		}
	}

	//alert(theAnswer);

	//console.log(theAnswer);

	return theAnswer;

}

function startTimer() {
	console.log("sleep ending");
	setupRepeat();
	clearInterval(myTimer);
}

function getRandom(min, max) { // min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}