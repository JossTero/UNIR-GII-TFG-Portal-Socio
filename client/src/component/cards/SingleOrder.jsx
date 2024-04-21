import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFormattedDate, currencyFormatter } from '../../helpers/util';
import { usePartner } from '../../context/partnerContext';
import AddNewDocument from '../to-dolist/AddNewDocument';
import { MEMBERSHIPFEE_CONSTANTS } from '../../config/constants';

function SingleOrder({ membership, setRefreshMemberships }) {
  const location = useLocation();
  const [addProofOfPayment, setAddProofOfPayment] = useState(false);
  const { getMembershipFeeSituation, addDocumentMembershipFee } = usePartner();
  const [situation, setSituation] = useState(null);
  const [sendDocument, setSendDocument] = useState(false);

  const refreshMembershipFeeSituation = async () => {
    const situationRequest = await getMembershipFeeSituation(
      membership?._id,
      membership?.membershipFeeSituationId
    );
    setSituation(situationRequest);
  };

  useEffect(() => {
    refreshMembershipFeeSituation();
  }, []);

  useEffect(() => {
    refreshMembershipFeeSituation();
  }, [membership]);

  useEffect(() => {
    if (sendDocument) {
      setRefreshMemberships(true);
      setSendDocument(false);
    }
  }, [sendDocument]);

  const sendDocumentMembershipFee = async (formData) => {
    formData.append('statusSituation', situation?.statusSituation);
    formData.append(
      'reason',
      MEMBERSHIPFEE_CONSTANTS.reason_validation_pending
    );
    formData.append('paymentMethod', situation?.paymentMethod);
    await addDocumentMembershipFee(membership?._id, formData);
    setSendDocument(true);
    return closeModalDocumentMembershipFee(false);
  };

  const navigate = useNavigate();
  const closeModalDocumentMembershipFee = (isActive) => {
    setAddProofOfPayment(isActive);
    if (!isActive) {
      setSituation(null);
      navigate(location.pathname);
    }
  };

  return (
    <>
      <tr>
        <td className="crancy-table__column-1 crancy-table__data-1">
          <div className="crancy-table__product--id">
            <h3>{membership?.membershipNumber}</h3>
          </div>
        </td>
        <td className="crancy-table__column-2 crancy-table__data-2">
          <div className="crancy-table__product">
            <div className="crancy-table__product-content">
              <h4 className="crancy-table__product-title">
                {membership?.typeMembership === 'ORDI'
                  ? 'Ordinaria'
                  : situation?.typeMembership === 'EXTR'
                  ? 'Extraordinaria'
                  : ''}
              </h4>
            </div>
          </div>
        </td>
        <td className="crancy-table__column-3 crancy-table__data-3">
          <div className="crancy-table__product">
            <div className="crancy-table__product-content">
              <h4 className="crancy-table__product-title">
                {membership?.period === 'ANUA'
                  ? 'Anual'
                  : situation?.period === 'SEME'
                  ? 'Semestral'
                  : situation?.period === 'TRIM'
                  ? 'Trimestral'
                  : situation?.period === 'MENS'
                  ? 'Mensual'
                  : situation?.period === 'BIME'
                  ? 'Bimensual'
                  : ''}
              </h4>
            </div>
          </div>
        </td>
        <td className="crancy-table__column-4 crancy-table__data-4">
          <p className="crancy-table__text crancy-table__time">
            {getFormattedDate(membership?.effectDate)}
          </p>
        </td>
        <td className="crancy-table__column-5 crancy-table__data-5">
          <h5 className="crancy-table__inner--title">
            {getFormattedDate(membership?.dueDate)}
          </h5>
        </td>
        <td className="crancy-table__column-6 crancy-table__data-6">
          <div className="crancy-table__amount crancy-table__text-two">
            <span className="crancy-table__text">
              {currencyFormatter(membership?.membership)}
            </span>
          </div>
        </td>
        <td className="crancy-table__column-7 crancy-table__data-7">
          <div className="crancy-table__product">
            <div className="crancy-table__product-content">
              <h4 className="crancy-table__product-title">
                {situation?.paymentMethod === 'EFEC'
                  ? 'Efectivo'
                  : situation?.paymentMethod === 'BANC'
                  ? 'Bancario'
                  : ''}
              </h4>
            </div>
          </div>
        </td>
        <td className="crancy-table__column-8 crancy-table__data-8">
          <div
            className={`crancy-table__status ${
              situation?.reason === 'PECO' || situation?.reason === 'PEVA'
                ? 'crancy-table__status--pending'
                : situation?.reason === 'ANUL'
                ? 'crancy-table__status--cancel'
                : ''
            }`}
          >
            {situation?.reason === 'PECO'
              ? 'Pendiente de cobro'
              : situation?.reason === 'PEVA'
              ? 'Pendiente de validación'
              : situation?.reason === 'COBR'
              ? 'Cobrado'
              : situation?.reason === 'ANUL'
              ? 'Anulado'
              : ''}
          </div>
        </td>
        <td className="crancy-table__column-9 crancy-table__data-9">
          <AddNewDocument
            id={membership?._id}
            onSubmitDocument={sendDocumentMembershipFee}
            show={addProofOfPayment}
            handleShow={closeModalDocumentMembershipFee}
            key={membership?._id}
            title={'Anexar justificante de pago'}
          />
          {situation?.reason === 'PECO' ? (
            <div
              className="crancy-todolist__button"
              onClick={() => closeModalDocumentMembershipFee(true)}
            >
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target={'#task_modal' + membership?._id}
                className="crancy-btn crancy-sbcolor"
                title="Anexar justificante de pago"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.09063 9.90925C7.91001 9.90925 7.77156 9.90925 7.63381 9.90925C5.46709 9.90925 3.30036 9.90995 1.13292 9.90784C0.993067 9.90784 0.849695 9.90854 0.714055 9.87903C0.284645 9.78556 -0.00209685 9.42435 1.15494e-05 8.99849C0.00211995 8.57334 0.292376 8.21424 0.722489 8.12428C0.858129 8.09618 1.0015 8.09828 1.14136 8.09828C3.30809 8.09688 5.47482 8.09758 7.64225 8.09758C7.78 8.09758 7.91775 8.09758 8.09063 8.09758C8.09063 7.924 8.09063 7.78697 8.09063 7.64993C8.09063 5.4363 8.08712 3.22267 8.09274 1.00903C8.09485 0.247964 8.77235 -0.218656 9.39784 0.1032C9.78719 0.303481 9.90596 0.650635 9.90456 1.07017C9.89964 3.26061 9.90245 5.45106 9.90245 7.6408C9.90245 7.77924 9.90245 7.91698 9.90245 8.09828C10.069 8.09828 10.2054 8.09828 10.341 8.09828C12.5548 8.09828 14.7686 8.09547 16.9824 8.10039C17.7478 8.1018 18.2159 8.76729 17.9003 9.39695C17.7042 9.78908 17.3591 9.91276 16.9396 9.91206C14.749 9.90784 12.559 9.90995 10.3684 9.90995C10.23 9.90995 10.0908 9.90995 9.90245 9.90995C9.90245 10.0695 9.90245 10.2051 9.90245 10.34C9.90245 12.4953 9.90245 14.6506 9.90245 16.8052C9.90245 16.9107 9.90737 17.0168 9.89894 17.1215C9.85958 17.6387 9.47444 18.0069 8.98389 17.9999C8.5081 17.9929 8.13491 17.6296 8.09485 17.1306C8.08642 17.0259 8.09134 16.9198 8.09134 16.8144C8.09134 14.671 8.09134 12.5277 8.09134 10.3843C8.09063 10.2438 8.09063 10.1046 8.09063 9.90925Z"
                    fill="white"
                  />
                </svg>
                Anexar
              </a>
            </div>
          ) : (
            <p>Sin acciones</p>
          )}
        </td>
      </tr>
    </>
  );
}

export default SingleOrder;
