/*
Når vi importerer, importerer vi default. Hvis der kun er én default function, kan vi kalde den hvad som helst og bruge variabelnavnet til at kalde den function.
Hvis man importerer flere functions, skal man, når man kalder en specifik funktion, bruge .functionName()-notation.

*/
import { getNewCookieBatch as cookieFactory } from './cookieFactory.js';

console.log(cookieFactory.getNewCookieBatch());