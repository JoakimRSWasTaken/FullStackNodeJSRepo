
    // Node REPL

    // type coercion
    // strict equality

    // Rule 1: Use const per default unless it needs to change, then use let

    const luckyNumber = 7;
    
    console.log(luckyNumber);

    // JS Data Types - 8 data types
    // String, Boolean, Number, BigInt, Object, Symbol, null, undefined


    // Opretter et Object
    const person = {
        // key-value pair
        name: "Joakim"
    };

    console.log(person);

    // Ændrer data i objektet
    person.name = "Gustavo";
    person.age = 24;

    console.log(person);


    const people = [];

    people.push(person);
    people.push("Victor");

    console.log(people);