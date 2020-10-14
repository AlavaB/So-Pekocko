const mongoose = require("mongoose");


//Création du schéma de données
const sauceSchema = mongoose.Schema({
  name: {type: String, required: true},
  manufacturer: {type: String, required: true},
  description: {type: String, required: true},
  imageUrl: {type: String, required: true},
  mainPepper: {type: String, required: true},
  heat: {type: Number, required: true},
  likes: {type: Number, required: true},
  dislikes: {type: Number, required: true},
  usersLiked: {type: [String], required: true},
  usersDisliked: {type: [String], required: true}
});

/*
{
    "name": "Tartare",
    "manufacturer": "moi-même", 
    "description": "Fish sauce",
    "mainPepper": "cornichon",
    "imageUrl": "https://media.istockphoto.com/photos/square-white-bowl-filled-with-tar...",
    "heat": 5,
    "likes": 10,
    "dislikes": 1,
    "usersLiked": [""],
    "usersDisliked": [""]

}*/

module.exports = mongoose.model("Sauce", sauceSchema);//Export du schéma en tant que modèle Mongoose