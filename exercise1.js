//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...

let currentTemp = 60;
function toCelsius(cel) {
    cel = (currentTemp - 32) * (5/9);
    return cel;
}

currentTemp = toCelsius();

console.log(currentTemp + "° Celsius");

function toFahrenheit(fah) {
    fah = currentTemp * (9/5) + 32;
    return fah
}

currentTemp = toFahrenheit()
console.log(currentTemp + "° Fahrenheit");






/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...

let age = function() {
    var currentAge = 30;
    if (currentAge >= 18){
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}





/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...

let stringArray = function() {
    let str = "The five boxing wizards jump quickly.";
    str = str.split();
    str = str.join();
    console.log(str);
}







/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...

let phoneReverse = function() {
    let phone = "1234567";
    phone = phone.split("");
    phone = phone.reverse();
    phone = phone.join("");
    console.log(phone);
}





/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...

var car = {
        make: "Toyota",
        model: "Camry",
        year: "2002",
        color: "Red",
        }

function getCar() {
  console.log(car.year, car.color, car.make, car.model);
  return;
}



/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...

let oddEven = function(){
    for (let i = 0; i <= 15; i++) {
        if (i === 0) {
            console.log(i + " is even");
        }
        else if (i % 2 === 0) {
            console.log(i + " is even");
        }
        else
        console.log (i + " is odd");
    }
}




/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...

let printInt = function() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("TEKcamp");
        }
        else if (i % 3 === 0) {
            console.log("TEK");
        }
        else if (i % 5 === 0) {
            console.log("camp");
        }
        else {
            console.log(i);
        }
    }
}

/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...

for (let i = 0; i <= 10; i = i +3) {
    console.log(nums[i]);
}



// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

var school = 'TEKcamp'
foodArray[6] = school;
console.log(foodArray[6]);
for (i = 0; i <= 7; i++) {
    if (foodArray[i].endsWith("s")) {
        console.log(foodArray[i] + " are " + adjectiveArray[i]);
    }
    else {
        console.log(foodArray[i] + " is " + adjectiveArray[i]);
    }
}

/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = [];
function doMath() {};


