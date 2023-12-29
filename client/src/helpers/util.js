import { UTIL_CONSTANTS, CURRENCY_CONSTANTS } from '../config/constants';

export const getFullName = (person) => {
  let fullName = '';
  if (person && person.name) {
    if (fullName) {
      fullName += ' ';
    }
    fullName += person.name;
  }
  if (person && person.surname) {
    if (fullName) {
      fullName += ' ';
    }
    fullName += person.surname;
  }
  if (person && person.secondSurname) {
    if (fullName) {
      fullName += ' ';
    }
    fullName += person.secondSurname;
  }
  return fullName;
};

export const getCompleteAddress = (address) => {
  let completeAddress = '';
  if (address && address.addressTypeOfRoad) {
    if (completeAddress) {
      completeAddress += ' ';
    }
    completeAddress += address.addressTypeOfRoad;
  }
  if (address && address.addressStreet) {
    if (completeAddress) {
      completeAddress += ' ';
    }
    completeAddress += address.addressStreet;
  }
  if (address && address.addressNumber) {
    if (completeAddress) {
      completeAddress += ', ';
    }
    completeAddress += address.addressNumber;
  }
  if (address && address.addressPortal) {
    if (completeAddress) {
      completeAddress += ', ';
    }
    completeAddress += 'portal ' + address.addressPortal;
  }
  if (address && address.addressBlock) {
    if (completeAddress) {
      completeAddress += ', ';
    }
    completeAddress += 'bloque ' + address.addressBlock;
  }
  if (address && address.addressStaircase) {
    if (completeAddress) {
      completeAddress += ', ';
    }
    completeAddress += 'escalera ' + address.addressStaircase;
  }
  if (address && address.addressFloor) {
    if (completeAddress) {
      completeAddress += ', ';
    }
    completeAddress += 'piso ' + address.addressFloor;
  }
  if (address && address.addressDoor) {
    if (completeAddress) {
      completeAddress += ', ';
    }
    completeAddress += 'puerta ' + address.addressDoor;
  }
  if (address && address.addressPostalCode) {
    if (completeAddress) {
      completeAddress += ', ';
    }
    completeAddress += address.addressPostalCode;
  }
  if (address && address.addressPopulation) {
    if (!address.addressPostalCode) {
      completeAddress += ',';
    }
    if (completeAddress) {
      completeAddress += ' ';
    }
    completeAddress += address.addressPopulation;
  }
  if (address && address.addressProvince) {
    if (completeAddress) {
      completeAddress += ', ';
    }
    completeAddress += address.addressProvince;
  }
  if (address && address.addressComplement) {
    if (completeAddress) {
      completeAddress += ', ';
    }
    completeAddress += 'Complemento ' + address.addressComplement;
  }
  return completeAddress;
};

export const getFormattedDate = (stringDate) => {
  let literalDate = '';
  if (stringDate) {
    const date = new Date(stringDate);
    let day = date.getDate();
    let month = date.getMonth() + 1; // ¡Recuerda que en JavaScript los meses van de 0 a 11!
    let year = date.getFullYear();

    // Agregar un '0' delante si el día o el mes es menor que 10 para mantener el formato dd/MM/yyyy
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    literalDate = `${day}/${month}/${year}`;
  }
  return literalDate;
};

export const getHiddenIdentityDocument = (documentNumber) => {
  let hiddenDocumentNumber = '';
  const length = UTIL_CONSTANTS.visible_length_identity_document;
  if (typeof documentNumber === 'string' && documentNumber.length > length) {
    hiddenDocumentNumber = documentNumber
      .slice(-length)
      .padStart(documentNumber.length, '*');
  }
  return hiddenDocumentNumber;
};

export const getImageFromBuffer = (image) => {
  let urlImage = '';
  if (image) {
    urlImage = `data:${image?.mimetype};base64,${image?.buffer}`;
  }
  return urlImage;
};

export const currencyFormatter = (value) => {
  const formatter = new Intl.NumberFormat(CURRENCY_CONSTANTS.locale, {
    style: 'currency',
    minimumFractionDigits: CURRENCY_CONSTANTS.minimumFractionDigits,
    currency: CURRENCY_CONSTANTS.currency,
  });
  return formatter.format(value);
};

export const getUrlDownloadDocument = (document) => {
  let urlDownloadDocument = '';
  if (document) {
    const byteArray = new Uint8Array(document?.buffer?.data);
    const blob = new Blob([byteArray]);
    urlDownloadDocument = window.URL.createObjectURL(blob);
  }
  return urlDownloadDocument;
};

export const getLiteralSizeDocument = (document) => {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  let size = document?.size;
  let unitsIndex = 0;

  while (size > 1024 && unitsIndex < units.length - 1) {
    size /= 1024;
    unitsIndex++;
  }
  return `${size.toFixed(2)} ${units[unitsIndex]}`;
};
