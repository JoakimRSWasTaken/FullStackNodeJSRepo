//"use strict"

// NEVER EVER do this - missing declaration type
totalGlobalVariable = "";

// Don't do this either
var globalVariable = "This is defined in the global scope";

// public is a reserved word. When using strict mode, the compiler will not like this
const public = "this variable is named public";

{ // this is called a block scope
    console.log("What is this?");
    var someVariable = true;
    {
        var someVariable = false;
    }
    //console.log(someVariable);
}

{
    let someVariable = true;
    {
        let someVariable = false;
    }
    console.log(someVariable);
}

// This prints 5, 5 times. var is defined into the global scope so once it has been set to 5, it 
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// This prints 0 -> 5. let is only defined within the scope
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}