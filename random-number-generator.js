
var name = prompt("Ever wanted to know the probability of a giant squid flicking your pinkie toe whilst swimming in the arctic sea? All I need is your name hehe.");

var number = Math.random();
number = number * 100;
number = Math.floor(number) + 1;
console.log(number);

var firstChar = name.slice(0,1);

var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length).toLowerCase();

alert("Alright " + upperCaseFirstChar + restOfName + ", prepare yourself...")

if (number >= 70) {
alert("The probability of a giant squid flicking " + upperCaseFirstChar + restOfName + "'s pinkie toe whilst swimming in the arctic sea is " + number + "/100!! Are you sure you want to go swimming today..?")
} 

if (number >= 30 && number <= 69) {
    alert("The probability of a giant squid flicking " + upperCaseFirstChar + restOfName + "'s pinkie toe whilst swimming in the arctic sea is " + number + "/100!! It probably won't happen, statistically speaking..")
}

if (number <= 29) {
    alert("The probability of a giant squid flicking " + upperCaseFirstChar + restOfName + "'s pinkie toe whilst swimming in the arctic sea is " + number + "/100!! Don't worry, you'll be fine!")
}
