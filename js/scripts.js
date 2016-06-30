// JavaScript Document
console.log('hello world'); 

/*

GOLD: 
    See if you can do the following to the abcArray:
        1. Add the rest of the alphabet without altering the array we've already created.
        2. Turn the alphabet to a string and take out those commmas/spaces.
        3. Print the alphabet in reverse order.
        4. See if you can do all of that and execute it in one word.
		
*/


var classmates = ["Matt", "Tara", "Danielle", "Evan"];

var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC";
typesOfSoda[2] = "Not your father's rootbeer";

//console.log(classmates);
console.log(typesOfSoda);



function bronze(){
		for(var j = 0; j < classmates.length; j++){
	console.log(classmates[j]);
}
}

var mixedTypeArray = ["elephant", 100, (5>2)];

bronze(); 

var randomNumbers = [44, 41, 84, 98, 46, 66, 31, 0, -9, 10];

function silver(k){
	for(var i=0; i < randomNumbers.length; i++){
    if( randomNumbers[i] === k ){
		console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}
	
silver(12);

alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function gold(){
	var backwords = alphabet.reverse();
	for(var j = 0; j < backwords.length; j++){
	console.log(backwords[j]);
}
}

gold();

/*********************** Dont go above this line right now, am I right?  ***************************/
/*********************** Dont go above this line right now, am I right?  ***************************/
/*********************** Dont go above this line right now, am I right?  ***************************/

var friend = {
	fullname	: "",
	age			: 0,
	married		: true,
	vocation	: "",
	
	printVocation:function(){
		return this.vocation;
	},
}

var nickKirkes = Object.create(friend);
nickKirkes.fullname = "Nick Kirkes";
nickKirkes.age = 38;
nickKirkes.married = false;
nickKirkes.vocation = "Project Manager";

var hansKloepfer = Object.create(friend);
hansKloepfer.fullname = "Hans Kloepfer";
hansKloepfer.age = 12;
hansKloepfer.married = false;
hansKloepfer.vocation = "Sailboat captain"

var jeffHackett = Object.create(friend);
jeffHackett.fullname = "Jeff Hackett";
jeffHackett.age = 24;
jeffHackett.married = false;
jeffHackett.vocation = "Prison warden";

var monster ={
	name	:"",
	yearFound: 0,
	heightMeters: 0,
	weightKG: 0,
	isScary: true,
	fromSpace: false,
	
	radioWarning:function(){
		if(this.isScary === true){
			return "run for your lives!";
		} else if (this.heightMeters > 10){
			return "it's not scary but stay away";
		} else {
			return "No need to be alarmed";	
		}
	},	
}

var godzilla = Object.create(monster);
godzilla.name			="Godzilla";
godzilla.yearFound		="1954";
godzilla.heightMeters	="108";
godzilla.weightKG		="95,000";
godzilla.isScary		=true;
godzilla.fromSpace		=false;
