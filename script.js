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


// 7a
let reindeers = "Reindeers are better than people.";

// 7b
reindeers = ("Reindeers_are_better_than_people.");
console.log(reindeers);

// 8
console.log(Math.sqrt(2));

// 9
let newrandomNumber = Math.random();
newrandomNumber *= 23;
newrandomNumber = Math.ceil(newrandomNumber);
newrandomNumber = Math.floor(newrandomNumber);
console.log(newrandomNumber);



