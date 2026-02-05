// hoisting: elevating e.g. a function to the top of the call stack. 
// This makes them available everywhere as long as they are in the same scope.
console.log(getRandomInt(4, 8));

// The function here is a regular function in JS
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// The function here is what we call an anonymous function
const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

// The function here is what we call an arrow function
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};


// JS: Functions are first class citizen (an entity that supports all the operations available to other entities)
                            // string, function reference
function genericActionPerformer(name, action) {
    return action(name);
}

// Example of a callback function (Here it is just a function though)
function eatingAction(name) {
    return `${name} is eating`;
}

// Using the eatingAction function as a callback function
console.log(genericActionPerformer("Valdemar", eatingAction));

// No one uses anonymous functions anymore. Arrow functions are cooler.
// Arrow functions work in a specific way with the this keyword. They bind it in the correct scope.
const runningAction = (name) => {
    return `${name} is running`;
};

console.log(genericActionPerformer("Sidi", runningAction));

// My solution
console.log(genericActionPerformer("Kristian", (name) => {return `${name} is laughing`}));

// Ideal solution
console.log(genericActionPerformer("Kristian", (name) => `${name} is laughing`));