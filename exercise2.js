//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...

let i = 0;
while (i<10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}




/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...

let num = 30;
let addition = function() {
    num = num + 2;
}
let mult = function() {
    num = num * 20;
}
let div = function() {
    num = num / 10 ** 2;
}
addition();
mult();
div();

console.log(num);


/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

console.log(`20 is ${!!(20)} because nonzero numbers are truthy.`);
console.log(`0 is ${!!(0)} because the number 0 is falsy.`);
console.log(`"zero" is ${!!("zero")} because it is strings with characters in them are truthy.`);
const zero = 20; //variable must be defined for the String interpolation to work.
console.log(`const zero = 20; is ${!!(zero)} because it is a variable with a value of 20 and nonzero numbers are truthy.`);
console.log(`null is ${!!(null)} because the null values are falsy.`);
console.log(`"0" is ${!!("0")} because it is a string consisting of the number 0 and not numerical value of 0 and a string of a single character is truthy.`);
console.log(`!"" is ${!!(!"")} because the ! is a logical operator meaning "not", making the value "not false" and therefore truthy.`);
console.log(`{} is ${!!({})} because objects are truthy.`);
console.log(`() => {console.log("hello TEKcamp!"); is ${!!(() => {console.log("hello TEKcamp!");})} because it is a function and functions are truthy.`);
console.log(`125 is ${!!(125)} because nonzero numbers are truthy.`);
console.log(`undefined is ${!!(undefined)} because undefined values are falsy.`);
console.log(`"" is ${!!("")} because the empty strings are falsy.`);




/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

// ** KEPT THE OLD CODE COMMENTED OUT FOR REFERENCE SEE FOLLOWING BLOCK FOR SWITCH STATEMENT**

// if(day === "monday") {
//    console.log("we got a long week ahead of us...");
//} else if(day === "tuesday") {
//    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
//} else if (day === "wednesday") {
//   console.log("We are smack dab in the middle of the week");
//} else if (day === "thursday") {
//    console.log("Thursday night... the mood is right");
//} else if (day === "friday") {
//    console.log("TGIF.  Friday truly is the best day of the week!")
//} else {
//    console.log("It's a weekend!")
//}

switch (day) {
    case "monday": {
        console.log("we got a long week ahead of us...");
        break;
    }
    case "tuesday": {
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    }
    case "wednesday": {
        console.log("We are smack dab in the middle of the week");
        break;
    }
    case "thursday": {
        console.log("Thursday night... the mood is right");
        break;
    }
    case "friday": {
        console.log ("TGIF.  Friday truly is the best day of the week!");
        break;
    }
    default: {
        console.log ("It's a weekend!");
    }
}



/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:

// ** ORIGINAL CODE COMMENTED OUT FOR REFERENCE **
const age = 10;
//if (age > 21) console.log("adult"); else {
//    console.log("minor");
//}

let adultMinor = age > 21 ? console.log("adult") : console.log("minor");

//if (age > 13 && age < 19) console.log('teen'); else {
//    console.log("not a teenager");
//};

let teenager = age > 13 && age < 19 ? console.log("teen") : console.log("not a teenager");

//if (age > 65) console.log("retired"); else {
//    console.log("still working...");
//}

let retirement = age > 65 ? console.log("retired") : console.log("still working...");


/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

let me = {
    name: "Katherine Kim",
    age: 31,
    gender: "female",
    hobbies: "video games, writing, trading cards",
    profession: "student",
    education: "bachelor's",
    learn: function() {
        console.log(this.name);
    },
    birthday: function() {
        let newAge = this.age + 1;
        console.log("On her next birthday, " + this.name + " will be " + newAge + " years old.");
    }
}


/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...

let dog = {
    name: "Lily",
    gender: "female",
    color: "white",
    age: 7,
    height: 1.5,
    weight: 20,
    voice: "loud",
    about: function() {
        console.log(this.name + " is a " + this.gender + this.color + " dog and is " + this.age + " years old.");
        console.log(this.name + " is " + this.height + " feet tall and weighs " + this.weight + " pounds.")
    },
    bark: function() {
        console.log(this.name + " barks with a " + this.voice + " voice.");
    }
}



/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...

let favoriteData = function() {
    let fav1 = "string";
    let fav2 = "boolean";
    let fav3 = "object";

    console.log(`My first favorite data type is ${fav1} because they are have such a wide array of applications.`)
    console.log(`My second favorite data type is ${fav2} because true and false are two simple concepts that make so many things possible.`)
    console.log(`My third favorite data type is ${fav3}, because you can group data together and saying "object oriented programming" sounds cool to people.`)
}

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...

function multiple(x) {
    function fn(y) {
        
    }

}


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...

let message = ' is how much the stock has increased';
let growthRate = .05;

function stockGain(basis) {

}

console.log(futureValue);



