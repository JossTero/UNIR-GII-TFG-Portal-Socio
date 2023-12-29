const listOfIdentityDocuments = {
  dentityDocument: [
    {
      code: 'NIF',
      description: 'NIF persona física',
      order: '010',
      typeOfPerson: 'physical ',
      validationFunction: NIFvalidation,
    },
    {
      code: 'PAS',
      description: 'Pasaporte',
      order: '020',
      typeOfPerson: 'physical',
      validationFunction: null,
    },
    {
      code: 'CIF',
      description: 'CIF persona jurídica',
      order: '030',
      typeOfPerson: 'legal',
      validationFunction: CIFvalidation,
    },
  ],
};
