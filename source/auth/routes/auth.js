const router = require("express").Router();
const User = require("../model/User");
const hash = require('object-hash');
const jwt = require("jsonwebtoken");

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


router.post("/login", async (req, res) => {

    const hashedPassword = hash(req.body.password);

    const emailExist = await User.findOne({email: req.body.email});
    if(!emailExist) res.status(400).send("invalid authentication credential");

    console.log(hashedPassword);
    console.log(emailExist.password);
    if(hashedPassword === emailExist.password) {
        console.log(emailExist.id);
        const token = jwt.sign({id: emailExist.id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send(token);
    } else {
        res.status(400).send("invalid authentication credential");
    }

});


module.exports = router;