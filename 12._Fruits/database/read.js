import db from './connection.js';

// add .toArray() when using find() instead of findOne()
const banana = await db.fruits.findOne({ name: 'Banana' });

console.log(banana)