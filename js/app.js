
//prompt for the twats name
var name = prompt('What is your name?'); 

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

//Write message to document
document.write("Hey " + name + ", you " + insultOne[numberOne] + " " + insultTwo[numberTwo] + "!"); 

