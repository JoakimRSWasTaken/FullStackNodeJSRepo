import db from './connection.js';

const createdOrange = await db.fruits.insertOne({ name: 'Orange', color: 'Orange', price: 5.95 });

console.log(createdOrange);