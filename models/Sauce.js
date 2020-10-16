const mongoose = require("mongoose");


//Création du schéma de données
const sauceSchema = mongoose.Schema({
  name: {type: String, required: true},
  manufacturer: {type: String, required: true},
  description: {type: String, required: true},
  imageUrl: {type: String, required: true},
  mainPepper: {type: String, required: true},
  heat: {type: Number, required: true},
  likes: {type: Number, required: false},
  dislikes: {type: Number, required: false},
  usersLiked: {type: [String], required: false},
  usersDisliked: {type: [String], required: false}
});

/*
{
    "name": "Tartare",
    "manufacturer": "Myself", 
    "description": "Fish sauce",
    "mainPepper": "Pickle",
    "imageUrl": "https://cdn.pixabay.com/photo/2015/11/16/16/28/haddock-1045953_960_720.jpg",
    "heat": 5,
    "likes": 10,
    "dislikes": 1,
    "usersLiked": [""],
    "usersDisliked": [""]

}*/

module.exports = mongoose.model("Sauce", sauceSchema);//Export du schéma en tant que modèle Mongoose