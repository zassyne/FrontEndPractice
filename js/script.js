
function Person (name, age) {
	
	this.name = name;
	this.age = age;
	

};

// Some basic DOM manipulation
window.onload = function () {
	
	var mainTitles = document.getElementsByTagName("h1");
	
	for(var i = 0; i<mainTitles.length; i++) {
		mainTitles[i].className += "firstLevelTitle";
	}
	
	var secondTitles = document.getElementsByTagName("h2");
	
	for(var i = 0; i<secondTitles.length; i++) {
		secondTitles[i].className += "secondLevelTitle";
	}
	
	
	
};

(function main() {

	name = "mike";
	name = capitalize(name);
	
	function sayHi() {
		
		alert("Hi " + name);
	}
	
	
	var someone = new Person("Frank", 40);
	
	// Trying to add a property to an object
	try {
		
		addPropertyTo(Object.create(someone));
		
		// Check whether the property was added
		if(someone.addedProperty) {
			console.log(someone.addedProperty);
		}
	}
	catch (e) {
		console.log(e);
	}
	
		
	
})();



// Add an arbitrary propriety to an object 
function addPropertyTo(object) {
	
	if(typeof object != "object") {
		throw new TypeError();
	}
	
	object.addedProperty = "This property was added to the object!";
	
}



// Capitalize the first letter
function capitalize(name) {
	return name[0].toUpperCase() + name.substr(1, name.length - 1);
}


// Get current date
function getTheDateToday() {
	return new Date().toDateString();
}

