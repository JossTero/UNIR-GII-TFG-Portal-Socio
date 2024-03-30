import { createContext, useContext, useState } from 'react';
import {
  getAssociationRequestFromUser,
  getBoardOfDirectorsActiveAssociationRequestFromUser,
  getExecutivesAssociationRequestFromUser,
  getPartnersAssociationRequestFromUser,
  getPartnerAssociationRequestFromUser,
  getDocumentsAssociationRequestFromUser,
} from '../apis/associationsAPI';
import { useAuth } from './authContext';

const AssociationContext = createContext();

export const useAssociation = () => {
  const context = useContext(AssociationContext);
  if (!context) {
    throw new Error(
      "La funcioanlidad de 'AssociationContext' debe usarse dentro de un 'AssociationProvider'"
    );
  }
  return context;
};

export const AssociationProvider = ({ children }) => {
  const { user } = useAuth();
  const [association, setAssociation] = useState(null);
  const [boardOfDirectors, setBoardOfDirectors] = useState(null);
  const [executives, setExecutives] = useState([]);
  const [documents, setDocuments] = useState([]);

  const getAssociation = async () => {
    try {
      const res = await getAssociationRequestFromUser(user);
      setAssociation(res.association);
      return res.association;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getBoardOfDirectorsActive = async () => {
    try {
      let associationAux = association;
      if (!associationAux) {
        associationAux = await getAssociation();
      }
      const res = await getBoardOfDirectorsActiveAssociationRequestFromUser(
        user
      );
      setBoardOfDirectors(res.boardOfDirectors);
      return res.boardOfDirectors;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getExecutivesAssociation = async () => {
    try {
      let boardOfDirectorsAux = boardOfDirectors;
      if (!boardOfDirectorsAux) {
        boardOfDirectorsAux = await getBoardOfDirectorsActive();
      }
      const res = await getExecutivesAssociationRequestFromUser(
        user,
        boardOfDirectorsAux?._id
      );
      setExecutives(res.executives);
      return res.executives;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getPartnersAssociation = async () => {
    try {
      const res = await getPartnersAssociationRequestFromUser(user);
      return res.partners;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getPartnerAssociation = async (id) => {
    try {
      const res = await getPartnerAssociationRequestFromUser(user, id);
      return res.partner;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getDocumentsAssociation = async () => {
    try {
      const res = await getDocumentsAssociationRequestFromUser(user);
      setDocuments(res.documents);
      return res.documents;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <AssociationContext.Provider
      value={{
        user,
        association,
        getAssociation,
        boardOfDirectors,
        getBoardOfDirectorsActive,
        executives,
        getExecutivesAssociation,
        getPartnersAssociation,
        getPartnerAssociation,
        documents,
        getDocumentsAssociation,
      }}
    >
      {children}
    </AssociationContext.Provider>
  );
};
