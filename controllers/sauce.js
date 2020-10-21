const Sauce = require("../models/Sauce");
const User = require("../models/User");

exports.createSauce = (req, res) => { 
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    const sauce = new Sauce({
        ...sauceObject,//Copie les infos qui sont dans le corps de la requête
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}` //Génération de l'URL de l'iamge
    });
    sauce.save()//Cette méthode enregistre mon objet Sauce dans la base de données
        .then(() => res.status(201).json({message: "Sauce enregistrée !"}))
        .catch(error => res.status(400).json({error}));
    
};

/*exports.likeSauce = (req, res) => {
    const userObject = req.body;
    delete userObject._id;
    const user = new User({
        ...req.body.user,
        like: {type: Number}
    });
    user.save()
        .then(() => res.status(201).json({message: "Like enregistré !"}))
        .catch(error => res.status(400).json({error}));
};*/

exports.modifySauce = (req, res) => {
    Sauce.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: "Sauce modifiée !"}))
    .catch(error => res.status(404).json(error));
};

exports.deleteSauce = (req, res) => {
    Sauce.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: "Sauce supprimée !"}))
        .catch(error => res.status(400).json(error));
};

exports.getOneSauce = (req, res) => {
    Sauce.findOne({_id: req.params.id})
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(404).json({error}));
};

exports.getAllSauces = (req, res) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({error}));
};