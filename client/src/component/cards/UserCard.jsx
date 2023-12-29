import React, { useState } from 'react';
import { useAssociation } from '../../context/associationContext';
import {
  getFullName,
  getFormattedDate,
  getImageFromBuffer,
} from '../../helpers/util';

function UserCard({ executive }) {
  const { getPartnerAssociation } = useAssociation();
  const [partner, setPartner] = useState(null);

  useState(async () => {
    const partnerRequest = await getPartnerAssociation(executive?.partnerId);
    setPartner(partnerRequest);
  }, [executive, getPartnerAssociation]);

  return (
    <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
      <div className="crancy-single-user mg-top-30">
        <div className="crancy-single-user__head">
          <img
            src={getImageFromBuffer(partner?.image)}
            alt={'Imagen del ejecutivo ' + getFullName(partner)}
            style={{ width: '170px', height: '200px' }}
          />
          <h4 className="crancy-single-user__title">
            {getFullName(partner)}
            <span>{getFormattedDate(executive?.positionDate)}</span>
          </h4>
          <p className="crancy-single-user__label">
            {executive?.position === 'PRES'
              ? 'Presidente'
              : executive?.position === 'SECR'
              ? 'Secretario'
              : executive?.position === 'TESO'
              ? 'Tesorero'
              : executive?.position === 'VOCA'
              ? 'Vocal'
              : ''}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
