import { Router } from 'express';
import db from '../database/connection.js';

const router = Router();

router.get('/recipes', async (req, res) => {
    
    const recipes = await db.all(`SELECT * FROM recipes;`);
    
    res.send({ data: recipes });
});

router.post('/recipes', async (req, res) => {

    const { recipeName, description, minutesToCook} = req.body;
    
    const result = await db.run(`
        INSERT INTO recipes 
        (recipe_name, description, minutes_to_cook)
        VALUES (?, ?, ?);
    `, [recipeName, description, minutesToCook]);
    // Never use string interpolation in databases since it allows users to send anything:
    /* 
        `
        INSERT INTO recipes 
        (recipe_name, description, minutes_to_cook)
        VALUES ('${recipeName}', '${description}', '${minutesToCook}');
        `
    */
   // Use prepared statements instead with the (?, ?, ?, ...), [...]

    res.send({ data: result });

});

export default router;