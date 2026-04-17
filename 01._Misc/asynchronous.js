// JavaScript is single-thread, everuthing runs in the main thread

// examples of blocking operations
// network, database calls, files, user inputs, maybe hardware on servers


// Solution 1: Callback functions

// Problem: Callback Hell and Pyramid of Doom
// It works but it's unreadable and unmaintainable

/*
someLibraryFunction(() => {
    callSomeOtherFunction(() => {
        someNestedFunction(() => {

        })
    });
});
*/

// Solution 2: Promises

// pending, fulfilled
// resolved, rejected


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             // throw "Aww shiet";
//             resolve("Everything went well.");
//         } catch (error) {
//             reject(error);
//         }
//     }, 2000);
// })
// .then((successMessage) => console.log(successMessage))
// .catch((errorMessage) => console.log(errorMessage));

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                // throw new Error("Something Bad");
                resolve("Something Good");
            } catch (error) {
                reject(error);
            }
        }, 3000);
    });

}

myPromise()
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.log(errorMessage));

console.log(myPromise());

// Problem: Nested promises

// Solution: Async / Await (Promises under the hood but more aesthetically pleasing)

try {
    const successMessage = await myPromise();
    console.log(successMessage);
} catch (errorMessage) {
    console.log(errorMessage);
}
