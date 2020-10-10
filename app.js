const express = require('express');
const bodyParser = require("body-parser");//Importation de body-parser pour extraire l'objet Json de la demande
const mongoose = require("mongoose");


const userRoutes = require("./routes/user");//Importation du router



mongoose.connect('mongodb+srv://Alava:Alava285@cluster0.fy4qk.mongodb.net/So-Pekocko?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

app.use((req, res, next) => {//Gestion de CORS, ajout des headers pour gérer la double origine (localhost:3000 et 4200)
    res.setHeader('Access-Control-Allow-Origin', '*');//Accès à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//Ajout des headers mentionnées aux requêtes envoyées vers l'API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');//Envoie des requêtes avec les méthodes mentionnées
    next();
});

app.use(bodyParser.json());//Middleware global de la fonction json

app.use("/api/auth", userRoutes);

module.exports = app;