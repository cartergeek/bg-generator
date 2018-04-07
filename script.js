var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var generator = document.getElementById("generator");

function displayBackgroundCSS() {
	// body.style.background = "linear-gradient(to right, #ff0000, #0000ff)";
	body.style.background = "url('bg1.jpg') no-repeat, linear-gradient(to right, #ff0000, #0000ff) ";
	css.textContent = body.style.background + ";";
}
displayBackgroundCSS();

// Random generator
function generate() {
	function doRandom() {
		return Math.floor(Math.random() * 255);
	}
	var randomCol1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	var randomCol2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

// var random1 = "";
// for (var i = 0; i < 3; i++) {
// 	random1 = random1 + ", " + doRandom();
// }
// randomCol1 = "rgb(" + random1.slice(1) + ")";

// var random2 = "";
// for (var i = 0; i < 3; i++) {
// 	random2 = random2 + ", " + doRandom();
// }
// randomCol2 = "rgb(" + random2.slice(1) + ")";

console.log(randomCol1);
console.log(randomCol2);
color1.value = randomCol1;
color2.value = randomCol2;
body.style.background = "url('bg1.jpg') no-repeat, linear-gradient(to right, " 
	+ randomCol1
	+ ", " 
	+ randomCol2 + ")";
	css.textContent = body.style.background + ";";
	
}

function setGradient() {
	body.style.background = "url('bg1.jpg') no-repeat, linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
generator.addEventListener("click", generate);