import React, { useState } from 'react';
import { useAssociation } from '../../context/associationContext';
import {
  getFormattedDate,
} from '../../helpers/util';
import UserCard from "../cards/UserCard";

function UsersCom() {
  const { boardOfDirectors, getBoardOfDirectorsActive, executives, getExecutivesAssociation } = useAssociation();

  useState(() => {
    getBoardOfDirectorsActive();
  }, [getBoardOfDirectorsActive]);

  useState(() => {
    getExecutivesAssociation();
  }, [getExecutivesAssociation]);

  return (
    <div className="row">
      <h3 className="crancy-taskarea__title m-0">Junta directiva - Constituida desde el {getFormattedDate(boardOfDirectors?.constitutionDate)}</h3>
      {executives?.map((executive) => (
        <UserCard executive={executive} key={executive?._id} />
      ))}
    </div>
  );
}

export default UsersCom;
