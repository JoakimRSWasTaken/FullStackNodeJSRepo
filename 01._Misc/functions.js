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

function eatingAction(name) {
    return `${name} is eating`;
}

console.log(genericActionPerformer("Valdemar", eatingAction));