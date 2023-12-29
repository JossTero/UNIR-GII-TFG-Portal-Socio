import { requestAPI, requestUserAPI } from '../helpers/requestAPI';
import { getPartnerRequest } from './partnersAPI';

export const getAssociationsSimple = async () => {
  return await requestAPI('GET', '/asociaciones-simple');;
};

export const getAssociationRequestFromUser = async (user) => {
  return await requestAPI('GET', '/asociaciones/' + user.associationCode);
};

export const getBoardOfDirectorsActiveAssociationRequestFromUser = async (user) => {
  return await requestUserAPI(user, 'GET', '/directiva-activa/');
};

export const getExecutivesAssociationRequestFromUser = async (user, id) => {
  return await requestUserAPI(user, 'GET', '/directiva/' + id + '/directivos/');
};

export const getPartnersAssociationRequestFromUser = async (user) => {
  return await requestUserAPI(user, 'GET', '/socios/');
};

export const getPartnerAssociationRequestFromUser = async (user, id) => {
  return await getPartnerRequest(user, id);;
};

export const getDocumentsAssociationRequestFromUser = async (user) => {
  return await requestUserAPI(user, 'GET', '/documentos/');
};