var Insultinator = {

	name: "",
	verb: ['muggle', 'twatting', 'pissing', 'soggy', 'fishy', 'willy', 'wet'],
	noun: ['fuck', 'cunt', 'shit', 'bastard', 'tit', 'cockend'],

	init: function(){

		this.name = document.getElementById('textbox').value;

		document.getElementById("text").innerHTML = (
			"Hey " + this.name + ", you " + this.verb[this.random(0, this.verb.length)]
			+ " " + this.noun[this.random(0, this.noun.length)] + "!"
		);

		return false;

	},

	random: function(min, max){
		return Math.floor(Math.random() * (max-min)) + min;
	}

}