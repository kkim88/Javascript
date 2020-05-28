//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...

let str ="";
if (str === "") {
    console.log("true");
}
else {
    console.log("false");
}



/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 

//your code...

let str2 = "Learning Javascript is fun!";
let str3 = str2.replace("fun", "cool");
console.log(str3);



/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 



//your code...

let numArray = [1, 2, 3, 4, 5];
let numArray1 = numArray.map(x => x ** 2);
console.log(numArray1);




/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.



//your code...

let numArray2 = [1, 3, 5, 7, 9, 1, 3, 5];
let numArray3 = numArray2.filter((num) => num > 3);
console.log(numArray3);







/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...

let numArray4 = [0, 6, 7, 8, 9];
let numSum = (sum, value) => sum + value;
console.log(numArray4.reduce(numSum));





/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  



//your code...

// 1. G = C, T = A
// 2. separate characters
// 3. replace with pairings
// 4. output new string

function dnaPairs(dnaString) {

    let dnaReplace = dnaString.split("");
    let charReplace = function(char) {
        switch (char) {
            case "G": {
                return "C";
                break;
            }
            case "C": {
                return "G";
                break;
            }
            case "T": {
                return "A";
                break;
            }
            case "A": {
                return "T";
                break;
            }
        };
    }

for (let i = 0; i < dnaString.length; i++) {
    charReplace(dnaString[i]);
}

return dnaReplace;

}



/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
    //your code...
}

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    //your code...
};




/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");


console.log(mapObj.has({company : "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.
var reversedOnes = [];

for(let i =  ones.length -1; i >= 0; i--) { 
    reversedOnes.push(ones[i]); 
}
console.log(reversedOnes);


/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function enterNum(num1) {
    console.log('Your number is ' + num1);
  }
  
  function performer(cb) {
    var num1 = prompt('Please enter a number.');
    cb(num1);
  }
  
  performer(enterNum);


/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

// Destructuring: A way to extract data from arrays and objects and use them in variables easily

const petsArray = ["Dog", "Cat", "Fish", "Hamster"];

// If I wanted to take each of the array elements and put them in separate arrays, I would have to repeatedly create new arrays and fill them one by one. Destructuring allows for an easy way to do this.

let [pets1, pets2, pets3, pets4] = petsArray;

// Now if I print pets1, pets2, pets3, and pets4, they will each contain one of the petsArray elements.

console.log(pets1, pets2, pets3, pets4);