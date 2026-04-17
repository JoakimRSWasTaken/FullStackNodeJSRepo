import db from './connection.js'

//console.log(process.argv.includes('--delete'));

// process.argv produces an array of the arguments given with the command for running the file
// process.argv.find((argument) => argument === '--delete')
// process.argv.includes('--delete')

const deleteMode = process.argv.includes('--delete');

if (deleteMode) {
    await db.exec(`DROP TABLE IF EXISTS ingredients`);
    await db.exec(`DROP TABLE IF EXISTS recipes`);
}

/*
    .exec() // Run DCL / DDL (with no parameters)
    .run() // Run a query without returning data (INSERT, UPDATE, DELETE etc.)
    .all() // Run a query and retrieve the result set (SELECT)

*/


/* Conventions for SQL
    Use snake case
    Plural for Tables
    Use lowercase for tables
*/

// DDL - Data Definition Language
await db.exec(`
    CREATE TABLE IF NOT EXISTS recipes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_name VARCHAR(100) UNIQUE NOT NULL,
        description TEXT, 
        minutes_to_cook INTEGER
    );

    CREATE TABLE IF NOT EXISTS ingredients(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_id INTEGER,
        ingredient_name TEXT NOT NULL,
        units INTEGER,
        unit_of_measurement, TEXT CHECK( unit_of_measurement IN ("l", "g", "unit") ),
        FOREIGN KEY (recipe_id) REFERENCES recipes (id)
    );
`);


// DML - Data Modeling Language
// seeding
if (deleteMode) {
    await db.run(`INSERT INTO recipes (recipe_name) VALUES ('Potato Pancakes');`);
    await db.run(`INSERT INTO recipes VALUES ('2', 'Baked Potato', 'Also known as a jacket potato.', 12);`);
    await db.run(`INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES (1, 'flour', 60, 'g')`);
    await db.run(`INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES (1, 'bacon', 150, 'g')`);
}