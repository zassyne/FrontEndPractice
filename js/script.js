
function Person (name, age) {
	
	this.name = name;
	this.age = age;
	

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
		addPropertyTo(someone);
		console.log(someone.addedProperty);
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

