import { Router } from 'express';

const router = Router();

router.get('/dogpark/bark', (req, res) => {

    // console.log(req.session);

    req.session.dogBarks = req.session.dogBarks ? req.session.dogBarks + 1 : 1;
    console.log(req.session.dogBarks);

    res.send({ data: "bark!" });
});

router.get('/dogpark/shutup', (req, res) => {
    // console.log(req.session);
    const barkingDogs = req.session.dogBarks;
    req.session.dogBarks = 0;

    console.log(req.session.dogBarks);

    res.send({ data: `No more barking! Amount of dogs being silenced is ${barkingDogs}` });
});

router.get('/dogpark/shutdown', (req, res) => {
    // Of these two ways of logging out of a user, no one is better than the other
    // req.session.dogBarks = undefined;
    req.session.destroy(() => {
        res.send({ data: "The park is now closed." });
    })
});

export default router;