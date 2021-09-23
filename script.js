// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());
// You can insert the variable name or value in the argument aka parenthesis.

// 1c
console.log(warmHugs.replace("like", "love"));
// warmHugs = warmHugs.replace("like", "love")
// let warmHugs = "Hi, I'm Olaf and I love warm hugs.";

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
console.log(beenImpaled.slice(18));
// console.log(beenImpaled.slice(18, 36)); (The second number should be the number after what you want to include. 36 instead of 35)
// console.log(beenImpaled.slice(-18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = "I don't have a skull" + dotDotDot + "or bones.";
// let skullBones = `I don't have a skull${skullBones}or bones.`;

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.ceil(randomNumber); // Try not to use .ceil when creating a random number.
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);
// let randomNumber = Math.random();
// randomNumber *= 3;
// randomNumber = Math.floor(randomNumber);
// randomNumber++;
// console.log(randomNumber);

// Bonus
// 6
console.log(" Let It Go!".toUpperCase().repeat(2).trim);
// You can add multiple arguments in the argument sections aka parenthesis. (Chaining methods together)
// No order is necessary in these multiple arguments.

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
reindeers = ("Reindeers_are_better_than_people.");
console.log(reindeers);
// console.log(reindeers.replace(/ /g, "_"));
// g = global. Means select all the instances of space inside the / /.

// 8
console.log(Math.sqrt(2));
// console.log(Math.SQRT2);

// 9
// let newrandomNumber = Math.random();
// newrandomNumber *= 23;
// newrandomNumber = Math.floor(newrandomNumber);
// console.log(newrandomNumber);
var newrandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);
// Order of operations method.
// var newrandomNumber = Math.floor(Math.random() * 17 + 7); (17 sets the range and 7 sets the floor)

// 9
// Completed on separate lines
// let newRandomNumber = Math.random();
// newRandomNumber *= 17;
// newRandomNumber = Math.floor(newRandomNumber);
// newRandomNumber += 7;

// Extra Bonus: Completed on a single line
var newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);
// var newRandomNumber = Math.floor(Math.random() * (16 + 1) + 7);
// var newRandomNumber = Math.floor(Math.random() * 17 + 7);
// var newRandomNumber = Math.floor(A number from 0 up to 16.999 + 7);
// var newRandomNumber = Math.floor(A number from 7 up to 23.999);
// var newRandomNumber = A whole number from 7 up to 23;
console.log(newRandomNumber);

// Using Ceil (Number could possibly be 6 in this case)
let randomNumber = Math.ceil(Math.random() * 17) + 6;



