import db from './connection.js';

const deletedFruit = await db.fruits.deleteOne({ price: 100 });

console.log(deletedFruit);