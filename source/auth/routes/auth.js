const router = require("express").Router();
const User = require("../model/User");
const hash = require('object-hash');

router.post("/register", async (req, res) => {

    const hashedPassword = hash(req.body.password);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.send({
            name: savedUser.name,
            email: savedUser.email,
            success: true
        });
    } catch(err) {
        res.status(400).send(err);
    }
});


module.exports = router;