var Insultinator = {

	name: "",
	verb: ['silly', 'soppy', 'wet', 'soggy', 'dopey'],
	noun: ['twit', 'twerp', 'pansy', 'turnip', 'git'],

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
