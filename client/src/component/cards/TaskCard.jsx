import React, { useState, useEffect } from 'react';
import { usePartner } from '../../context/partnerContext';
import {
  getFormattedDate,
  getImageFromBuffer,
  getLiteralSizeDocument,
  getUrlDownloadDocument,
} from '../../helpers/util';
import fileIcon from '../../assets/img/file-icon.svg';
import downloadIcon from '../../assets/img/download-icon.svg';

function TaskCard({ announcement }) {
  const { getDocumentsAnnouncement } = usePartner();
  const [documentsAnnouncement, setDocumentsAnnouncement] = useState([]);

  useState(async () => {
    setDocumentsAnnouncement(await getDocumentsAnnouncement(announcement?._id));
  }, [documentsAnnouncement]);

  return (
    <div className="col-xxl-6 col-lg-12 col-md-12 col-12">
      {/* <!-- Single Task --> */}
      <div
        className={`crancy-tasksingle ${
          announcement?.importanceLevel === 'MEDI'
            ? 'crancy-color2__opacity--bg'
            : announcement?.importanceLevel === 'BAJA'
            ? 'crancy-color3__opacity--bg'
            : announcement?.importanceLevel === 'ALTA'
            ? 'crancy-color4__opacity--bg'
            : 'crancy-color1__opacity--bg'
        } mg-top-25`}
      >
        <h4 className="crancy-tasksingle__title">
          {announcement?.type === 'NOTI'
            ? 'Noticia'
            : announcement?.type === 'ASOR'
            ? 'Asamblea ordiaria'
            : announcement?.type === 'ASEX'
            ? 'Asamblea extraordinaria'
            : announcement?.type === 'EVEN'
            ? 'Evento'
            : ''}
          : {announcement?.title}
        </h4>
        <p className="crancy-paymentm__text crancy-paymentm__text--notify">
          {announcement?.text}
        </p>
        {announcement?.finishDate && (
          <p className="crancy-tasksingle__assign">
            Fecha de vencimiento :
            <span
              className={
                announcement?.importanceLevel === 'ALTA'
                  ? 'crancy-gcolor'
                  : announcement?.importanceLevel === 'MEDI'
                  ? 'crancy-color3'
                  : announcement?.importanceLevel === 'BAJA'
                  ? 'crancy-rcolor'
                  : 'crancy-pcolor'
              }
            >
              {' '}
              {getFormattedDate(announcement?.finishDate)}
            </span>
          </p>
        )}
        <br />
        <div
          className={`crancy-single-user__head crancy-tasksingle__label ${
            announcement?.importanceLevel === 'BAJA'
              ? 'crancy-progress__done'
              : announcement?.importanceLevel === 'MEDI'
              ? 'crancy-progress__hold'
              : announcement?.importanceLevel === 'ALTA'
              ? 'crancy-progress__cancel'
              : 'crancy-progress__in'
          }`}
        >
          Importancia:{' '}
          {announcement?.importanceLevel === 'ALTA'
            ? 'Alta'
            : announcement?.importanceLevel === 'MEDI'
            ? 'Media'
            : 'Baja'}
        </div>
        <p className="crancy-tasksingle__text">
          <b>Autor:</b> {announcement?.author}
        </p>
        {documentsAnnouncement.length > 0 && (
          <div className="crancy-featured-user__files crancy-featured-user__border">
            <h4 className="crancy-featured-user__title--small">Ficheros</h4>
            {documentsAnnouncement?.map((documentAnnouncement) => (
              <a
                href={getUrlDownloadDocument(documentAnnouncement)}
                download={documentAnnouncement?.fileName + documentAnnouncement?.extension}
                key={documentAnnouncement?._id}
              >
                <div className="crancy-featured-user__fcontent">
                  <span className="crancy-featured-user__ficon">
                    <img src={fileIcon} />
                  </span>
                  <h4 className="crancy-featured-user__fname">
                    {documentAnnouncement?.fileName}
                    {documentAnnouncement?.extension}
                    <span className="crancy-featured-user__fsize">
                      {getLiteralSizeDocument(documentAnnouncement)}
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
        {announcement?.image && (
          <div className="crancy-tasksingle__group">
            <img
              className="crancy-featured-user"
              src={getImageFromBuffer(announcement?.image)}
              alt="author-img"
            />
          </div>
        )}
      </div>
      {/* <!-- End Single Task --> */}
    </div>
  );
}

export default TaskCard;
