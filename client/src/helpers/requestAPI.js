import { API_REST_CONSTANTS } from '../config/constants';
import {
  getRouteUser,
  getRouteAssociation,
  getAssociationCode,
} from '../helpers/navigateRoute';

const getRequestObjectLogin = (body) => {
  return getRequestObject('POST', body);
};

const getRequestObject = (method, body) => {
  let object = {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (method !== 'GET' && method !== 'HTTP') {
    object.body = JSON.stringify(body);
  }
  return object;
};

const getRequestFormData = (method, formData) => {
  const object = {
    method: method,
    credentials: 'include',
    body: formData,
  };
  return object;
};

const request = async (url, objectRequest) => {
  try {
    const response = await fetch(url, objectRequest);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const requestLoginAPI = async (body) => {
  const associationCode = getAssociationCode();
  const path = getRouteAssociation(associationCode, '/login');
  const url = API_REST_CONSTANTS.url_api + path;
  const objectRequest = getRequestObjectLogin(body);
  return await request(url, objectRequest);
};

export const requestAPI = async (method, specificUrl, body) => {
  const url = '' + API_REST_CONSTANTS.url_api + specificUrl;
  const objectRequest = getRequestObject(method, body);
  return await request(url, objectRequest);
};

export const requestUserAPI = async (user, method, specificUrl, body) => {
  const path = getRouteUser(user, specificUrl);
  const url = '' + API_REST_CONSTANTS.url_api + path;
  const objectRequest = getRequestObject(method, body);
  return await request(url, objectRequest);
};

export const requestFormDataUserAPI = async (
  user,
  method,
  specificUrl,
  formData
) => {
  const path = getRouteUser(user, specificUrl);
  const url = '' + API_REST_CONSTANTS.url_api + path;
  const objectRequest = getRequestFormData(method, formData);
  return await request(url, objectRequest);
};
