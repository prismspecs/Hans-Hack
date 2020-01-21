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
//btn.addEventListener('click','startAction',false);
btn.onclick = setupRepeat;

//$('body').append('<div id="diagnostics" style="position:absolute;top:100px;">hello</div>');

var myInterval;
var myTimer;

function setupRepeat() {
	$(".begin").click(); // begin survey
	myInterval = setInterval(repeatAction, 500);
}

var answerSequence = [0, 10, 5, 0, 0, 7, 1, 3, 2, 4, 1, 2, 5, 1, 3, 2, 1, 0, 0, 4];
var sequenceIndex = 0;

function repeatAction() {
	//$("#diagnostics").html(answerSequence[sequenceIndex]);

	console.log("Answering question " + (parseInt(sequenceIndex) + 1) + " with #" + answerSequence[sequenceIndex]);

	$(".answer[value='" + answerSequence[sequenceIndex++] + "']").click();

	if (sequenceIndex == 20) {

		// we've reached the end
		clearInterval(myInterval);
		myTimer = setInterval(startTimer, 10000);

		console.log("sleep starting");

		sequenceIndex = 0;


	}
}

function startTimer() {
	console.log("sleep ending");
	setupRepeat();
	clearInterval(myTimer);
}