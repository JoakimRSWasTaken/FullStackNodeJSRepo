import { Router } from 'express';

const router = Router();

import { getOrCreateSandboxContext, executeCodeInSandbox } from '../util/replUtil.js';

router.get('/hello', (req, res) => {
    res.send({ data: "Hello!" });
});

router.post('/api/repl', (req, res) => {
    // Optional chaining of req.body to return undefined if req.body is that. Avoids crash if we look for replCode in undefined
    // let replCode = req.body?.replCode;
    if (!req.body) {
        return res.status(400).send( {errorMessage: 'Missing a JSON body' });
    }
    const { replCode, sandboxId } = req.body;

    if(!replCode) {
        res.status(400).send({ errorMessage: 'Missing the key replCode in the JSON body' });
    }

    const sandbox = getOrCreateSandboxContext(sandboxId);

    const { error, success, output, result } = executeCodeInSandbox(sandbox, replCode);


    if (error) {
        res.status(500).send({ 
            data : { error },
                errorMessage: 'Error executing the provided code',
        });
    }

    // replCode = replCode.replace('console.log("', ''). replace('")');
    
    res.send({ data: { success, output, result } });
});


export default router;