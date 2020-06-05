const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const isEmail = require("validator").isEmail;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        minlength: 5,
        maxlength: 225,
        validate: [ isEmail, 'invalid email address' ]
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 2048 
        
    },
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
