const express = require('express');
const bodyParser = require("body-parser");//Importation de body-parser pour extraire l'objet Json de la demande
const mongoose = require("mongoose");
const path = require("path");

const Sauce = require("./models/Sauce");

const userRoutes = require("./routes/user");//Importation du routeur


/*****Logique de connexion à MongoDB********/
mongoose.connect('mongodb+srv://Alava:Alava285@cluster0.fy4qk.mongodb.net/So-Pekocko?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();


/**********Gestion de CORS, ajout des headers pour gérer la double origine (localhost:3000 et 4200)**************/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');//Accès à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//Ajout des headers mentionnées aux requêtes envoyées vers l'API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');//Envoie des requêtes avec les méthodes mentionnées
    next();
});

app.use(bodyParser.json());//Middleware global de la fonction json
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);

app.post("/api/sauces", (req, res) => {
  delete req.body._id;
  console.log(req.body);
  const sauce = new Sauce({
      ...req.body//Copie les infos qui sont dans le corps de la requête
  });
  sauce.save()//Cette méthode enregistre mon objet Sauce dans la base de données
      .then(() => res.status(201).json({message: "Sauce enregistrée !"}))
      .catch(error => res.status(400).json({error}));
});

app.put("/api/sauces/:id", (req, res) => {
  Sauce.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
  .then(() => res.status(200).json({message: "Sauce modifiée !"}))
  .catch(error => res.status(404).json(error));
});

app.delete("/api/sauces/:id", (req, res) => {
  Sauce.deleteOne({_id: req.params.id})
      .then(() => res.status(200).json({message: "Sauce supprimée !"}))
      .catch(error => res.status(400).json(error));
});

app.get("/api/sauces/:id", (req, res) => {
  Sauce.findOne({_id: req.params.id})
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(404).json({error}));
});

app.get("/api/sauces", (req, res) => {
  Sauce.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({error}));
});



module.exports = app;