const router = require("express").Router();
const varify = require("./varifyToken");

router.get("/", varify, (req, res) => {

    res.send({
        posts: {
            title: "this is the random post title",
            detailes: "only authorized user will be able to see this post."
        }
    });

});


module.exports = router;