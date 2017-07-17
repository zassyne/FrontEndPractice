



(function main() {

	name = "mike";
	name = capitalize(name);
	
	function sayHi() {
		
		alert("Hi " + name);
	}
	
	sayHi();
	
})();





// Capitalize the first letter //
function capitalize(name) {
	return name[0].toUpperCase() + name.substr(1, name.length - 1);
}


// Get current date //
function getTheDateToday() {
	return new Date().toDateString();
}

