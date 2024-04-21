const getStructureUserResponse = (user) => {
  const structureUser = {
    _id: user._id,
    username: user.username,
    email: user.email,
    name: user.name,
    surname: user.surname,
    secondSurname: user.secondSurname,
    registrationDate: user.registrationDate,
    userType: user.userType,
    userStatus: user.userStatus,
    associationCode: user.associationCode,
    partnerId: user.partnerId,
  };
  return structureUser;
};

module.exports = { getStructureUserResponse };
