import React, { useState } from 'react';
import { useAssociation } from '../../context/associationContext';
import {
  getFullName,
  getImageFromBuffer,
  getCompleteAddress,
  getFormattedDate,
  getHiddenIdentityDocument,
  getUrlDownloadDocument,
  getLiteralSizeDocument,
} from '../../helpers/util';
import { Link } from 'react-router-dom';
import fileIcon from '../../assets/img/file-icon.svg';
import downloadIcon from '../../assets/img/download-icon.svg';

function Sidebar3() {
  const {
    association,
    getAssociation,
    getPartnersAssociation,
    documents,
    getDocumentsAssociation,
  } = useAssociation();

  const [numberPartners, setNumberPartners] = useState(0);

  useState(() => {
    getAssociation();
  }, []);

  useState(() => {
    getDocumentsAssociation();
  }, []);

  useState(async () => {
    const partners = await getPartnersAssociation();
    setNumberPartners(partners.length);
  }, []);

  return (
    <div className="col-lg-3 col-12">
      {/* <!-- Featured User --> */}
      <div className="crancy-featured-user mg-top-70">
        {/* <!-- User Head --> */}
        <div className="crancy-featured-user">
          <img
            src={getImageFromBuffer(association?.logo)}
            alt={
              'Imagen del ejecutivo ' + getFullName(association?.businessName)
            }
          />
        </div>
        <div className="crancy-featured-user__head">
          <h4 className="crancy-featured-user__title">
            {association?.businessName}
          </h4>
          <div className="crancy-upcard__location">
            <svg
              width="14"
              height="19"
              viewBox="0 0 14 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.004 0C10.5285 0 13.537 2.68429 13.9466 6.15748C14.1748 8.09221 13.6486 9.85722 12.8068 11.5479C11.4884 14.2009 9.60001 16.4241 7.46388 18.4448C7.16579 18.7267 6.87135 18.7442 6.5893 18.4732C3.98891 15.9878 1.69389 13.2787 0.497187 9.81133C-0.304503 7.48688 -0.18206 5.23091 1.19758 3.12864C1.83067 2.1675 2.6926 1.3785 3.70603 0.832444C4.71946 0.286383 5.85268 0.000345594 7.004 0ZM6.98797 10.8719C7.75518 10.8764 8.50648 10.6533 9.14684 10.231C9.78721 9.80861 10.2879 9.20592 10.5855 8.49913C10.8831 7.79235 10.9643 7.01321 10.8189 6.26028C10.6734 5.50735 10.3078 4.81445 9.76834 4.26922C9.22884 3.72399 8.53969 3.35092 7.78803 3.1972C7.03638 3.04348 6.25599 3.11601 5.54559 3.40563C4.83519 3.69525 4.22668 4.18894 3.79703 4.82425C3.36738 5.45957 3.13588 6.20797 3.13183 6.97479C3.12586 7.48431 3.22108 7.98994 3.41199 8.46242C3.6029 8.93489 3.8857 9.36481 4.24401 9.72728C4.60233 10.0897 5.02904 10.3776 5.49942 10.574C5.9698 10.7705 6.47451 10.8718 6.98432 10.8719H6.98797Z" />
            </svg>
            <p className="crancy-upcard__text crancy-pcolor">
              {getCompleteAddress(association)}
            </p>
          </div>
        </div>
        {/* <!-- Total User --> */}
        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists mg-top-10">
          <Link to="#">
            <span>{numberPartners}</span>
          </Link>
          <b className="crancy-featured-user__more">socios en total</b>
        </div>
        {/* <!-- User Info List --> */}
        <ul className="crancy-featured-user__list crancy-featured-user__border">
          <li>
            <b>{association?.documentType}</b>
            <span>
              {getHiddenIdentityDocument(association?.documentNumber)}
            </span>
          </li>
          <li>
            <b>Fecha de constitución</b>{' '}
            <span>{getFormattedDate(association?.constitutionDate)}</span>
          </li>
          <li>
            <b>Teléfono</b> <span>{association?.phone}</span>
          </li>
        </ul>
        {/* <!-- User File List --> */}
        {documents.length > 0 && (
          <div className="crancy-featured-user__files crancy-featured-user__border">
            <h4 className="crancy-featured-user__title--small">Ficheros</h4>
            {documents?.map((document) => (
              <a
                href={getUrlDownloadDocument(document)}
                download={document?.fileName + document?.extension}
                key={document?._id}
              >
                <div className="crancy-featured-user__fcontent">
                  <span className="crancy-featured-user__ficon">
                    <img src={fileIcon} />
                  </span>
                  <h4 className="crancy-featured-user__fname">
                    {document?.fileName}
                    {document?.extension}
                    <span className="crancy-featured-user__fsize">
                      {getLiteralSizeDocument(document)}
                    </span>
                  </h4>
                </div>
                <div className="crancy-featured-user__fdownload">
                  <img src={downloadIcon} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      {/* <!-- End Featured User --> */}
    </div>
  );
}

export default Sidebar3;
