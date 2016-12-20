JAVASCRIPT
	-Page Behavior
		-by Beumsk
	

TODO: openclassrooms & codeacademy & freecodecamp
			better way to present 

// To create a comment. Shown in code only. Indent 2spaces
/* Multiple line comment */
// Use inspect(f12) & debugger(source) to check easily js file


CONSOLELOG
// required to show something in js
	console.log("Text"); // show text
	console.log("up \n down"); // \n acts like enter
	console.log("\' \" \\ "); // to use those tricky characters
	console.log(3+4-1*4/2); // process and give answer
	console.log(10%3); // show the rest of division -> it is called modulo
	console.log("hel"+"lo"); // show addition of the two strings "bonjour"
	console.log("hello", "you"); // show both strings with a space between "hello you"
	console.log("Text".length); // count number of characters
	console.log("hi, how are you?".length); // works with sentences also
	console.log("Text".substring(0, 2)); // show letters (start, end-1); here 'Te'; we could say we start from 0 position and go for a number = difference between two numbers


ERRORS
//
	error // error example -> ReferenceError: slip is not defined; ends the work of JS (the code afterwards will never be processed)


VARIABLES
//
	var a; console.log(a); // creates variable without value
	var a; a = 10; console.log(a); // create variable with value of '10'
	var a = 10; console.log(a); // shortened method
	var a = 0; a += 1; a ++; console.log(a); // add 1 and 1 to 'a' variable to reach 2
	var a = 3; var b = a+2; console.log(b); // 'b' will value 5 (3+2)
	var a = Number("5"); console.log(a); // 'a' will value  the number 5 and not the string '5'
	var a = String(5); console.log(a); // 'a' will value the string '5' and not the number 5
	var a = "five" * 2; console.log(a); // NaN; Not a Number


POP-UPS
// launch pop-up
	confirm("Are you sure to leave?"); // launch pop-up to confirm -> return true/false
	prompt("Enter tour name"); // launch pop-up where user can answer -> return the answer
	alert("hello"); // launch pop-up with text
	var name = prompt("Enter your name :"); alert("hello, " + name); // pop-up to type name and another one to say 'hello name'
	var nb = Number(prompt("Enter a number ")); // by default the value type will be string; use Number() to change it
	var ht = Number(prompt("enter your ht price : ")); ttc = ht * 1.196; alert("Price TTC = " + ttc); // process full price


COMPARISONS
// they will give boolean answers (true or false)
	// smaller than 
		8 < 10 
	// greater than
		10 > 8 
	// smaller or equal to
		10 <= 10 
	// greater or equal to
		10 >= 10 
	// equal to (weak)
		10 == 10
	// different from (weak)
		10 != 8
	// equal to and same type (strict)
		10 === 10
	// different and different type from (strict)
		10 !== 8
	// 'AND'
		(10 > 8) && (10 ===10)
	// 'OR'
		(8 < 10) || (8 > 10)
	// opposite of instruction
		!(10 < 8)

	// counts number of characters and compares it to 10 to finally return true (or false accordingly)
	"I code like a champion".length > 10 


CONDITIONS
//
	// return the sentence because it is true
	if ("Rémy".length = 4) {
		console.log("You're name may be Rémy");
	} 

	// return the else because it's false
	if ("Rémy".length > 4) {
		console.log("You may be Rémy");
	}
	else {
		console.log ("You're definitely not Rémy")
	} 

	// according to number typed, it will answer differently
	var number = Number(prompt("Enter a number :")); 
	if (number>0) {
		console.log(number + " is positive");
	}
	else {
		if (number===0) {
			console.log(number + " is nul");
		}
		else {
			console.log(number + " is negative");
		}
	}

	// switch is a better way for defined options // do not forget the break; !
	var weather = prompt("What is the weather ?"); 
	switch (weather) {
		case "sun":
			console.log("Wear a T-shirt");
			break;
		case "rain":
			console.log("Have an umbrella");
			break;
		case "snow";
			console.log("Wear gloves and hat");
			break;
		default:
			console.log("I did not understand");
			break;
	}

	// what you can drive by age using 'else if' (which is more efficient)
	var age = Number(prompt("Enter your age :")); 
	if (age>=18) {
		console.log("You can drive a car !");
	}
	else if (age>=16) {
		console.log("You can drive a scooter !");
	}
	else {
		console.log("You can walk, run or bike !");
	}

	// comparison of two numbers
	var number1 = Number(prompt("Enter first number"));
	var number2 = Number(prompt("Enter second number"));
	if (number1 > number2) {
		console.log(number1 + " is biggger than " + number2);
	}
	else if (number1 < number2) {
		console.log(number1 + " is smaller than " + number2);
	}
	else if (number1 === number2) {
		console.log(number1 + " is equal to " + number2);
	}
	else {
		console.log("not");
	}

	// the hour one second later
	var hours = Number(prompt("Enter hour"));
	var minutes = Number(prompt("Enter minute"));
	var seconds = Number(prompt("Enter second"));

	if ((hours >= 0) && (hours <= 23) && (minutes >= 0) && (minutes <= 59) && (seconds >= 0) && (seconds <= 59)) {
		seconds++;
		if (seconds === 60) {
			seconds = 0;
			minutes++;
			if (minutes === 60) {
				minutes = 0;
				hours++;
				if (hours === 24) {
					hours = 0;
				}
			}
		}
		console.log("In a second, it will be " + hours + " hour, " + minutes + " minutes and " + seconds + " seconds");
	}
	else {
		console.log("Error with your Hour");
	}


LOOPS
// while the condition is true, the code is looping
	// while loop; use it by default
	var number = 1;
	while (number <= 4) {
		console.log(number);
		number++;
	}

	// while with prompt inside
	var lettre = "";
	while (lettre !== "X") {
		lettre = prompt("type a letter; you can quit with 'X'");
		console.log(lettre);
	}

	// while with prompt outside
	var nbTours = Number(prompt("number of tours"));
	var tours = 1;
	while (tours <= nbTours) {
		console.log("Tour number" + tours);
		tours++;
	}

	// number between 50 and 100
	var number = 0;
	while ((number > 100) || (number < 50)) {
		number = Number(prompt("enter number between 50 and 100"));
	}
	console.log("gg");

	// multiplication table between 1 and 10
	var table = 0;
	while (table > 10 || table < 1) {
		table = Number(prompt("Enter the table you want between 1 and 10"));
	}
	var mult = 1;
	while (mult <= 10) {
		console.log(table + " * " + mult + " = " + (table*mult));
		mult++;
	}

	// Yes or No game
	var word = prompt("Do you want to play Yes or No?");
	while ((word !== "yes") && (word !== "no")) {
		word = prompt("Do you want to play Yes or No?");
	}
	console.log("You lose !")

	// /!\ careful with infinite loops
	var number = 1;
	while (number <= 4) {
		console.log(number); // the condition will always be true and will therefore lead to infinite loop
	}


	// for loop; use when you know the number of loops
	var number;
	for (number = 1; number <= 4; number++) {
		console.log(number);
	}

	// if variable is only used in the for loop
	for (var number = 1; number <= 4; number++) {
		console.log(number);
	}

	// for with prompt and condition
	var number = Number(prompt("Enter a number"));
	for (var i = number; i < number+10; i++) {
		if (i % 2 === 0) {
			console.log(i + " is an even number");
		}
		else {
			console.log (i + " is an odd number");
		}
	}

	// Show more and more characters
	var ligne ="";
	for (i = 1; i <= 7; i++) {
		ligne += "#"; // equal to 'ligne = ligne + "#";'
		console.log(ligne);
	}

	// fizzbuzz (similar to dingdingbottle)
	for (i = 1; i <= 100; i++) {
		if ((i % 3 === 0) && (i % 5 === 0)) {
			console.log("FizzBuzz");
		}
		else if (i % 3 === 0) {
			console.log("Fizz");
		}
		else if (i % 5 === 0) {
			console.log("Buzz");
		}
		else {
			console.log(i);
		}
	}

	// /!\ careful with double increment
	for (var number = 1; number <= 5; number++) {
		console.log(number);
		number++; // will display 1, 3 and 5 because of double increment !
	}




FUNCTIONS
// 

	// simple function
	function sayHello() {
		console.log('Hello !');
	}
	sayHello();

	// function with return
	function sayHello() {
		return 'Hello !';
	}
	console.log(sayHello());

	// function with return and variable
	function sayHello() {
		return 'Hello !';
	}
	var resultat = sayHello;
	console.log(resultat);

	// local variables
	function sayHello() {
		var message = 'Hello !';
		return message;
	}
	console.log(sayHello()); // that works perfectly
	console.log(message); // error, variable works only inside function

	// function with parameters
	function sayHello(name) {
		var message = 'Hello, ' + name + ' !';
		return message;
	}
	console.log(sayHello('Nicolas'));
	console.log(sayHello('Rémy'));

	// function with multiple parameters
	function sayHello(name, surname) {
		var message = 'Hello, ' + name + ' ' + surname + ' !';
		return message;
	}
	console.log(sayHello('Nicolas', 'Beumier')); // must be in right irder of course
	console.log(sayHello('Rémy', 'Beumier'));

	// function with prompt
	function sayHello (name, surname) {
		var message = 'Hello, ' + name + ' ' + surname + ' !';
		return message;
	}
	var n = prompt('enter your first name');
	var s = prompt('enter your surname');
	console.log(sayHello(n, s));

	// function with for loop
	function carre(number) {
		var resultat = number * number;
		return resultat;
	}
	for (var i = 0; i <= 10; i++) {
		console.log(carre(i));
	}

	// function with if
	function min(number1, number2) {
		if (number1 > number2) {
			return number2;
		}
		else {
			return number1;
		}
	}
	console.log(min(9, 1));

	// calculator
	function calculator(number1, mult, number2) {
		if (mult === '+') {
			return number1 + number2;
		}
		else if (mult === '-') {
			return number1 - number2;
		}
		else if (mult === '*') {
			return number1 * number2;
		}
		else if (mult === '/') {
			return number1 / number2;
		}
	}
	console.log(calculator(4, "+", 6)); // returns 10
	console.log(calculator(4, "-", 6)); // returns -2
	console.log(calculator(2, "*", 0)); // returns 0
	console.log(calculator(12, "/", 0)); // returns Infinity

	// circle perimeter and radius
	function perimeter(radius) {
		return 2 * Math.PI * radius;
	}

	function area(radius) {
		return Math.PI * radius * radius;
	}
	var radius = Number(prompt('Enter the circle radius'));
	console.log(perimeter(radius));
	console.log(area(radius));


FUNCTIONS TEXT 
// work on text strings

	// length with variables
	var word = 'Kangaroo';
	var wordLength = word.length;
	console.log(wordLength);

	// Lower case
	var word = 'Kangaroo';
	var lowerWord = word.toLowerCase();
	console.log(lowerWord);

	// Upper case
	var word = 'Kangaroo';
	var upperWord = word.toUpperCase();
	console.log(upperWord);

	// return specific caracter
	var word = 'Kangaroo';
	console.log(word[3]);
	console.log(word.charAt(3));

	// return all caracter from a variable
	var word = 'Kangaroo';
	for (var i = 0; i < word.length; i++) {
		console.log(word[i]);
	}

	// lots of process on a word
	var word = prompt('Enter a word');
	function countVowels(word) {
		var vowels = 0;
		for (var i = 0; i < word.length; i++) {
			var letter = word[i].toLowerCase();
			if ((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter === 'u') || (letter === 'y')) {
				vowels++;
			}
		}
		return vowels;
	}
	function backWards(word) {
		var backWord = '';
		for (var i = 0; i < word.length; i++) {
			backWord = word[i] + backWord;
		}
		return backWord;
	}
	function convertLeetSpeak(word) {
		var leetWord = '';
		for (var i = 0; i < word.length; i++) {
			leetWord = leetWord + findLeetLetter(word[i]);
		}
		return leetWord;
	}
	function findLeetLetter(letter) {
		var leetLetter = letter;
		switch (letter.toLowerCase()) {
		case 'a' :
			leetLetter = '4';
			break;
		case 'b' :
			leetLetter = '8';
			break;
		case 'e' : 
			leetLetter = '3';
			break;
		case 'l' :
			leetLetter = '1';
			break;
		case 'o' :
			leetLetter = '0';
			break;
		case 's' :
			leetLetter = '5';
			break;
		}
		return leetLetter;
	}
	console.log('Your word is made of ' + word.length + ' letters');
	console.log('Uppercase : ' + word.toUpperCase());
	console.log('Lowercase : ' + word.toLowerCase());
	console.log('Vowels : ' + countVowels(word));
	console.log('Consonants : ' + (word.length - countVowels(word)));
	console.log('Backwards : ' + backWards(word));
	if (word === backWards(word)) {
		console.log('Palindrome : True');
	}
	else {
		console.log('Palindrome : False');
	}
	console.log(convertLeetSpeak(word));



FUNCTIONS MATH 
// start with 'Math.' they work on numbers

	// Math.min; returns the smallest number from parameters
	console.log(Math.min(9, 7, 6, 1));

	// Math.random; returns a random number between 0 and 1
	console.log(Math.random());

	// Math.random; 
	console.log(Math.random() * 100); // random number 1 to 100; change '100' to change possibilities of course
	console.log(Math.floor(Math.random() * 100)); // random number without decimals


OBJECTS
// they are like complexed variables; they include multiple parameters and functions

	// simple object with 3 properties
	var pen = {
		type: 'ball',
		color: 'blue',
		brand: 'Bic'
	};
	console.log(pen.type);
	console.log(pen.color);
	console.log(pen.brand);
	// change property
	pen.color = 'red';
	// other way to reach properties
	console.log(pen['color']);
	// in a single line
	console.log(pen.type + ' ' + pen.color + ' ' + pen.brand);
	// add property
	pen.price = 2;
	console.log('My ' + pen.brand + ' ' + pen.color + ' ' + pen.type + 'pen costs ' + pen.price + ' euros.' )

	// basic rpg
	var char = {
		name: 'Beumsk',
		hp: 200,
		strength: 150
	};
	console.log(char.name + ' has ' + char.hp + ' hp and ' + char.strength + ' strength.');
	console.log(char.name + ' is hurt by an arrow! 20 hp lost...');
	char.hp = char.hp - 20;
	console.log(char.name + ' has ' + char.hp + ' hp and ' + char.strength + ' strength.');

	// basic rpg with function inside object
	var char = {
		name: 'Beumsk',
		hp: 200,
		strength: 150,
		describe: function() {
			var description = this.name + ' has ' + this.hp + ' hp and ' + this.strength + ' strength.';
			return description;
		}
	};
	console.log(char.describe());
	console.log(char.name + ' is hurt by an arrow! 20 hp lost...');
	char.hp = char.hp - 20;
	console.log(char.describe());
	console.log(char.name + ' found a strength ring! 10 strength more!');
	char.strength = char.strength + 10;
	console.log(char.describe());

	// dog describe + function
	var dog = {
		name: 'Medor',
		race: 'Labrador',
		size: 88,
		bark: function() {
			return 'Grrrrr !';
		}
	};
	console.log(dog.name + ' is a ' + dog.race + ' of ' + dog.size + ' cm.');
	console.log('Watch out ! A cat ! ' + dog.name + ' Bark : ' + dog.bark());

	// prompt radius to give perimeter and area
	var r = Number(prompt("Enter the circle radius :"));
	var circle = {
		perimeter: function() {
			return 2 * Math.PI * r;
		},
		area: function() {
			return Math.PI * r * r;
		}
	};
	console.log("Perimeter = " + circle.perimeter());
	console.log("Area = " + circle.area());

	// account debit and credit
	var account = {
		holder: 'Jeanne',
		balance: 0,
		credit: function(money) {
			this.balance = this.balance + money;
		},
		debit: function(money) {
			this.balance = this.balance - money;
		},
		describe: function() {
			return 'Holder: ' + this.holder + '; Balance: ' + this.balance;
		}
	};
	console.log(account.describe());
	account.credit(200);
	account.debit(150);
	console.log(account.describe());

	// account debit and credit with prompt
	var credit = Number(prompt('Enter your credit'));
	var debit = Number(prompt('Enter your debit'));
	var account = {
		holder: 'Jeanne',
		balance: 0,
		credit: function() {
			this.balance = this.balance + credit;
		},
		debit: function() {
			this.balance = this.balance - debit;
		},
		describe: function() {
			return 'Holder: ' + this.holder + '; Balance: ' + this.balance;
		}
	};
	console.log(account.describe());
	account.credit();
	account.debit();
	console.log(account.describe());


PROTOTYPES
// they allow objects to get values from other objects

	// simple prototype
	var anObject = {
		a: 10
	};
	var anotherObject = Object.create(anObject);
	console.log(anObject.a);
	console.log(anotherObject.a);

	// multiple prototype
	var anObject = {
		a: 10
	};
	var anotherObject = Object.create(anObject);
	var stillAnotherObject = Object.create(anotherObject);
	console.log(anObject.a);
	console.log(anotherObject.a);
	console.log(stillAnotherObject.a);

	// use prototype to create new characters
	var char = {
		name: '',
		hp: 0,
		strength: 0,
		xp: 0,
		describe: function() {
			return this.name + ' has ' + this.hp + ' hp, ' + this.strength + ' strength and ' + this.xp + ' xp.';
		}
	};
	var nala = Object.create(char);
	nala.name = 'Nala';
	nala.hp = 200;
	nala.strength = 150;
	var apa = Object.create(char);
	apa.name = 'Apa';
	apa.hp = 300;
	apa.strength = 200;
	console.log(nala.describe());
	console.log(apa.describe());

	// faster way
	var char = {
		init: function(name, hp, strength) {
			this.name = name;
			this.hp = hp;
			this.strength = strength;
			this.xp = 0;
		},
		describe: function() {
			return this.name + ' has ' + this.hp + ' hp, ' + this.strength + ' strength and ' + this.xp + ' xp.';
		}
	};
	var nala = Object.create(char);
	nala.init('Nala', 200, 150);
	var apa = Object.create(char);
	apa.init('Apa', 300, 200);
	console.log(nala.describe());
	console.log(apa.describe());

	// with ennemies
	var char = {
		initChar: function(name, hp, strength) {
			this.name = name;
			this.hp = hp;
			this.strength = strength;
		}
	};
	var player = Object.create(char);
	player.initPlayer = function(name, hp, strength) {
		this.initChar(name, hp, strength);
		this.xp = 0;
	};
	player.describe = function() {
		return this.name + ' has ' + this.hp + ' hp, ' + this.strength + ' strength and ' + this.xp + ' xp.';
	};
	var ennemy = Object.create(char);
	ennemy.initEnnemy = function(name, hp, strength, race, value) {
		this.initChar(name, hp, strength);
		this.race = race;
		this.value = value;
	};
	var nala = Object.create(player);
	nala.initPlayer('Nala', 200, 150);
	var apa = Object.create(player);
	apa.initPlayer('Apa', 300, 200);
	console.log('Welcome ! Check out our heroes :');
	console.log(nala.describe());
	console.log(apa.describe());
	var scar = Object.create(ennemy);
	scar.initEnnemy('Scar', 500, 350, 'Lion', 10);
	console.log('An awful monster arrives : it is a ' + scar.race + ' named ' + scar.name);


	// with damages
	var char = {
		initChar: function(name, hp, strength) { // initiate character
			this.name = name;
			this.hp = hp;
			this.strength = strength;
		},
		attack: function (target) { // attack a target
			if (this.hp > 0) {
				var damages = this.strength;
				console.log(this.name + ' attacks ' + target.name + ' for a total of ' + damages + ' combat points!');
				target.hp = target.hp - damages;
				if (target.hp > 0) {
					console.log(target.name + ' have now ' + target.hp + ' hp.');
				}
				else {
					target.hp = 0;
					console.log(target.name + ' is dead!');
				}
			}
			else {
				console.log(this.name + ' can not attack, he is dead...');
			}
		}
	};
	var player = Object.create(char);
	player.initPlayer = function(name, hp, strength) { // initiate player (proto char)
		this.initChar(name, hp, strength);
		this.xp = 0;
	};
	player.describe = function() { // describe player
		return this.name + ' has ' + this.hp + ' hp, ' + this.strength + ' strength and ' + this.xp + ' xp.';
	};
	player.fight = function(ennemy) { // fight an ennemy (takes the prototype of attack)
		this.attack(ennemy);
		if (ennemy.hp === 0) {
			console.log(this.name + ' killed ' + ennemy.name + ' and gets ' + ennemy.value + ' xp!');
			this.xp += ennemy.value;
		}
	};
	var ennemy = Object.create(char);
	ennemy.initEnnemy = function(name, hp, strength, race, value) { // initiate ennemy (proto char)
		this.initChar(name, hp, strength);
		this.race = race;
		this.value = value;
	};
	var nala = Object.create(player);
	nala.initPlayer('Nala', 200, 150);
	var apa = Object.create(player);
	apa.initPlayer('Apa', 300, 200);
	console.log('Welcome ! Check out our heroes :');
	console.log(nala.describe());
	console.log(apa.describe());
	var scar = Object.create(ennemy);
	scar.initEnnemy('Scar', 300, 50, 'Lion', 100);
	console.log('An awful monster arrives : it is a ' + scar.race + ' named ' + scar.name);
	scar.attack(nala);
	scar.attack(apa);
	nala.fight(scar);
	apa.fight(scar);
	console.log(nala.describe());
	console.log(apa.describe());


	// 
	var Dog = {
		init: function (name, race, size) {
			this.name = name;
			this.race = race;
			this.size = size;
		},
		bark: function() {
			return 'Grrr !';
		}
	};
	var rachel = Object.create(Dog);
	rachel.init("Rachel", "labrador", 75);
	console.log(rachel.name + " is a " + rachel.race + " measuring " + rachel.size + " cm");
	console.log("Ow a cat ! " + rachel.name + " bark : " + rachel.bark());
	var pheobe = Object.create(Dog);
	pheobe.init("Pheobe", "golden", 22);
	console.log(pheobe.name + " is a " + pheobe.race + " measuring " + pheobe.size + " cm");
	console.log("Ow a cat ! " + pheobe.name + " bark : " + pheobe.bark());


	// transfer between spare and account
	var Account = {
		initCB: function (name, balance) {
			this.name = name;
			this.balance = balance;
		},
		describe: function () {
			return 'Holder : ' + this.name + ', balance : ' + this.balance;
		},
		debit: function () {
			this.balance = this.balance - amount;
		},
		credit: function() {
			this.balance = this.balance + amount;
		}
	};
	var Spare = Object.create(Account);
	Spare.initCE = function(name, balance, interest) {
		this.initCB(name, balance);
		this.interest = interest;
	};
	Spare.addInterests = function() {
		var interests = this.balance * this.interest;
		this.balance += interests;
	};
	var account1 = Object.create(Account);
	account1.initCB("Alex", 100);
	var account2 = Object.create(Spare);
	account2.initCE("Marco", 50, 0.05);
	console.log("Here is the inital state of the accounts :");
	console.log(account1.describe());
	console.log(account2.describe());
	var amount = Number(prompt("Enter the amount to transfer :"));
	account1.debit(amount);
	account2.credit(amount);
	account2.addInterests();
	console.log("Here is the total after transfer and interests :");
	console.log(account1.describe());
	console.log(account2.describe());


ARRAYS
//

	// basic
	var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
	
	// array length
	var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
	console.log(languages.length); // 5

	// call a array element
	var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
	console.log(languages[0]); // HTML

	// call all elements
	var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
	for (var i = 0; i < languages.length; i++) {
		console.log(languages[i]);
	}

	// call all elements with forEach
	var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
	languages.forEach(function(language) {
	console.log(language);
	});

	// call all elements backwards
	var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
	for (var i = languages.length-1; i >= 0; i--) {
		console.log('I would like to master ' + languages[i]);
	}

	// add an element (to the end)
	var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
	languages.push('BS'); // possible to add multiple elements .push(1, 2, 3, 'etc');
	console.log(languages[5]);

	// delete last element
	var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
	languages.pop(); // no more 'MySQL'

	// remove first element
	var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
	languages.shift(); // no more 'HTML'

	// add an element (from the front)
	var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
	languages.unshift('XML'); // [0] is now 'XML'; possible to add multiple elements

	// array of objects
	var Language = {
		init: function(code, lvl) {
			this.code = code;
			this.lvl= lvl;
		},
		describe: function() {
			return this.code + ' (' + this.lvl + ')';
		}
	};
	var language1 = Object.create(Language);
	language1.init('HTML', 80);
	var language2 = Object.create(Language);
	language2.init('CSS', 70);
	var language3 = Object.create(Language);
	language3.init('JS', 50);
	var languages = [];
	languages.push(language1);
	languages.push(language2);
	languages.push(language3);
	languages.forEach(function(language) {
		console.log(language.describe());
	});

	// find the right card 
	var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
	var currentCard = 'Heart';
	while (currentCard !== 'Spade') {
		console.log(currentCard);
		var randomNumber = Math.floor(Math.random() * 4);
		currentCard = cards[randomNumber];
	}
	console.log('Spade found !');

	// 3 and 4 Mousquetaires
	var Mousquetaires = ['Arthos', 'Porthos', 'Aramis'];
	console.log('Here are the three Mousquetaires :')
	for (var i = 0; i < Mousquetaires.length; i++) {
		console.log(Mousquetaires[i]);
	}
	Mousquetaires.push("d'Artagnan");
	console.log('Now, they are four !')
	Mousquetaires.forEach(function(Mousquetaires) {
		console.log(Mousquetaires);
	});

	// sum of values
	var Values = [11, 3, 7, 2, 9, 10];
	var sum = 0;
	for (var i = 0; i < Values.length; i++) {
		sum = sum + Values[i]; // could write 'sum += Values[i];'
	}
	console.log('the sum of the elements is : ' + sum); // 42

	// max of values
	var Values = [11, 3, 7, 2, 9, 10];
	var max = -10000000; // could change with 'Values[0]''
	for (var i = 0; i < Values.length; i++) { // then should change 'i = 1'
		if (Values[i] > max) {
			max = Values[i];
		}
	}
	console.log('the max of the elements is : ' + max);

	// adding words to a list until 'stop'
	var list = [];
	var word = '';
	while ((word !== 'Stop') && (word !== 'stop') && (word !== 'STOP')) {
		word = prompt('Enter a word to add it to the list. Use "Stop" to stop the process');
		if ((word !== 'Stop') && (word !== 'stop') && (word !== 'STOP')) {
			list.push(word);
		}
	}
	list.forEach(function(list) {
		console.log(list);
	});

	// list of films
	var Films = [];
	var Film = {
		init: function(title, year, director) {
			this.title = title;
			this.year = year;
			this.director = director;
		},
		describe: function() {
			return this.title + ' (' + this.year + ', ' + this.director + ')';
		}
	};
	var film1 = Object.create(Film);
	film1.init('Star Wars', 1977, 'Georges Lucas');
	Films.push(film1);
	var film2 = Object.create(Film);
	film2.init('LOTR', 2001, 'Peter Jackson');
	Films.push(film2);
	var film3 = Object.create(Film);
	film3.init('Indiana Jones', 1981, 'Steven Spielberg');
	Films.push(film3);
	Films.forEach(function(Film) {
		console.log(Film.describe());
	});

	// contact manager
	console.log('Welcome in the contact manager !');
	// array
	var Contacts = [];
	// object
	var Contact = {
		init: function(surname, name) {
			this.surname = surname;
			this.name = name;
		},
		describe: function() {
			return 'Surname: ' + this.surname + ', Name: ' + this.name;
		}
	};
	// 1st contact
	var contact1 = Object.create(Contact);
	contact1.init('Levisse', 'Carole');
	Contacts.push(contact1);
	// 2nd contact
	var contact2 = Object.create(Contact);
	contact2.init('Nelsonne', 'Mélodie');
	Contacts.push(contact2);
	// loop
	while (option !== 0) {
		console.log('\n');
		// options
		console.log('1 : List contacts');
		console.log('2 : add a contact');
		console.log('0 : Quit');
		// pop-up
		var option = Number(prompt('Chose your option :'));
		if (option === 1) {
			// list
			console.log('Here is the list of all your contacts :')
			Contacts.forEach(function(Contact) {
				console.log(Contact.describe());
			});
		}
		else if (option === 2) {
			// add
			var contact3 = Object.create(Contact);
			contact3.init(prompt('Enter the surname :'), prompt('Enter the name :'));
			Contacts.push(contact3);
			console.log('You added a contact!');
		}
	}
	// quit
	console.log('\nGoodbye !');



DOM BASIS
// nodes are linked to html tags; 2 types: element () and textual ()
	
	// montrer partie html dans la console; ici body
	console.log(document.body);

	// element node check
	if (document.body.nodeType === document.ELEMENT_NODE) {
		console.log(Body is an element node);
	}

	// textual node check
	if (document.body.nodeType === document.TEXTUAL_NODE) {
		console.log(Body is a textual node);
	}

	// access element node first child
	console.log(document.body.childNodes[0]); // notice that it will return #text because it counts the space before first html tag
	console.log(document.body.childNodes[1]); // return real first html tag

	// check the child list
	for (var i = 0; i < document.body.childNodes.length; i++) {
		console.log(document.body.childNodes[i]);
	}

	// check node parent
	var h1 = document.body.childNodes[1]; // must be done, otherwise h1 would be undefined
	console.log(h1.parentNode); // return body node

	// function childNodes with error console
	function showChild(node, index) {
			if (node.nodeType === document.ELEMENT_NODE) {
				if ((index >= 0) && (index < node.childNodes.length)) {
					console.log(node.childNodes[index]);
				}
				else {
					console.error('incorrect index');
				}
		}
		else {
			console.error('Incorrect node type');
		}
	}
	showChild(document.body, 1);
	showChild(document.body, -1);
	showChild(document.body, 8);
	showChild(document.body.childNodes[0], 0);


DOM GET/QUERY
// all ways to reach html elements

	// multiple childNodes; not very effective
	console.log(document.body.childNodes[1].childNodes[1].childNodes[1]);

	// get Elements By Tag Name
	var titleElts = document.getElementsByTagName('h2'); // all h2 titles; 'Elts' is common abreviation for elements
	console.log(titreElts[0]); // first h2 title
	console.log(titleElts.length); // number of titles
	console.log(document.getElementsByTagName('h2')[0]); // faster way

	// get Elements By Class Name
	var wondersElts = document.getElementsByClassName('wonders');
	for (var i = 0; i < wondersElts; i++) {
		console.log(wondersElts[i]);
	}
	console.log(document.getElementsByClassName('wonders')[0]) // faster way to get the first one

	// get Element By Id; pay attention to Element which is singular here
	console.log(document.getElementById('news'));

	// css selector
	console.log(querySelectorAll('p')[1]); // second 'p'
	console.log(querySelectorAll('#content p')[1]); // second 'p' of #content
	console.log(querySelectorAll('.main')[1]); // second tag of .main

	// css selector; first only
	console.log(querySelector('p')); // first 'p' only

	// return all html code
	console.log(document.body.innerHTML); // works with all above get commands

	// return html text without tags
	console.log(document.body.textContent); // works with all above get commands

	// get Attribute
	console.log(document.querySelector('a').getAttribute('href')); // return 'href' attriubte of first 'a'

	// 'id', 'href' and 'value' are easier
	console.log(document.querySelector('a').href);

	// check presence of attribute
	if (document.querySelector('a').hasAttribute('target')) {
		console.log('First "a" has target attribute');
	}
	else {
		console.log('First "a" has no target attribute');
	}

	// List of classes of a DOM element
	console.log(document.getElementById('news').classList[0]);

	// check presence of a class in a DOM element
	if (document.getElementById("news").classList.contains("wonder")) {
			console.log("Identified element has 'wonder' class");
	} 
	else {
			console.log("Identified element has not 'wonder' class");
	}

	// function count elements
	function countElements(selector) {
		return document.querySelectorAll(selector).length;
	}
	console.log(countElements("p")); // return number of 'p' elements

	// info on links function
	function infoLinks() {
		console.log(document.querySelectorAll('a').length);
		console.log(document.querySelector('a').href);
		console.log(document.querySelectorAll('a')[document.querySelectorAll('a').length - 1].href);
	}
	infoLinks();


DOM CHANGE
// ways to change html elements; clear, add, etc.

	// add some html using innerHTML
	document.getElementById('example').innerHTML += '<li id="c">C</li>'; // adds C to the ul #example

	// innerHTML is more often used to clear an element content
	document.getElementById('example').innerHTML = ''; // clear #example

	// add some html using textContent
	document.querySelector('h1').textContent += ' more text in h1 title';


	// create and or set an attribute
	document.querySelector('h1').setAttribute('id', 'title'); // first its name and secondly its value 

	// 'id', 'href' and 'value' are easier
	document.querySelector('h1').id = 'title';

	// classList
	var titleElt = document.querySelector('h1');
	titleElt.classList.remove('main');
	titleElt.classList.add('main');
	// would be the same as below
	document.querySelector('h1').setAttribute('class', 'titre');

	// adding an element
	var addedElt = document.createElement('li'); // li created
	addedElt.id = 'added'; // define id
	addedElt.textContent = 'Added element'; // define text content
	document.getElementById('example').appendChild(addedElt); // new element insertion

	// adding a node
	var addedElt = document.createElement('li'); // li created
	addedElt.id = 'added'; // define id
	addedElt.appendChild(document.createTextNode('Added element')); // define text content
	document.getElementById('example').appendChild(addedElt); // new element insertion

	// add a node before another node
	var addedElt = document.createElement('li');
	addedElt.id = 'added';
	addedElt.textContent = 'Added element';
	document.getElementById('example').insertBefore(addedElt, document.getElementById('existing-element'));

	// more accurate node position with insertAdjdacentHTML
	document.getElementById('example').insertAdjacentHTML('beforeBegin', '<li id="added">Added element</li>'); // before element itself (outside)
	document.getElementById('example').insertAdjacentHTML('afterBegin', '<li id="added">Added element</li>'); // just before firstchild
	document.getElementById('example').insertAdjacentHTML('beforeEnd', '<li id="added">Added element</li>'); // just after lastchild
	document.getElementById('example').insertAdjacentHTML('afterEnd', '<li id="added">Added element</li>'); // after element itself (outside)

	// replace a node
	var addedElt = document.createElement('li');
	addedElt.id = 'added';
	addedElt.textContent = 'Added element';
	document.getElementById('example').replaceChild(addedElt, document.getElementById('existing-element')); // 'addedElt' replace existing-element

	// remove a node
	document.getElementById('example').removeChild(document.getElementById('existing-element')); // remove existing-element

	// add from an array
	var news = ["http://bbc.com", "http://news.com", "http://independant.ie"];
	for (var i = 0; i < news.length; i++) {
		var linkElt = document.createElement('a');
		linkElt.textContent = news[i];
		linkElt.href = news[i];
		document.getElementById('contenu').appendChild(linkElt);
		document.getElementById('contenu').appendChild(document.createElement('br'));
	}

	// 
	PRACTICE ADDING HTML ELEMENTS !!!!!!!


DOM STYLE
// 
	
	// style element
	var pElt = document.querySelector('p');
	pElt.style.color = 'red';
	pElt.style.margin = '50px';

	// style element with composed css properties
	var pElt = document.querySelector('p');
	pElt.style.backgroundColor = 'red'; // used camelCase for composed properties
	pElt.style.fontFamily = 'Arial';

	// show style (only style within html, not external or head)
	var pElt = document.querySelector('p');
	console.log(pElt.style.color); // you can't get info about external that way

	// show style from external
	var stylePara = getComputedStyle(document.getElementById('para'));
	console.log(stylePara.color);

	// change multiple tags style
	var divColor = prompt('New text color :');
	var divBack = prompt('New background color :');
	var divElts = document.getElementsByTagName('div');
	for (var i = 0; i < divElts.length; i++) {
		divElts[i].style.color = divColor;
		divElts[i].style.backgroundColor = divBack;
	}

	// change style external
	var contenu = document.getElementById('contenu');
	console.log(getComputedStyle(contenu).height);
	console.log(getComputedStyle(contenu).width);

	// add list with measures of another tag
	var styleElement = getComputedStyle(document.getElementById("contenu"));
	var listeElt = document.createElement("ul");
	var longueurElt = document.createElement("li");
	longueurElt.textContent = "Longueur : " + styleElement.width;
	var hauteurElt = document.createElement("li");
	hauteurElt.textContent = "Hauteur : " + styleElement.height;
	listeElt.appendChild(hauteurElt);
	listeElt.appendChild(longueurElt);
	document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
	document.getElementById("infos").appendChild(listeElt);