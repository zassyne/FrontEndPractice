


window.onload = function () {
	
	// Get the answers elements and hide all of them.
	var answersElements = document.getElementsByClassName("answer");
	for(var i = 0; i<answersElements.length; i++) {
		answersElements[i].style.display = 'none';
	}
	
	// Get the questions "so that we can locate what answer to show/hide" and attach to it a "listener".
	var questionsElements = document.getElementsByClassName("question");
	for(var i = 0; i<questionsElements.length; i++) {
		
		questionsElements[i].onclick = function () { 
			toggleAnswer(this);
		}
		questionsElements[i].onmouseover = function() {
			this.style.cursor = "pointer";
		}
	}
	
};
	

// Function that implements the show/hide process.
function toggleAnswer(question) {
	
	var display = question.nextElementSibling.style.display;
	
	if(display == 'none') {
		question.nextElementSibling.style.display = 'block';
	}
	else {
		question.nextElementSibling.style.display = 'none';
	}
}