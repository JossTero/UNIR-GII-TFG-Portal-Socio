import { requestLoginAPI, requestUserAPI, requestAPI } from '../helpers/requestAPI';

export const loginRequest = async (data) => {
  return await requestLoginAPI(data);
};

export const registerRequest = async (user) => {
  return await requestUserAPI(user, 'POST', '/usuarios');
};

export const logoutRequest = async (user) => {
  return await requestUserAPI(user, 'DELETE', '/logout');
};

export const verifyTokenRequest = async () => {
  return await requestAPI('GET', '/admin/verify');
};
