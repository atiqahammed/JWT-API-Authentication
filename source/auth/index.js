const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



dotenv.config();

mongoose.connect(process.env.DB_CONNECT || "mongodb://localhost:27017/jwtAuth", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },  
    () => {
        console.log("Connected to database");
});



app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);






app.listen(3050, () => {
    console.log("Application is running on port:: 3050");
});