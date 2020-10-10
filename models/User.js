const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator"); 

const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);//Appel de la méthode plugin




module.exports = mongoose.model("User", userSchema);//Export du schéma en tant que modèle Mongoose