


function createXHR() {
	
	try { 
		
		return new XMLHttpRequest();
	
	} catch(e) {
		console.log(e);
	}
	
}


function sendRequest() {
	
	var xhr = createXHR();
	
	if(xhr) {
		
		xhr.open("GET", "http://localhost:8080/HelloFrontEnd/home", true);
		xhr.onreadystatechange = function() { 
			handleResponse(xhr);
		};
		xhr.send(null);
	}
}

function handleResponse(xhr) {
	
	if(xhr.readyState == 4 && xhr.status == 200) {
		
		var parsedResponse = xhr.responseXML;
		if(parsedResponse)
			var msg = parsedResponse.getElementsByTagName("message")[0].firstChild.nodeValue;
		
		var ouput = document.getElementById("ajaxOutput");
		output.innerHTML = msg;
		
	}
}
