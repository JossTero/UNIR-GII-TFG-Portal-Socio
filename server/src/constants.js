// CONSTANTES DE CONFIGURACIÓN BÁSICA DEL SERVIDOR
const SERVER_CONSTANTS = {
  port: process.env.PORT || 5000,
  serverName: process.env.SERVER_NAME || 'Associations',
  protocol: process.env.PROTOCOL || 'http',
  hostName: process.env.HOST_NAME || 'localhost',
};

// CONSTANTES DE CONFIGURACIÓN BÁSICA DE LOS RECUROS API
const API_REST_CONSTANTS = {
  api_version: 1,
  url_api: `/api/${1}`,
};

// CONSTANTES DE CONFIGURACIÓN BÁSICA DE LA BASE DE DATOS
const DDBB_CONSTANTS = {
  url: process.env.DDBB_URL || '127.0.0.1',
  port: process.env.DDBB_PORT || 27017,
  databaseName: 'associations',
  associationsCollection: 'associations',
  usersCollection: 'users',
  partnersCollection: 'partners',
  boardOfDirectorsCollection: 'boardofdirectors',
  executivesCollection: 'executives',
  announcementsCollection: 'announcements',
  membershipFeesCollection: 'membershipfees',
  membershipFeeSituationsCollection: 'membershipfeesituations',
  documentsCollection: 'documents',
  imageCollection: 'images',
  sequencesCollection: 'sequences',
  AUDIT: {
    activeAudit: process.env.ACTIVE_AUDIT,
    auditStartCollection: 'auditStart',
    auditLoginCollection: 'auditLogin',
    auditRequestCollection: 'auditRequest',
  },
};

// CONSTANTES DE CONFIGURACIÓN DE LOS DATOS DE LOS USUARIOS
const randomString = require('./helpers/randomString');
const USER_CONSTANTS = {
  moduleHash: 10,
  passwordKey: "randomString(50)", // TODO: Al acabar las pruebas, descomentar esta funcionalidad
  expiresIn: '30m',
  passworkMin: 6,
  statusActive: 'ACTI',
  statusInactive: 'INAC',
  statusBlocked: 'BLOC',
  typeAdmin: 'ADMIN',
  typePartner: 'PARTNER',
};

const CORS_API_REST_CONSTANTS = {
  protocol: process.env.CORS_PROTOCOL || 'http',
  hostName: process.env.CORS_HOST_NAME || 'localhost',
  port: process.env.CORS_PORT || 5173,
};

module.exports = {
  SERVER_CONSTANTS,
  API_REST_CONSTANTS,
  DDBB_CONSTANTS,
  USER_CONSTANTS,
  CORS_API_REST_CONSTANTS,
};
