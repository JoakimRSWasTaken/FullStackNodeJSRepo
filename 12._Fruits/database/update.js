import db from './connection.js';

const updatedOrange = await db.fruits.updateOne({ name: 'Orange' }, { $set: { price: 100 }, $ });

console.log(updatedOrange);