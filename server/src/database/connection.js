const { DDBB_CONSTANTS } = require('../constants');

const mongoose = require('mongoose');
mongoose.connect(
  `mongodb://${DDBB_CONSTANTS.url}:${DDBB_CONSTANTS.port}/${DDBB_CONSTANTS.databaseName}`
);

const ddbb = mongoose.connection;

ddbb.on('connected', () => {
  console.log('Conexión a la BBDD realizada correctamente');
});
ddbb.on('error', () => {
  console.log('Error en la conexión a la BBDD');
});

module.exports = mongoose;
