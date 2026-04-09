// Hashing is a one-way function
// It is not impossible to go the other way but it is "computationally infeasible"
// The amount of possibilities as astronomical

import bcrypt from 'bcrypt';

const password = 'hunter123';
const passwordComparison = 'hunter123';
const saltRounds = 14;

// /auth/signup or /auth/register
const hashedPassword = await bcrypt.hash(password, saltRounds);
console.log(hashedPassword);

// /auth/login
const isSamePassword = await bcrypt.compare(passwordComparison, hashedPassword);
console.log(isSamePassword);