/*const Sauce = require("../models/Sauce");


exports.createThing = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    const sauce = new Sauce({
        ...sauceObject,//Copie les infos qui sont dans le corps de la requête
        imageUrl: `${req.protocol}: //${req.get("host")}/images/${req.file.filename}`
    });
    sauce.save()//Cette méthode enregistre mon objet Sauce dans la base de données
        .then(() => res.status(201).json({message: "Sauce enregistrée !"}))
        .catch(error => res.status(400).json({error}));
};

exports.modifyThing = (req, res, next) => {
    Sauce.updateOne({_id: req.params.id}, sauce)
    .then(() => res.status(200).json({message: "Sauce modifiée !"}))
    .catch(error => res.status(404).json(error));
};

exports.deleteThing = (req, res, next) => {
    Sauce.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: "Sauce supprimée !"}))
        .catch(error => res.status(400).json(error));
};

exports.getOneThing = (req, res, next) => {
    Sauce.findOne({_id: req.params.id})
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(404).json({error}));
};

exports.getAllThings = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({error}));
};*/
