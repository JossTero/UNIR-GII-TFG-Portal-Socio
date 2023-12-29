import { createContext, useContext, useState } from 'react';
import {
  getPartnerRequestFromUser,
  getPartnerAnnouncementsRequestFromUser,
  getPartnerAnnouncementDocumentsRequestFromUser,
  getPartnerMembershipFeesRequestFromUser,
  getPartnerMembershipFeeSituationRequestFromUser,
  createPartnerMembershipFeeSituationRequestFromUser,
  createPartnerMembershipFeeDocumentRequestFromUser,
  putPartnerMembershipFeeDocumentRequestFromUser,
  getPartnerDocumentsRequestFromUser,
} from '../apis/partnersAPI';
import { useAuth } from './authContext';
import { MEMBERSHIPFEE_CONSTANTS } from '../config/constants';

const PartnersContext = createContext();

export const usePartner = () => {
  const context = useContext(PartnersContext);
  if (!context) {
    throw new Error(
      "La funcioanlidad de 'PartnersContext' debe usarse dentro de un 'PartnerProvider'"
    );
  }
  return context;
};

export const PartnerProvider = ({ children }) => {
  const { user } = useAuth();
  const [partner, setPartner] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [memberships, setMembershipFees] = useState([]);
  const [documents, setDocuments] = useState([]);

  const getPartner = async () => {
    try {
      const res = await getPartnerRequestFromUser(user);
      setPartner(res.partner);
      return res.partner;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getAnnouncements = async () => {
    try {
      const res = await getPartnerAnnouncementsRequestFromUser(user);
      setAnnouncements(res.announcements);
      return res.announcements;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getDocumentsAnnouncement = async (id) => {
    try {
      const res = await getPartnerAnnouncementDocumentsRequestFromUser(
        user,
        id
      );
      setDocuments(res.documents);
      return res.documents;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getMembershipFees = async () => {
    try {
      const res = await getPartnerMembershipFeesRequestFromUser(user);
      setMembershipFees(res.memberships);
      return res.memberships;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getMembershipFeeSituation = async (membershipId, situationId) => {
    try {
      const res = await getPartnerMembershipFeeSituationRequestFromUser(
        user,
        membershipId,
        situationId
      );
      return res.membershipSituation;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getDocuments = async () => {
    try {
      const res = await getPartnerDocumentsRequestFromUser(user);
      setDocuments(res.documents);
      return res.documents;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const addDocumentMembershipFee = async (membershipId, formData) => {
    try {
      formData.append('membershipId', membershipId);
      formData.append('module', MEMBERSHIPFEE_CONSTANTS.document_module);
      let data = await getData(formData);
      let res = await createPartnerMembershipFeeSituationRequestFromUser(
        user,
        membershipId,
        data
      );
      formData.append(
        'membershipFeeSituationId',
        res.membershipFeeSituationStored._id
      );
      data = await getData(formData);
      res = await createPartnerMembershipFeeDocumentRequestFromUser(
        user,
        membershipId,
        data
      );
      res = await putPartnerMembershipFeeDocumentRequestFromUser(
        user,
        res.documentStored._id,
        formData
      );
      return getDocuments();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getData = async (formData) => {
    const data = {};
    Array.from(formData.entries()).forEach(([key, value]) => {
      data[key] = value;
    });
    return data;
  };

  return (
    <PartnersContext.Provider
      value={{
        user,
        partner,
        getPartner,
        announcements,
        getAnnouncements,
        getDocumentsAnnouncement,
        memberships,
        getMembershipFees,
        getMembershipFeeSituation,
        addDocumentMembershipFee,
        documents,
        getDocuments,
      }}
    >
      {children}
    </PartnersContext.Provider>
  );
};
