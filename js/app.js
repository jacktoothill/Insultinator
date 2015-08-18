
//store the name
var name; 

//store two arrays of insults
var insultOne = ['muggle', 'twatting', 'pissing', 'soggy', 'fishy', 'willy', 'wet']; 
var insultTwo =['fuck', 'cunt', 'shit', 'bastard', 'tit', 'cockend'];

//function for randomising
function random (min, max){ 
        return Math.floor(Math.random() * (max-min)) + min; 
} 

//storing the random insults ready to print to document
var numberOne = random(0, insultOne.length); 
var numberTwo = random(0, insultTwo.length);

//Write message to document and get name from input

function nameFunction(){
	name = document.getElementById('textbox').value;
	document.getElementById("text").innerHTML = ("Hey " + name + ", you " + insultOne[numberOne] + " " + insultTwo[numberTwo] + "!"); 
}
