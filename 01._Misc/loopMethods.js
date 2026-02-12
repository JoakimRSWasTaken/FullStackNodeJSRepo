// .map, .forEach, .filter, .reduce, .sort, .find, .indexOf

// rule 1: Use loop methods whenever possible
// rule 2: only use for loops in JavaScript for finger counting
// rule 3: Use map over forEach if you need the data afterwards
// These rules are applicable in JavaScript but not necessarily in all other programming languages

const numbers = [1, 2, 3, 4, 5];

// Double the numbers
const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

// console.log(numbers);
// console.log(doubledNumbers);

// Side effects in programming:
// having an observable effect besides from reading the input of a function and producing an output, e.g. changing a variable

const balloonAnimals = [
    { type: "Koala", difficulty: 5.0 },
    { type: "Dog", difficulty: 2.5 },
    { type: "Giraffe", difficulty: 1.5, isTall: true }
]

// Make all the difficulty levels for the balloon animals 3.0 except for Koala
const updatedDifficultyBalloonAnimals = balloonAnimals.map((balloonAnimal) => {
    if(balloonAnimal.type !== "Koala") balloonAnimal.difficulty = 3.0;
    return balloonAnimal;
});

const updatedDifficultyBalloonAnimalsOneLiner = balloonAnimals.map((balloonAnimal) => ({
    difficulty: balloonAnimal.type !== 'Koala' ? 3.0 : balloonAnimal.type,
    ...balloonAnimal

}));

// We have changed the objects themselves so the original array points to the same objects as the updated array. Use map to see forward.
// console.log(balloonAnimals);
// console.log(updatedDifficultyBalloonAnimals);
console.log(updatedDifficultyBalloonAnimalsOneLiner);

numbers.map((element, index, originalArray) => console.log(element, index, originalArray));