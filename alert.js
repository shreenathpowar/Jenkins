console.log('hello jenkins');
let button = document.getElementsByClassName("jenkins-button jenkins-button--primary jenkins-!-build-color");
console.log(button);
button.onclick = function() { buildPopup() };

let buildPopup = () => {
	console.log("buildPopup called");
	alert("Proceed with build?")
}
