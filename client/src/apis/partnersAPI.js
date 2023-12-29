import { requestUserAPI, requestFormDataUserAPI } from '../helpers/requestAPI';

export const getPartnerRequestFromUser = async (user) => {
  return await getPartnerRequest(user, user.partnerId);
};

export const getPartnerRequest = async (user, id) => {
  return await requestUserAPI(user, 'GET', '/socios/' + id);
};

export const getPartnerAnnouncementsRequestFromUser = async (user) => {
  return await requestUserAPI(user, 'GET', '/anuncios/');
};

export const getPartnerAnnouncementDocumentsRequestFromUser = async (user, id) => {
  return await requestUserAPI(user, 'GET', '/anuncios/' + id + '/documentos/');
};

export const getPartnerMembershipFeesRequestFromUser = async (user) => {
  return await requestUserAPI(user, 'GET', '/socios/' + user.partnerId + '/cuotas/');
};

export const getPartnerMembershipFeeSituationRequestFromUser = async (user, membershipId, situationId) => {
  return await requestUserAPI(user, 'GET', '/socios/' + user.partnerId + '/cuotas/' + membershipId + '/situaciones/' + situationId);
};

export const createPartnerMembershipFeeSituationRequestFromUser = async (user, membershipId, data) => {
  return await requestUserAPI(user, 'POST', '/socios/' + user.partnerId + '/cuotas/' + membershipId + '/situaciones/', data);
};

export const createPartnerMembershipFeeDocumentRequestFromUser = async (user, membershipId, data) => {
  return await requestUserAPI(user, 'POST', '/socios/' + user.partnerId + '/cuotas/' + membershipId + '/documentos/', data);
};

export const putPartnerMembershipFeeDocumentRequestFromUser = async (user, documentId, formData) => {
  return await requestFormDataUserAPI(user, 'PUT', '/documentos/' + documentId + '/documento/', formData);
};

export const getPartnerDocumentsRequestFromUser = async (user) => {
  return await requestUserAPI(user, 'GET', '/socios/' + user.partnerId + '/documentos/');
};
