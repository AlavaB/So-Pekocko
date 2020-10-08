const express = require('express');


const app = express();

app.use((req, res, next) => {//Gestion de CORS, ajout des headers pour gérer la double origine (localhost:3000 et 4200)
    res.setHeader('Access-Control-Allow-Origin', '*');//Accès à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//Ajout des headers mentionnées aux requêtes envoyées vers l'API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');//Envoie des requêtes avec les méthodes mentionnées
    next();
});


module.exports = app;