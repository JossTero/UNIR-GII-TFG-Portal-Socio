// CONSTANTES DE CONFIGURACIÓN BÁSICA DE LOS RECUROS API
export const API_REST_CONSTANTS = {
  api_version: 1,
  url_api: import.meta.env.API_URL || 'http://localhost:5000/api/1',
};

export const VISUAL_CONSTANTS = {
  time_errors: import.meta.env.TIME_ERRORS || 5000,
};

export const UTIL_CONSTANTS = {
  visible_length_identity_document: import.meta.env.VISIBLE_LENGTH_IDENTITY_DOCUMENT || 4,
};

export const CURRENCY_CONSTANTS = {
  locale: import.meta.env.LOCALE || 'es-ES',
  currency: import.meta.env.CURRENCY || 'EUR',
  minimumFractionDigits: import.meta.env.FRACTION_DIGITS || 2,
};

export const MEMBERSHIPFEE_CONSTANTS = {
  reason_validation_pending: 'PEVA',
  document_module: 'membershipfees',
};
