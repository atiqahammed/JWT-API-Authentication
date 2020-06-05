const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/jwtAuth', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },  
    () => {
        console.log("Connected to database");
});


app.use("/api/user", authRoute);







app.listen(3050, () => {
    console.log("Application is running on port:: 3050");
});