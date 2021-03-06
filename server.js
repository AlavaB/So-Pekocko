const http = require('http');//Importation du package http de Node
const app = require('./app');//Importation de l'application Express

const normalizePort = val => {//La fonction normelizePort renvoie un port valide
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);//On "set" le port

const errorHandler = error => {//La fonction errorHandler recherche les différentes erreurs et les gère + enregistrement dans le serveur
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);//Création du serveur avec la méthode createServer et la fonction app 

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);//Enregistrement d'un écouteur d'évènements consignant le port sur lequel le serveur s'exécute dans la console
