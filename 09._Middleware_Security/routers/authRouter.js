import { Router } from 'express';

const router = Router();

function isAdmin(req, res, next) {
    // This simulates getting the value from a database
    // and/or comparing tokens / sessions
    const isAdmin = true;
    if (isAdmin) {
        req.user = {
            isAdmin,
            username: 'Bob'
        };
        return next();
    }
    res.status(403).send({ errorMessage: "You don't have the right, O you don't have the right."});
}

router.get('/auth/admin', isAdmin, (req, res) => {
    console.log(req.user);
    res.send({ data: 'You are an admin, you can see this: 10 points for Gryffindor!' });
});

export default router;