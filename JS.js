// JAVASCRIPT - Page Behavior - by Beumsk

    
    
// To create a comment. Shown in code only. Indent 2spaces
/* Multiple line comment */


// TODO: --> best practice to indicate things to do in the code

// FIXME: --> best practice to indicate things to fix in the code


// MAIN JS - main syntax

  // Variable
  var a = "example"; 
  console.log(a); // example

  // Function; also var example function() {};
  function example() {
    // code block;
  } 

  // Double arg Function
  function say(arg1) {
    return function(arg2) {
      return arg1 + " " + arg2;
    }
  }
  say ("hello")("world"); // hello world

  // Array (careful!-> if variable is set equal to another array, they will be linked and influence each other)
  var numbers = [one, two, three]; 
  console.log(numbers[0]); // 'one'

  // Object
  var dog = {
    name: "Rex", 
    race: "Pitbul", 
    age: "6"
  }; 
  console.log(dog.name); // Rex
  console.log(dog['name']); // same effect

  // Condition
  if (a == 1) {
    // code block;
  } else if (a == 2) {
    // code block;
  } else {
    // code block;
  }

  // Ternary operator
  var a = (b > 10) ? "Over ten" : "Under ten"; // if b > 10, a value will become "Over ten"; otherwise, "Under ten"

  // Short circuiting
  var a = true && true; // returns true
  var a = true && false; // returns false
  var a = false || false; // returns false
  var a = true || false; // returns true

  // Switch condition
  switch (a) {
    case 1: 
    // code block; 
      break; 
    case 2: 
    // code block; 
      break;
    default: 
    // code block;
  } 

  // While loop
  while (a == 1) {
    // code block;
  } 

  // Do while loop; Will execute code block at least once
  do {
    // code block;
  } while (false); 

  // For loop
  for (i = 0; i < a.length; i++) {
    // code block;
  } 

  // ForEach loop from an array
  a.forEach(function(item) {
    // code block;
  }); 


// DOM syntax

  document.getElementsByTagNamegName("tag"); // will return tag elements as an array
  document.getElementsByClassName("class"); // will return .class elements as an array
  document.getElementById("id"); // will return #id element
  document.querySelector("tag"); // will return first tag of document; selection similar to css (or jquery)
  document.querySelectorAll("tag"); // will return all tags as an array; Note that it isn't updated live as other selectors are

  document.getElementById("id").setAttribute("src", "www.site.com"); // set/change attribute; can often be written something.src("change");
  document.getElementById("id").innerHTML = "some text"; // change #id content
  document.getElementById("id").textContent = "some text"; // similar to innerHTML without tag understanding; can use += to add some text
  document.getElementById("id").style.backgroundColor = "red"; // change style of background-color; everything is camelCased

  newDiv = document.createElement("div"); newDiv.innerHTML = "text"; document.body.appendChild(newDiv); // create div, add content and append to body
  document.body.removeChild(newDiv); // remove newDiv
  document.replaceChild(newDiv, otherDiv); // replace newDiv wth otherDiv

  newDiv.addEventListener("click", function () {/*code block;*/}); // new event click
  newDiv.removeEventListener("click", namedFunction); // remove event click
  newDiv.addEventListener("click", function once() {this.removeEventListener("click", once)}); // event click only once

  setTimeout(function (){/*code block;*/}, 1000); // run code after 1sec; can clearTimeout()
  setInterval(function (){/*code block;*/}, 1000); // run code every 1sec; can clearInterval()

  document.querySelector("form").addEventListener("submit", function (e) {e.PreventDefault();}); // prevent default (submit and refresh)
  document.querySelector(".item").addEventListener("click", someFunc); function someFunc(e) {e.target.style.color = "red"} // targets clicked element 

  JSON.stringify(objectJS); // JS objects array into JSON string
  JSON.parse(stringJSON); // JSON string into JS objects array




// CONSOLELOG
// show something in js console


  console.log("Text"); // show text

  console.log("up \n down"); // \n acts like enter

  console.log("\' \" \\ "); // to use those tricky characters

  console.log(3 + 4 - 1 * 4 / 2); // process and give answer

  console.log(10 % 3); // show the rest of division -> it is called modulo

  console.log("hel" + "lo"); // show addition of the two strings "bonjour"

  console.log("hello", "you"); // show both strings with a space between "hello you"

  console.log("Text".length); // count number of characters

  console.log("hi, how are you?".length); // works with sentences also

  console.log("Text".substring(0, 2)); // show letters (start, end-1); here 'Te'; we could say we start from 0 position and go for a number = difference between two numbers

  console.log("repeat ".repeat(9)); // show 9 times "repeat "

  console.log("slice".slice(0, 3)); // show sliced string from 0 to 2 "sli" (3 is not included)

  console.log("A".charCodeAt()); // show charCode of "A"; 65 here

  console.log(String.fromCharCode(65)); // show letter of 65; "A" here

  console.log(isNaN(10)); // returns false (true if it is actually NotaNumber)

  console.log(typeof "string"); // can return number, boolean, string, function, object (array return object in JS)

  console.warn("Warning"); // display some content as a warning message

  console.assert(2 == 2); // returns undefined if true and returns detailed error when false




// ERRORS 
// error example -> ReferenceError: not defined; ends the work of JS (the code afterwards will never be processed)




// STRICT MODE 
// the strict mode changes bad syntax into actual errors; helping writing secure JS


  // usage of strict mode; must be placed on top of code (or function)
  "use strict";
  x = 3; // not allowed; you must declare every variables




// TYPES 
// Check types of elements;


  // Typeof the main type checker

  typeof 27; // number

  typeof NaN; // number; weird i know

  typeof "Hello"; // string

  typeof (typeof 1); // string; typeof always returns a string

  typeof true; // boolean

  typeof Symbol(); // symbol

  typeof undefined; // undefined

  typeof what; // undefined

  typeof {a:1}; // object

  typeof [1, 2, 3]; // object

  Array.isArray(arrayName); // true if an array

  typeof function(){}; // function

  typeof class C {}; // function

  typeof Math.PI; // function

  typeof null; // object


  // Type conversion

  String(true); // turns a type into a string --> "true"

  Number("123"); // turns a type into a number --> 123

  Number("hello"); // if the type isn't convertible --> NaN

  Boolean(1); // turns a type into a boolean --> true




// VARIABLES
// JavaScript variables are containers for storing data values.


  var a; // creates variable without value

  var a; a = 10; // create variable with value of '10'

  var a = 10; // shortened method

  var a = 0; a += 1; a ++; // add 1 and 1 to 'a' variable to reach 2

  var a = 5; a -= 1; a --; // subtracts 1 and 1 to reach 3

  var a = 5; a *= 5; a /= 5; // multiply by 5 and divide by 5 to reach 5

  var a = 3; var b = a + 2; // 'b' will value 5 (3+2)

  var a = 2 ** 3; // a = 8

  var a = 1e6; // 1000000

  var a = Number("5"); // 'a' will value  the number 5 and not the string '5'

  var a = String(5); // 'a' will value the string '5' and not the number 5

  var a = "five" * 2; // 'a' is NaN; Not a Number

  var a = (b > 10) ? "Over ten" : "Under ten"; // if b>10, a will equal "Over ten"; otherwise, "Under ten"; it's called ternary operator

  var a = b > 0 ? "positive" : b < 0 ? "negative" : "zero"; // a will be positive, negative or zero according to b value

  var a = true && false; // false; returns the first falsy value; default is last value
 
  var a = true || false; // true; returns the first truthy value; default is last value




// CONST
// Javascript const are containers you can only read; best use for value that will not change
// ES6 !!


  // basic const
  const a = 23;


  // exception to rewrite const -> in a block
  if (a === 23) {
    const a = 7; // here and only here a = 7
  }
  console.log(a); // 23 again


  // with arrays
  const myArray = [1, 2, 3];
  myArray[0] = 4; // can be freezed with Object.freeze()


  // with objects
  const myObject = {"key": "value"};
  myObject.key = "otherValue"; // keys are not protected; can be with Object.freeze()


  // with arrays
  const myArray = [];
  myArray = [8]; // not possible
  myArray.push(8); // possible




  // LET 
  // Javascript let are containers with small scope (a block)
  // ES6 !!


    // let vs var
    var a = 5, b = 10;
    if (a === 5) {
      let a = 4; // only 4 in if block
      var b = 1;
      console.log(a, b); // 4 1
    }
    console.log(a, b); //  5 1



  // arrow function
  // ES6 !!

  const myFunc = () => {
    const myVar = "value";
    return myVar;
  }
  
  // or shorter
  const myFunc = () => "value";
  myFunc(); // "value"

  // and with parameter
  const myFunc = (item) => item * 2;
  myFunc(3); // 6

  // and with parameters
  const myConcat = (arr1, arr2) => arr1.concat(arr2);
  myConcat([1,2], [3,4]); // [1,2,3,4]

  // and with higher order functions (.map)
  const arr = [1, 2, 3];
  const squares = arr.map(x => x * x); // 1, 4, 9


  // default parameter for function
  function greet(name = "Anonymous") {
    console.log("Hello" + name);
  }
  great(); // Hello Anonymous
  great("Einstein"); // Hello Einstein

  // Rest operator
  function howMany(...args) {
    return args.length + " arguments";
  }
  howMany("hi", 1, true); // 3 arguments

  // Spread operator
  const arr = [1,9,3,4];
  const maximus = Math.max(...arr); // 4


  // Template literals
  const easyText = `<p class="danger">
  It's way easier to write strings with "quotes" and breaks
  </p>`;


  // Class syntax; replaces constructor function
  class SpaceShuttle {
    constructor(targetPlanet){
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');

  // Getters and Setters
  class Thermostat {
    constructor(farenheit) {
      this.farenheit = farenheit;
    }
    get temperature() {
      return (this.farenheit - 32) * 5/9;
    }
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 °C




// POP-UPS
// launch pop-up


  confirm("Are you sure to leave?"); // launch pop-up to confirm -> return true/false

  prompt("Enter tour name"); // launch pop-up where user can answer -> return the answer

  alert("hello"); // launch pop-up with text

  var name = prompt("Enter your name :"); alert("hello, " + name); // pop-up to type name and another one to say 'hello name'

  var nb = Number(prompt("Enter a number ")); // by default the value type will be string; use Number() to change it

  var ht = Number(prompt("enter your ht price : ")); ttc = ht * 1.196; alert("Price TTC = " + ttc); // process full price




// USEFUL TOOLS
// other useful snippet of codes


  // create audio and start it
  var audio = new Audio("file.mp3");
  audio.play();




// COMPARISONS
// Comparison and Logical operators are used to test for true or false


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

  
  

// CONDITIONS
// Conditional statements are used to perform different actions based on different conditions


  // return the sentence because it is true
  if ("Rémy".length = 4) {
    console.log("You're name may be Rémy");
  } 


  // return the else because it's false
  if ("Rémy".length > 4) {
    console.log("You may be Rémy");
  } else {
    console.log ("You're definitely not Rémy")
  } 


  // according to number typed, it will answer differently
  var number = Number(prompt("Enter a number :")); 
  if (number  >0) {
    console.log(number + " is positive");
  } else {
    if (number === 0) {
      console.log(number + " is nul");
    } else {
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
    case "snow":
      console.log("Wear gloves and hat");
      break;
    default: // if none of cases is true
      console.log("I did not understand");
      break;
  }


  // if you do not use breaks, cases will merge till the next break
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low"; // 1-3 will change to "Low"
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid"; // 4-6 will change to "Mid"
      break;
    case 7:
    case 8:
    case 9:
      answer = "High"; // 7-9 will change to "High"
      break;
  }


  // what you can drive by age using 'else if' (which is more efficient)
  var age = Number(prompt("Enter your age :")); 
  if (age >= 18) {
    console.log("You can drive a car !");
  } else if (age >= 16) {
    console.log("You can drive a scooter !");
  } else {
    console.log("You can walk, run or bike !");
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
  } else {
    console.log("Error with your Hour");
  }




// SHORT CIRCUIT
// handy way to manage short conditions

  
  // Logical &&
  var a = true && true; // true
  var a = true && false; // false
  var a = false && false; // false
  var a = "cat" && "dog"; // "dog"


  // Logical ||
  var a = true || true; // true
  var a = true || false; // true
  var a = false || false; // false
  var a = "cat" || "dog"; // "cat"


  // with a function
  function short(test) {
    var a = test || "Test is not defined"; // a = test value if defined; otherwise a = string
  }


  // chose between functions
  function short() {
    func1() || func2(); // runs func1 if it exists; otherwise runs func2
  }




// LOOPS
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


  // do while loop; while alike, but will do the first block code at least once (even if while is false)
  var count = 11;
  do {
    console.log(count);
    count++;
  }
  while (count <= 5); // will log 11


  // for loop; use when you know the number of loops
  var number;
  for (number = 1; number <= 4; number++) {
    console.log(number);
  }


  // when variable is only used in the for loop
  for (var number = 1; number <= 4; number++) {
    console.log(number);
  }


  // break; end of the loop
  for (var i  =0; i <= 5; i++) {
    if (i===3) {
      break;  
    }
    console.log(i);
  } // 0 1 2; stops when 3 reached


  // continue; breaks one iteration in the loop
  for (var i = 0; i <= 5; i++) {
    if (i === 3) {
      continue; 
    }
    console.log(i);
  } // 0 1 2 4 5; no 3


  // for with prompt and condition
  var number = Number(prompt("Enter a number"));
  for (var i = number; i < number+10; i++) {
    if (i % 2 === 0) {
      console.log(i + " is an even number");
    } else {
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
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }


  // /!\ careful with double increment
  for (var number = 1; number <= 5; number++) {
    console.log(number);
    number++; // will display 1, 3 and 5 because of double increment !
  }


  // forEach loop
  var a = [1, 2, 3, 4, 5];
  a.forEach(function(element) {
    console.log(element); // 1 2 3 4 5, each on a different line
  });



  // recursion
  function countDownFrom(number) {
    if (number === 0) { return; }
    console.log(number);
    countDownFrom(number - 1);
  }
  countDownFrom(5); // 5 4 3 2 1




// FUNCTIONS
// A JavaScript function is a block of code designed to perform a particular task. You need to invoke it


  // simple function
  function sayHello() {
    console.log('Hello !');
  }
  sayHello();


  // function with return; function exits at return statement, whatever comes after never outputs
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


  // local variables; they can't be used outside the function
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
    } else {
      return number1;
    }
  }
  console.log(min(9, 1));


  // function nested in function
  function first() {
    console.log("first");
    return function() {
      console.log("second");
    }
  }
  first(); // logs first
  first()(); // logs first and second


  // Double arg Function
  function say(arg1) {
    return function(arg2) {
      return arg1 + " " + arg2;
    }
  }
  say ("hello")("world"); // hello world


  // calculator
  function calculator(number1, mult, number2) {
    if (mult === '+') {
      return number1 + number2;
    } else if (mult === '-') {
      return number1 - number2;
    } else if (mult === '*') {
      return number1 * number2;
    } else if (mult === '/') {
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




// STRING METHODS 
// methods working on text strings


  // length with variables
  var word = 'Kangaroo';
  var wordLength = word.length;
  console.log(wordLength); // 8


  // Lower case
  var word = 'Kangaroo';
  var lowerWord = word.toLowerCase();
  console.log(lowerWord); // kangaroo


  // Upper case
  var word = 'Kangaroo';
  var upperWord = word.toUpperCase();
  console.log(upperWord); // KANGAROO


  // check if string starts with something
  var str = "http://jojo.be";
  console.log(str.startsWith("http://")); // true


  // remove spaces at beginning and end of a string
  var str = '   Kangaroo   ';
  console.log(str.trim());


  // return specific character
  var word = 'Kangaroo';
  console.log(word[3]); // g
  console.log(word.charAt(3)); // g


  // return position of a character
  var word = 'Kangaroo';
  console.log(word.indexOf('a')); // 1


  // return position of a character
  var word = 'Kangaroo';
  console.log(word.lastIndexOf('a')); // 4


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
  } else {
    console.log('Palindrome : False');
  }
  console.log(convertLeetSpeak(word));




// NUMBERS METHODS
// methods working on numbers


  // toString; number to string
  (123).toString(); // 123
  var x = 123; x.toString(); // 123
  (100 + 23).toString(); // 123


  // toFixed; number of decimals
  (2.343).toFixed(0); // 2
  (2.343).toFixed(2); // 2.34
  (2.343).toFixed(4); // 2.3430


  // Number; turns value into number
  Number(true); // 1; 0 if false
  Number("10"); // 10
  Number("10 20"); // NaN


  // parseInt; first number returned
  parseInt("10"); // 10
  parseInt("10.33"); // 10
  parseInt("10 20"); // 10
  parseInt("10 years"); // 10
  parseInt("years 10"); // NaN


  // parseInt; first number returned (same as parseInt but with decimals)
  parseFloat("10"); // 10
  parseFloat("10.33"); // 10.33
  parseFloat("10 20"); // 10
  parseFloat("10 years"); // 10
  parseFloat("years 10"); // NaN




// FUNCTIONS MATH
// Functions working on numbers; they start with 'Math.'


  // Math.min; returns the smallest number from parameters
  Math.min(9, 7, 6, 1); // 1


  // Math.max; returns the biggest number from parameters
  Math.max(9, 1, 6, 3, 5); // 9


  // Math.random; returns a random number between 0 and 1
  Math.random();


  // Math.random; 
  Math.random() * 100; // random number 1 to 100; change '100' to change possibilities of course
  Math.floor(Math.random() * 100); // random integer


  // Math.round
  Math.round(0.6666 * 100) / 100; // 0.67
  Math.round(0.66666666 * 10000) / 10000; // 0.6667


  // Math.ceil; round value up
  Math.ceil(4.3); // 5


  // Math.floor; round value down
  Math.floor(4.7); // 4


  // Math.pow; returns first parameter powered by second parameter
  Math.pow(5, 2); // 25


  // Math.sqrt; returns square root of parameter
  Math.sqrt(16); // 16


  // Math.abs; returns absolute of parameter
  Math.abs(-12); // 12


  // Math.PI
  Math.PI // 3.141592653589793


  // eval; takes a string and do the math
  eval("10 * 5 + 10 / 2") // 55
  
  


// DATE
// Date object enables us to work with dates; dates are calculated from 01 Jan 1970 00:00:00


  // current date and time
  var d = new Date();
  console.log(d); // now


  // set date easily
  var d2 = new Date("January 2, 2015 10:42:00"); // Fri Jan 02 2015 10:42:00


  // set date with numbers
  var d3 = new Date(88,5,11,11,42,0,0); // Sat Jun 11 1988 11:42:00


  // time values
  var d = new Date();
  var hours = d.getHours(); // current hour
  var minutes = d.getMinutes(); // current minute
  var seconds = d.getSeconds(); // current second
  var milliseconds = d.getMilliseconds(); // current millisecond


  // day values
  var d = new Date();
  var day = d.getDay(); // day of week
  var date = d.getDate(); // day of month
  var month = d.getMonth()+1; // add 1 because month count starts at 0 (jan=0; dec=11)
  var year = d.getFullYear(); // current year


  // add days, months, years to a date
  var oldDate = new Date(); // today
  var newDate = new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate()+1); // tomorrow
  var newDate = new Date(oldDate.getFullYear(), oldDate.getMonth()+1, oldDate.getDate()); // next month
  var newDate = new Date(oldDate.getFullYear()+1, oldDate.getMonth(), oldDate.getDate()); // next year


  // function to change date format easily
  function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('.'); // dd.mm.yyyy
  }




// OBJECTS
// they are like complexed variables; they include multiple parameters and functions; they are named indexed


  // simple object with 3 properties
  var pen = {
    type: 'ball',
    color: 'blue',
    brand: 'Bic'
  };
  console.log(pen.type);
  console.log(pen.color);
  console.log(pen.brand);


  // other way to create object
  var obj = new Object();
  obj.prop = "anything";


  // change property
  pen.color = 'red';


  // other way to reach properties; useful for var or parameters, or with var containing spaces
  console.log(pen['color']);


  // in a single line
  console.log(pen.type + ' ' + pen.color + ' ' + pen.brand);


  // add property
  pen.price = 2;
  console.log('My ' + pen.brand + ' ' + pen.color + ' ' + pen.type + 'pen costs ' + pen.price + ' euros.' );
  

  // delete a property
  delete pen.price;


  // check if a propery exists; true or false
  pen.hasOwnProperty("type");
  // or
  "type" in pen;


  // for in loop
  var person = {firstName: "John", lastName: "Doe", age: 25};
  for (var x in person) {
    console.log(person[x]);
  }


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




// OOP
// Object Oriented programming


// Capitalize first letter of an object constructor
function Dog(name, sex, age) {
  this.name = name;
  this.sex = sex;
  this.age = age;
}
var example = new Dog("Dogidog", "male", 3);

// check if object is an instance of a constructor
example instanceof Dog; // true
fake instanceof Dog; // false

// check own properties
var ownProps = [];
for (var property in example) {
  if(example.hasOwnProperty(property)) {
    ownProps.push(property); // "name", "sex", "age"
  }
}




// PROTOTYPES
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
        } else {
          target.hp = 0;
          console.log(target.name + ' is dead!');
        }
      } else {
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




// ARRAYS
// JavaScript arrays are used to store multiple values in a single variable; they are number indexed
// Careful! -> if var is set equals to an array, they will be linked and influence each other (may cause infinite loops)


  // basic
  var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
  

  // array length
  var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
  console.log(languages.length); // 5


  // check if array is empty
  var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
  if (languages.length !== 0) {
    console.log("Array is not empty !");
  } else {
    console.log("Array is empty");
  }


  // call an array element
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


  // pop() element and store the deleted value
  var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
  var deleted = languages.pop(); // 'MySQL' is no more in array and stored in 'deleted'


  // remove first element
  var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
  languages.shift(); // no more 'HTML'


  // shift() element and store the deleted value
  var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
  var deleted = languages.shift(); // 'HTML' is no more in array and stored in 'deleted'


  // add an element (from the front)
  var languages = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
  languages.unshift('XML'); // [0] is now 'XML'; possible to add multiple elements


  // change arguments of a function into an array
  function array(arr) {
    var args = Array.prototype.slice.call(arguments);
    console.log(args); // [1, 2, 3, 4]
  }
  array(1, 2, 3, 4); 


  // going through function arguments
  function lol(arr1, arr2, arr3) {
    for (i=0; i<arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
  lol(1, 3, 7); // 1 3 7


  // make change on arrays; iterate
  var oldArray = [1, 2, 3];
  var newArray = oldArray.map(function(val) {
    return val * 3;
  });
  console.log(newArray); // [3, 6, 9]; they have been multiplied


  // use all values, one at a time, to get a single one; condense
  var oldArray = [1, 2, 3, 4, 5];
  var singleVal = oldArray.reduce(function(previousVal, currentVal) {
    return previousVal - currentVal;
  }, 0); // start at value[0]; do not use it for multiplications
  console.log(singleVal); // will result in -1-2-3-4-5 = -15


  // filter an array
  var oldArray = [1, 2, 3, 4, 5];
  var newArray = oldArray.filter(function(val) {
    return val < 4; // keep what is said; all values under 4
  });
  console.log(newArray); // [1, 2, 3]


  // delete some array values
  var arr = ["one", "two", "three"];
  delete arr[2];
  console.log(arr); // ["one", "two", null]
  arr.filter(Boolean); // to remove null, undefined etc.
  console.log(arr); // ["one", "two"]


  // filter Boolean, will delete false, null, 0, "", undefined, and NaN.
  function numbersLettersOnly(arr) {
    return arr.filter(Boolean);
  }
  numbersLettersOnly([7, "abc", false, null, 0, 9, NaN, "hello", undefined, ""]); // [7, "abc", 9, "hello"]


  // sort an array; for alphabetic sorting, just need sort()
  var array = [1, 2, 3, 4, 5];
  array.sort(function(a, b) {
    return b - a; // from largest; a - b to sort from smallest
  });
  console.log(array); // [5, 4, 3, 2, 1]


  // get index position of a value in an array
  var array = [10, 20, 30, 40, 50];
  var a = array.indexOf(30);
  console.log(a); // 2; position of value 30


  // indexOf can be used to check if an array includes an element
  var array = [10, 20, 30, 40, 50];
  var a = array.indexOf(60);
  console.log(a); // -1; the value isn't in the array


  // get index position of a value in an array (starting from the end)
    var array = [10, 20, 30, 40, 30, 50];
    var a = array.lastIndexOf(30);
    console.log(a); // 4; position of last value 30


  // reverse an array
  var array = [1, 2, 3];
  var newArray = array.reverse();
  console.log(newArray); // [3, 2, 1]


  // concatenate an array with another one
  var oldArray = [1, 2, 3];
  var concatenateMe = [4, 5, 6];
  var newArray = oldArray.concat(concatenateMe);
  console.log(newArray); // [1, 2, 3, 4, 5, 6]


  // split a string into an array
  var string = 'Split me into an array';
  var array = string.split(' '); // can be other character
  console.log(array); // ['Split', 'me', 'into', 'an', 'array']


  // split number into an array 
  var num = 137;
  var arr = (""+num).split("");
  console.log(arr); // ["1", "3", "7"]


  // join an array into a string
  var array = ['Join', 'me', 'into', 'a', 'string'];
  var string = array.join(' ');
  console.log(string); // 'Join me into a string'


  // slice an array
  var array = ['Keep', 'us', 'delete', 'the', 'others'];
  array.slice(0, 2);
  console.log(array); // ['Keep', 'us']
  var array2 = array.slice(0, 2);
  console.log(array2); // ['Keep', 'us']


  // slice to copy an array
  var array = ['copy', 'this', 'array'];
  var arrayCopy = array.slice();
  console.log(arrayCopy); // ['copy', 'this', 'array']


  // splice an array
  var array = ['Delete', 'the', 'others', 'keep', 'us'];
  array = array.splice(3);
  console.log(array); // ['keep', 'us']


  // splice a number
  var array = ['Keep', 'everybody', 'but', 'him'];
  array.splice(2, 1);
  console.log(array); // ['Keep', 'everybody', 'him']


  // replace smth in a string
  var str = "Salut, c'est chouette !";
  str = str.replace("chouette", "cool");
  console.log(str); // "Salut, c'est cool !"


  // use replace to add spaces before uppercases; or smth else
  "myNameIsWhat".replace(/([a-z])([A-Z])/g, "$1 $2"); // my Name Is What
  "myNameIsWhat".replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(); // my-name-is-what


  // reverse a string
  function reverseString(str) {
    var array = str.split("");
    array.reverse();
    str = array.join("");
    return str;
  }
  reverseString("hello"); // return olleh


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
    } else if (option === 2) {
      // add
      var contact3 = Object.create(Contact);
      contact3.init(prompt('Enter the surname :'), prompt('Enter the name :'));
      Contacts.push(contact3);
      console.log('You added a contact!');
    }
  }
  // quit
  console.log('\nGoodbye !');




// CLASSES
// kind of special functions; classes cannot be called before it appears in the code (such as functions)

  
  // syntax example
  class Rectangle {
    constructor(hauteur, largeur) {
      this.hauteur = hauteur;
      this.largeur = largeur;
    }
  }

  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes





// REGEXP 
// regular expression object for matching text with a pattern


  /abc/; // Find strings containing "abc"

  /^abc/; // Find strings starting with "abc"

  /abc$/; // Find strings ending with "abc"

  /^abc.*abc$/; // Find strings starting with "abc" and ending with "abc"
  
  /[abc]/; // Find any characters between the brackets
  
  /[^abc]/; // Find any character NOT between the brackets
  
  /[a-c]/; // Find any letters between a and c

  /[a-z]/; // Find any letters in lowercase
  
  /[A-C]/; // Find any letters between A and C

  /[A-Z]/; // Find any letters in uppercase
  
  /[0-9]/; // Find any digits between the brackets; similar to \d
  
  /[^0-9]/; // Find any non-digit between the brackets; similar to \D
  
  /abc|xyz/; // Find any alternatives separated with |
  
  /\d/; // Find a digit; similar to [0-9]

  /\D/; // Find a non digit; similar to [^0-9]
  
  /\s/; // Find a whitespace character

  /\S/; // Find anything but a whitespace character
  
  /\w/; // Find any alphanumeric character (and underscore); similar to [A-Za-z0-9_]

  /\W/; // Find any non-alphanumeric character; opposite of \w

  /\n/; // Find a newline

  /\t/; // Find a tab
  
  /n+/; // Matches any string that contains at least one n
    
  /n*/; // Matches any string that contains zero or more occurrences of n
    
  /n?/; // Matches any string that contains zero or one occurrences of n

  /a{2}/; // find strings with 2 a

  /a{2,5}/; // find strings with 2 to 5 a

  /a{3,}/; // find strings with 3 or more a
    
  /test/i; // Perform case-insensitive matching; meaning upper or lowercased Test, TEST, tEST, etc.
  
  /test/g; // Perform a global match (find all matches rather than stopping after the first match)
  
  /test/m; // Perform multiline matching

  /./; // anything 


  // Special characters to be escaped
  // \ / [ ] ( ) { } ? + * | . ^ $
  
  
  // The test() method searches a string and return true or false
  /me/i.test("Am I in this string?"); // false
  /am/i.test("I am in this string!"); // true
  
  
  // The exec() method searches a string and return the found text or null
  /me/i.exec("Am I in this string?"); // null
  /am/i.exec("I am in this string!"); // 'am'


  // The match() method uses an expression to search for a match and return that match
  "try to find me".match(/me/i); // "me"
  
  
  // The search() method uses an expression to search for a match, and returns the position of the match.
  "try to find me".search(/me/i); // 12
  
  
  // The replace() method returns a modified string where the pattern is replaced.
  "try to find him".replace(/him/i, "me"); // try to find me


  // replace() works also like this
  "this code is shit".replace(/[aeiou]/gi, ''); // ths cd s sht
  


  
// DOM BASIS
// nodes are linked to html tags; 2 types: element () and textual ()
  
  
  // show html part in console; here body
  console.log(document.body);

  
  // element node check
  if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log(Body is an element node);
  }

  
  // textual node check
  if (document.body.nodeType === document.TEXTUAL_NODE) {
    console.log(Body is a textual node);
  }

  
  // access element node first child (here body element)
  console.log(document.body.childNodes[0]); // notice that it will return #text because it counts the space before first html tag
  console.log(document.body.childNodes[1]); // return real first html tag
  
  
  // access element relationships (here header element)
  console.log(getElementsByTagName("header").childeNodes); // returns an array of header child nodes
  console.log(getElementsByTagName("header").firstChild); // returns an header first child  
  console.log(getElementsByTagName("header").lastChild); // returns an header last child
  console.log(getElementsByTagName("header").hasChildNodes); // returns true if childnodes; false otherwise
  console.log(getElementsByTagName("header").nextSibling); // returns next node on same level
  console.log(getElementsByTagName("header").previousSibling); // returns previous node on same level
  console.log(getElementsByTagName("header").parentNode); //returns parent node

  
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
        } else {
          console.error('incorrect index');
        }
    } else {
      console.error('Incorrect node type');
    }
  }
  showChild(document.body, 1);
  showChild(document.body, -1);
  showChild(document.body, 8);
  showChild(document.body.childNodes[0], 0);


  
  
// DOM GET/QUERY
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

  
  // 'id', 'href' and 'value' are easier; note that href will return full URL !
  console.log(document.querySelector('a').href);

  
  // check presence of attribute
  if (document.querySelector('a').hasAttribute('target')) {
    console.log('First "a" has target attribute');
  } else {
    console.log('First "a" has no target attribute');
  }

  
  // List of classes of a DOM element
  console.log(document.getElementById('news').classList[0]);

  
  // check presence of a class in a DOM element
  if (document.getElementById("news").classList.contains("wonder")) {
    console.log("Identified element has 'wonder' class");
  } else {
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

  
  // get value of an input
  var getValue = document.getElementsByTagName('input').value;
  console.log(getValue); // log input value


  
  
// DOM CHANGE
// ways to change html elements; clear, add, etc.

  
  // add some html using innerHTML
  document.getElementById('example').innerHTML += '<li id="c">C</li>'; // adds C to the ul #example

  
  // innerHTML is more often used to clear an element content
  document.getElementById('example').innerHTML = ''; // clear #example

  
  // add some text using textContent
  document.querySelector('h1').textContent += ' more text in h1 title';


  // create and or set an attribute
  document.querySelector('h1').setAttribute('id', 'title'); // first its name and secondly its value 

  
  // 'id', 'href', 'src' and 'value' are easier
  document.querySelector('h1').id = 'title';

  
  // standalone attributes
  document.querySelector("h1").disabled = false; // or true
  document.querySelector("h1").setAttribute("required", "false"); // other way to achieve it

  
  // classList
  var titleElt = document.querySelector('h1');
  titleElt.classList.remove('main');
  titleElt.classList.remove('main', 'other');
  titleElt.classList.add('title');
  titleElt.classList.add('main', 'other');
  // would be the same as below
  document.querySelector('h1').setAttribute('class', 'title');

  
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


  // remove element
  var example = document.getElementById("example");
  example.parentNode.removeChild(example);

  
  // add from an array
  var news = ["http://bbc.com", "http://news.com", "http://independant.ie"];
  for (var i = 0; i < news.length; i++) {
    var linkElt = document.createElement('a');
    linkElt.textContent = news[i];
    linkElt.href = news[i];
    document.getElementById('content').appendChild(linkElt);
    document.getElementById('content').appendChild(document.createElement('br'));
  }
  
  
  // swap 2 elements DOM position
  function swapElts(elt1, elt2) {
    var temp = document.createElement("div");
    elt1.parentNode.insertBefore(temp, elt1);
    elt2.parentNode.insertBefore(elt1, elt2);
    temp.parentNode.insertBefore(elt2, temp);
    temp.parentNode.removeChild(temp);
  }


  
    
// DOM STYLE
// give style to elements
  
  
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
  
  
  // hide element
  document.getElementById("toHide").style.display = "none";
  
  
  // show element
  document.getElementById("toShow").style.display = "block"; // or inline

  
  // change multiple tags style
  var divColor = prompt('New text color :');
  var divBack = prompt('New background color :');
  var divElts = document.getElementsByTagName('div');
  for (var i = 0; i < divElts.length; i++) {
    divElts[i].style.color = divColor;
    divElts[i].style.backgroundColor = divBack;
  }

  
  // change style external
  var content = document.getElementById('content');
  console.log(getComputedStyle(content).height);
  console.log(getComputedStyle(content).width);

  
  // add list with measures of another tag
  var styleElement = getComputedStyle(document.getElementById("content"));
  var listElt = document.createElement("ul");
  var lengthElt = document.createElement("li");
  lengthElt.textContent = "Length : " + styleElement.width;
  var heightElt = document.createElement("li");
  heightElt.textContent = "Height : " + styleElement.height;
  listElt.appendChild(heightElt);
  listElt.appendChild(lengthElt);
  document.getElementById("info").appendChild(document.createTextNode("Info about element"));
  document.getElementById("info").appendChild(listElt);


  // check media query in JS
  if (window.matchMedia("(min-width: 768px)").matches) {
    // do something when window is wider (equal to) than 768px
  }

  
  
  
// DOM EVENTS
// help to react to user's actions
  
  
  // add an event
  document.getElementById("button").addEventListener("click", function() {
    console.log("Click !");
  });
  
  
  // remove an event; function can't be anonymous
  document.getElementById("button").removeEventListener("click", namedFunction);


  // add event (remove on click) using class names
  var remove = document.getElementsByClassName("remove");
  for (i=0; i<remove.length; i++) {
    remove[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
  
  
  // get event type and target content
  document.getElementById("button").addEventListener("click", function (e) {
    console.log("Event :" + e.type + ", target text :" + e.target.textContent);
  });


  // create event with external function pointing to clicked element
  document.querySelector(".action").addEventListener("click", functionName);
  function functionName(e) {
    e.target.style.color = "red";
  }
  
  
  // keypress event returning the pressed key (only for characters)
  document.addEventListener("keypress", function (e) {
      console.log("You hitted the key " + String.fromCharCode(e.charCode));
  });
  
  
  // info on pressed key; work also with "keyup"
  document.addEventListener("keydown", function (e) {
    console.log("keyboard event : " + e.type + ", key : " + e.keyCode);
  });
  
  
  // Wait until the page is fully loaded to make an action
  window.addEventListener("load", function() {
    console.log("Page fully loaded");
  });
  
  
  // warning before leaving page or tab
  window.addEventListener("beforeunload", function (e) {
    var message = "We are chill here !";
    e.returnValue = message; // usual confirmation
    return message; // confirmation for some browsers
  });
  
  
  // stop propagation; propagation goes from child to parents
  document.getElementById("propa").addEventListener("click", function (e) {
    console.log("button manager");
    e.stopPropagation();
  });

  // set propagation from parents to child (capturing); really useful for similar events for multiple DOM elements superposed
  document.getElementById("propa").addEventListener("click", function () {
    console.log("button manager")
  }, true); // default value is false (child to parents)
  
  
  // prevent default behavior
  document.getElementById("forbidden").addEventListener("click", function (e) {
    console.log("Keep on studying the course instead");
    e.preventDefault(); // cancel the link navigation
  });
  
  
  // one button count the clicks and another one disables the counting
  var count = 0;
  function e () {
    count++;
    document.getElementById("clickCounter").textContent = count;
  }
  document.getElementById("clicker").addEventListener("click", e);
  document.getElementById("disable").addEventListener("click", function () {
    document.getElementById("clicker").removeEventListener("click", e);
  });
  
  
  // get pressed key and change background color accordingly
  var Elts = document.getElementsByTagName("div");
  var color = "";
  document.addEventListener("keypress", function (e) {
    switch (e.charCode) {
      case 98:
        color = "blue";
        break;
      case 103:
        color = "green";
        break;
      case 114:
        color = "red";
        break;
      case 121:
        color = "yellow";
        break;
      default:
        console.log("Wrong key");
    }
    for (i=0; i<Elts.length; i++) {
      Elts[i].style.backgroundColor = color;
    }
  });
  

  // listen to arrow keys pressed and move accordingly
  var Elt = document.getElementById("ball");
  document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
      case 37: // left
        Elt.style.left -= 10;
        break;
      case 38: // up
        Elt.style.top -= 10;
        break;
      case 39: // right
        Elt.style.right -= 10;
        break;
      case 40: // down
        Elt.style.bottom -= 10;
        break;
      default:
        console.log("Wrong key");
    }
  });

  
  // Add li to ul with prompt and change those with click
  document.querySelector("button").addEventListener("click", function() {
    var dessert = prompt("type your dessert");
    var newElt = document.createElement("li");
    newElt.textContent = dessert;
    newElt.addEventListener("click", function() {
      var newName = prompt("Change dessert name of ", this.textContent);
      this.textContent = newName;
    });
    document.getElementById("desserts").appendChild(newElt);
  });
  



// DOM FORMS 
// Get values, check values, 


  // Prevent form submit; so no reload page anymore
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  });


  // Get value of an input
  var getValue = document.getElementsByTagName('input').value;
  console.log(getValue); // log input value


  // Set value of an input
  document.getElementsByTagName('input').value = "Hello"; // input value is now 'hello';


  // Check form elements
  var form = document.querySelector("form");
  console.log(form.elements.length); // number of inputs inside form
  console.log(form.elements[0].name); // first input name
  console.log(form.elements.mdp.type); // mdp input type


  // Put focus or remove it
  document.querySelector("input").focus(); 
  document.querySelector("input").blur(); 


  // Add event with focus on input element or blur
  document.querySelector("input").addEventListener("focus", function() { // just replace with "blur"
    document.querySelector("input").style.color = "red";
  });


  // Add event when a checkbox is checked or unchecked
  document.querySelector("input").addEventListener("change", function () {
    console.log("checkbox checked : " + e.target.checked); // true of false if checked or unchecked
  });


  // Event when radio is changed to return value
  for (i = 0; i < document.querySelectorAll("input").length; i++) {
    document.querySelectorAll("input")[i].addEventListener("change", function (e) {
      console.log("chosen radio input : " + e.target.value); // returns value attribute of the new chosen radio input
    });
  }


  // Event when dropping list option is changed
  document.querySelector("select").addEventListener("change", function (e) {
    console.log("Option selected from list : " + e.target.value); // returns value attribute of the new chosen option
  });


  // Validation on submitting with submit event
  document.querySelector("form").addEventListener("submit", function(e) {
    if (e.target.value.indexOf("http://") === -1) {
      console.log("not an URL !");
    }
  });


  // Validation while typing with input event
  document.querySelector("form").addEventListener("input", function (e) {
    if (e.target.value.length < 8) {
      console.log("Password too short");
    }
  });


  // Validation when input loses focus
  document.querySelector("form").addEventListener("blur", function(e) {
    if (e.target.value.indexOf("@") === -1) {
      console.log("email adress invalid");
    }
  });


  // Check passwords
  document.querySelector("form").addEventListener("submit", function (e) {
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var info = document.getElementById("infoPass");
    if (pass1.value !== pass2.value) { // if passwords are different
      info.innerHTML += "The passwords are not the same. Please try again. </br>";
    }
    if (pass1.value.length < 6) { // if password is shorter than 6 char
      info.innerHTML += "The password must contain at least 6 characters. </br>"
    }
    if (!/[0-9]/.test(pass1.value)) { // if no digit
      info.innerHTML += "The password must have at least one number. </br>";
    }
    if (pass1.value === pass2.value && pass1.value.length >=6 && /[0-9]/.test(pass1.value)) { // if all true
      info.innerHTML = "Correct Password !"
    }
    e.preventDefault();
  });


  // Select an option and make a list appear accordingly
  var houses = [ // array of object
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  function getChar(houseCode) { // check code and return names
    switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return [];
    }
  }
  for (i = 0; i < houses.length; i++) { // create form list
    var option = document.createElement("option");
    option.innerHTML = houses[i].name;
    option.setAttribute("value", houses[i].code);
    document.getElementById("house").appendChild(option);
  }
  document.getElementById("house").addEventListener("change", function (e) { // create list with names linked to code
    var char = getChar(e.target.value);
    document.getElementById("char").innerHTML = "";
    for (j = 0; j < char.length; j++) {
      var li = document.createElement("li");
      li.innerHTML = char[j];
      document.getElementById("char").appendChild(li);
    }
  });


  // Get suggestions and select one
  var countryList = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];
var country = document.getElementById("pays");
var suggestions = document.getElementById("suggestions")
country.addEventListener("input", function (e) { // when typing
    suggestions.innerHTML = "";
    for (i = 0; i < countryList.length; i++) { 
        if (countryList[i].indexOf(e.target.value) !== -1) { // check if country name have typed letters
            var suggest = document.createElement("div");
            suggest.classList.add("suggestion");
            suggest.innerHTML = countryList[i];
            suggestions.appendChild(suggest); // add true elements as suggestions
            suggestions.addEventListener("click", function(f) { // on click on element, put that element in input
                country.value = f.target.textContent;
                suggestions.innerHTML = "";
            });
        }
    }
});




// DOM ANIMATIONS 
// All animations; use intervals for basics; CSS whenever you can; requestAnimationFrame() for the rest


  // Set interval; can define an end of it
  setInterval(function() {console.log("hello")}, 1000); // log "hello" every second


  // Clear interval; you must name your setInterval() in a var to be able to use clearInterval()
  var varSetInterval = setInterval(function() {console.log("hello")}, 1000);
  clearInterval(varSetInterval); // stops interval


  // Set timeout; 
  setTimeout(function() {console.log("hello")}, 2000); // starts log after 2sec
  

  // Clear timeout; you must name your setTimeout() in a var to be able to use clearTimeout()
  var varSetTimeout = setTimeout(function() {console.log("hello")}, 1000);
  clearTimeout(varSetTimeout); // stops timeout


  // Set timeout in a loop; tricky because you need to copy the i otherwise it will log only last i value
  var time = 10;
  for (var i = 1; i <= time; i++){
    (function(copy){
      setTimeout(function() { console.log(copy); }, 1000 * i);
    })(i);
  }


  // Request animation frame; 
  function animate() {
    // animation code...
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);


  // Cancel animation frame; you must name your requestAnimationFrame() in a var to be able to use cancelAnimationFrame()
  cancelAnimationFrame(varRequestAnimationFrame)


  // reload page
  location.reload(true);

  // Change url
  window.location.replace("new url");

  // Get window sizes
  window.innerWidth;
  window.innerHeight;

  // Get window scrolls
  window.scrollX;
  window.scrollY;

  // Get current url
  document.URL;

  
  // Start timer and be able to pause/start
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var span = document.getElementById("time");
  var time = 0;
  span.innerHTML = time;
  start.addEventListener("click", function() { // on start
    stop.style.display = "block";
    start.style.display = "none";
    setTime = setInterval(function() {
      time ++;
      span.innerHTML = time;
    }, 1000);
  });
  stop.addEventListener("click", function() { // on stop
    start.style.display = "block";
    stop.style.display = "none";
    clearTimeout(setTime);
  });


  // Rebounding ball with start/stop animation
  var box = document.getElementById("box");
  var ball = document.getElementById("ball"); // #ball must be position: relative and left: 0;
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var ballWidth = parseFloat(getComputedStyle(ball).width);
  var direction = 1;
  function moveBall() {
    var xBall = parseFloat(getComputedStyle(ball).left); // get ball position
    var xMax = parseFloat(getComputedStyle(box).width); // get max width
    if ((xBall + ballWidth > xMax) || (xBall < 0)) {
      direction *= -1; // change direction
    }
    ball.style.left = (xBall + 10 * direction) + "px"; // actual moving line
    animationId = requestAnimationFrame(moveBall);
  }
  start.addEventListener("click", function() { // starts animation
    stop.disabled = false;
    start.disabled = true;
    animationId = requestAnimationFrame(moveBall);
  });
  stop.addEventListener("click", function() { // stops animation
    start.disabled = false;
    stop.disabled = true;
    cancelAnimationFrame(animationId);
  });




// CANVAS
// Draw graphics via scripting to build graphs, modify photos or create animations


  // First point to your canvas element; by default canvas will be 300x150px
  var canvas = document.querySelector("#myCanvas");

  // Update canvas area with width and height
  canvas.width = 400;
  canvas.height = 400;

  // You can check if canvas are supported by the browser
  if (canvas.getContext) {console.log("We can use canvas here !");}

  // To be able to manipulate the points, you have to refer to the context
  var ctx = canvas.getContext("2d");


  // Draw rectangles by defining their x, y, width and height
  ctx.fillRect(0, 0, 10, 10); // here it is a 10px square starting at top left corner (0,0)
  ctx.strokeRect(0, 0, 10, 10); // here it is a 10px square outline starting at top left corner (0,0)
  ctx.clearRect(0, 0, 10, 10); // here it is a 10px transparent square starting at top left corner (0,0)


  // Draw paths to create other shapes
  ctx.beginPath(); // start drawing
  ctx.moveTo(75, 50); // move to a certain pos(x, y)
  ctx.lineTo(100, 75); // draws line from pos defined by moveTo to the ones in lineTo(x, y)
  ctx.fill(); // draws a solid shape from the path content area (need enough points)
  ctx.closePath(); // add a straight line to the path to close it
  ctx.stroke(); // draws shape by stroking its outline


  // Draw arcs to create rounded shapes
  ctx.beginPath(); // start drawing
  ctx.arc(0, 0, 10, 0, Math.PI*2, false); // x, y, radius, startAngle, endAngle, antiClockwise()
  ctx.fill(); // to make it a circle
  ctx.stroke(); // to make it a circled outline


  // Styles and colors to canvas
  ctx.fillStyle = "red"; // fill with red; can use other color such as hexa, rgb, rgba
  ctx.strokeStyle = "blue"; // stroke to blue
  ctx.globalAlpha = 0.2; // 0 to 1 total transparency
  ctx.lineWidth = 4; // sets width for lines
  ctx.lineCap = "round"; // default is "butt"; "round" goes a bit off rounded and "square" does the same squared
  ctx.lineJoin = "round"; // default is "miter"; "round" makes joint rounded and "bevel" makes joint flat
  ctx.setLineDash([10, 5]); // size of dash and spaces


  // Drawing text
  ctx.font = "48px Arial"; // sets font to be used
  ctx.textAlign = "left"; // start, left, center, right, end
  ctx.textBaseline = "middle"; // top, hanging, alphabetic, ideographic, bottom
  ctx.fillText(); // draws normal text
  ctx.strokeText();// draws text stroke




// SERVER REQUESTS
// Manage requests to the server (HTTP, AJAX, JSON)


  // Synchronous GET requet of a doc through web server
  var req = new XMLHttpRequest(); // create HTTP request
  req.open("GET", "http://localhost/repository/file.txt", false); // synchronous GET request; could be POST or PUT
  req.send(null); // sending request; could be POST or PUT
  console.log(req.responseText);


  // Asynchronous GET request
  var req = new XMLHttpRequest();
  req.open("GET", "http://localhost/repository/file.txt"); // no false because asynchronous request
  req.addEventListener("load", function () { // use of load event to make it asynchronous
    console.log(req.responseText);
  });
  req.send(null);


  // Handling errors
  var req = new XMLHttpRequest();
  req.open("GET", "http://localhost/repository/file.txt");
  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // server succeed with the request
      console.log(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText); // error with request information
    }
  });
  req.addEventListener("error", function () {
    console.error("Network error"); // request did not reach server
  });
  req.send(null);


  // Generic AJAX function (AJAX = asynchronous HTTP); 
  // Better to define the function in another js file when you have multiple js file that will need it (link it with script tag above other script tags)
  function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) {
        callback(req.responseText);
      } else {
        console.error(req.status + " " + req.statusText + " " + url);
      }
    });
    req.addEventListener("error", function () {
      console.error("Network error with URL " + url);
    });
    req.send(null);
  }
  function call(answer) { // function that handle the answer (aka callback)
    console.log(answer);
  }
  ajaxGet("http://localhost/repository/file.txt", call);
  // ajaxGet("http://localhost/repository/file.txt", function (answer) {console.log(answer)}); shorter way with anonym function


  // Transform from JS to JSON and from JSON to JS
  var planes = [
    {
      brand: "Airbus",
      model: "A320"
    },
    {
      brand: "Airbus",
      model: "A380"
    }
  ];
  console.log(planes);
  var textPlanes = JSON.stringify(planes); // JS objects array into JSON string
  console.log(textPlanes);
  console.log(JSON.parse(textPlanes)); // JSON string into JS objects array


  // Get data from server converting JSON to JS and display list
  ajaxGet("http://localhost/repository/file.txt", function (answer) {
    var list = JSON.parse(answer); // JS objects array
    list.forEach(function (smth) {
      console.log(smth.thing); // have thing for each smth
    });
  });


  // Split string and create list of li elements
  ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (answer) {
    var arr = answer.split(";");
    console.log(arr);
    arr.forEach(function (element) {
      li = document.createElement("li");
      li.innerHTML = element;
      document.getElementById("languages").appendChild(li);
    });
  });


  // Get data from JSON and put it into table
  ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (answer) {
    arr = JSON.parse(answer);
    console.log(arr);
    arr.forEach( function(element) {
      tr = document.createElement("tr");
      tr.innerHTML = "<td>" + element.nom + "</td>" + "<td>" + element.annee + "</td>" + "<td>" + element.peintre + "</td>";
      document.getElementById("table").appendChild(tr);
    });
  });


  

// API 
// Application Programming Interface are made by people to help others go faster; use geolocation, weather, wiki, etc.


  // API with JSON (works the same but with online url); need ajax file with ajaxGet function defined
  ajaxGet("http://api-website/api/file", function (answer) {
    var arr = JSON.parse(answer);
    arr.forEach(function (element) {code block;});
  });


  // Github profile
  function ajaxGet(url, callback) { // usual ajaxGet func
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) {
        callback(req.responseText);
      } else {
        console.error(req.status + " " + req.statusText + " " + url);
      }
    });
    req.addEventListener("error", function () {
      console.error("Network error with URL " + url);
    });
    req.send(null);
  }
  document.querySelector("form").addEventListener("submit", function (e) { // Get user value on click
    user = document.getElementById("user").value;
    e.preventDefault();
    ajaxGet("https://api.github.com/users/" + user, function (answer) { // Request API
      var profile = JSON.parse(answer); 
      img = document.createElement("img"); // Avatar
      img.src = profile.avatar_url;
      img.style.width = "200px";
      h1 = document.createElement("h1"); // Pseudo
      h1.innerHTML = profile.name;
      h1.style.color = "#3D7B74";
      p = document.createElement("p"); // Website
      p.innerHTML = "<a href='" + profile.blog + "'>" + profile.blog + "</a>";
      document.getElementById("profile").innerHTML = ""; // empty previous search
      document.getElementById("profile").appendChild(img);
      document.getElementById("profile").appendChild(h1);
      document.getElementById("profile").appendChild(p);
    });
  });


  // Get geolocation data; must have user authorization
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    }); // Insert latitude and longitude into #data
  }




// SEND DATA TO SERVER
// Use http and json to send data to servers


  // Basic data sending code
  var identity = new FormData();
  identity.append("login", "Bob"); // Adding info example
  identity.append("password", "azerty");
  var req = new XMLHttpRequest(); 
  req.open("POST", "http://localhost/repository/post_form.php"); // HTTP POST
  req.send(identity);


  // Generic data sending function
  function ajaxPost(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) {
        callback(req.responseText);
      } else {
        console.error(req.status + " " + req.statusText + " " + url);
      }
    });
    req.addEventListener("error", function () {
      console.error("Network error with URL " + url);
    });
    req.send(data);
  }
  var command = new FormData(); // Adaptation of basic code
  command.append("color", "red"); // Adding other info example (they erase previous ofc)
  command.append("size", "43");
  ajaxPost("http://localhost/repository/post_form.php", command, function (reponse) {
      console.log("Command sent to server");
  });


  // Handle form submission
  var form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, function () {}); // Callback func is empty here
  });


  // Data sending checking if JSON data
  function ajaxPost(url, data, callback, isJson) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) {
        callback(req.responseText);
      } else {
        console.error(req.status + " " + req.statusText + " " + url);
      }
    });
    req.addEventListener("error", function () {
      console.error("Network error with URL " + url);
    });
    if (isJson) { // Check if json format
      req.setRequestHeader("Content-Type", "application/json");
      data = JSON.stringify(data);
    }
    req.send(data);
  }
  var movie = { // Creation of a movie object
    title: "Zootopie",
    year: "2016",
    director: "Byron Howard and Rich Moore"
  };
  ajaxPost("http://localhost/javascript-web-srv/post_json.php", movie, function (reponse) {
      console.log("The movie " + JSON.stringify(movie) + " has been sent to the server");
    },
    true // JSON parameter value
  );


  // send feedback from a form (function is defined before ofc)
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var feedback = {
      pseudo: e.target.elements.pseudo.value,
      evaluation: e.target.elements.evaluation.value,
      message: e.target.elements.message.value,
    };
    ajaxPost("http://oc-jswebsrv.herokuapp.com/api/temoignage", feedback, function (reponse) {
      var messageElt = document.createElement("p");
      messageElt.textContent = "Feedback added";
      document.getElementById("result").appendChild(messageElt);
    }, true);
  });




// COOKIES
// 


  // set a cookie
  document.cookie = "cookieName=cookieValue";

  // set a cookie lasting more than a session
  document.cookie = "cookieName=cookieValue; expires=Wed, 19 Aug 2020 22:00:00 GMT"; // date must be in this format...

  // return list of cookies
  document.cookie.split(";"); // cookieName=cookieValue

  // check if a cookie is set
  document.cookie.split(";").indexOf("cookieName=cookieValue"); // true


  // create cookie function
  function createCookie(cookieName, cookieValue, daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
  }
  createCookie("name", "value", 100);
