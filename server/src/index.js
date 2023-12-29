// Arranque de la aplicación
const express = require('express');
const app = express();
const { auditStart, auditStop } = require('./controllers/audit/auditStart');

// Conexión a la BBDD
const ddbb = require('./database/connection');

// Importación y configuración del body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));

// Importación y configuración del coockie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// CONFIGURACIÓN BÁSICA DEL SERVIDOR
const {
  SERVER_CONSTANTS,
  DDBB_CONSTANTS,
  CORS_API_REST_CONSTANTS,
} = require('./constants');
const PORT = SERVER_CONSTANTS.port;
const HOST_NAME = SERVER_CONSTANTS.hostName;
const SERVER_NAME = SERVER_CONSTANTS.serverName;
const PROTOCOL = SERVER_CONSTANTS.protocol;
const ACTIVE_AUDIT = DDBB_CONSTANTS.AUDIT.activeAudit || true;

// Nombre del servidor
app.set('name', SERVER_NAME);

let instanceNumber = 0;

// Función de arranque del servidor
const startServer = async () => {
  let serverAddress = '';
  let portAddress = '';
  const address = server.address();
  if (server.address()) {
    serverAddress = address.address;
    portAddress = address.port;
  }
  if (serverAddress == '::') {
    serverAddress = HOST_NAME;
  }
  const webAddress = app.get('name');
  if (ACTIVE_AUDIT) {
    const auditStartStored = await auditStart(
      serverAddress,
      webAddress,
      portAddress
    );
    if (auditStartStored) {
      instanceNumber = auditStartStored.instanceNumber;
    }
    app.set('instanceNumber', instanceNumber);
  }
  console.log(
    `El servidor está arrando en la dirección: ${PROTOCOL}://${serverAddress}:${PORT}`
  );
};

// Configuración del CORS
const CORS_PROTOCOL = CORS_API_REST_CONSTANTS.protocol;
const CORS_HOST_NAME = CORS_API_REST_CONSTANTS.hostName;
const CORS_PORT = CORS_API_REST_CONSTANTS.port;

const cors = require('cors');
app.use(
  cors({
    origin: CORS_PROTOCOL + '://' + CORS_HOST_NAME + ':' + CORS_PORT,
    credentials: true,
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  })
);

// Arranque del servidor
const server = app.listen(PORT, startServer);

// Función de parada del servidor
const stopServer = async () => {
  if (instanceNumber) {
    await auditStop(instanceNumber);
  }
  console.log('El servidor se ha apagado correctamente');
  process.exit(0);
};

// Registra la función para ser ejecutada antes de apagar el servidor
server.on('close', stopServer);

// Maneja la señal SIGINT (Ctrl + C) para apagar el servidor de manera controlada
process.on('SIGINT', stopServer);

// Routing: Importación de ruta
const { API_REST_CONSTANTS } = require('./constants');

// Routing
// Ruta sesiones administrador
const administratorSessionRouter = require('./routes/administratorSession');

// Ruta sosesiones socios
const sessionRouter = require('./routes/session');

// Ruta usuarios
const userRouter = require('./routes/user');

// Ruta asociaciones
const associationRouter = require('./routes/association');

// Ruta socios
const partnerRouter = require('./routes/partner');

// Ruta de cuotas de socios
const membershipRouter = require('./routes/membershipFee');
const membershipFeeSituationRouter = require('./routes/membershipFeeSituation');

// Ruta junta directiva y directivos
const boardOfDirectorsRouter = require('./routes/boardOfDirectors');
const executiveRouter = require('./routes/executive');

// Ruta anuncios
const announcementRouter = require('./routes/announcement');

// Ruta documentos
const {
  associationDocumentRouter,
  partnerDocumentRouter,
  membershipFeeDocumentRouter,
  announcementDocumentRouter,
} = require('./routes/document');

// Rutas expuestas
app.use(
  API_REST_CONSTANTS.url_api + '/',
  administratorSessionRouter,
  sessionRouter,
  userRouter,
  associationRouter,
  partnerRouter,
  membershipRouter,
  membershipFeeSituationRouter,
  boardOfDirectorsRouter,
  executiveRouter,
  announcementRouter,
  associationDocumentRouter,
  partnerDocumentRouter,
  membershipFeeDocumentRouter,
  announcementDocumentRouter,
);

// Routing app
app.get('/', (req, res) => {
  res.end(
    'Bienvenidos al servidor backend del software ASSOCIATIONS que está corriendo...'
  );
});
