export const getRouteUser = (user, route) => {
  let code = '';
  if (user && user.associationCode) {
    code = user.associationCode;
  }
  if (!code) {
    code = getAssociationCode();
  }
  if (!code) {
    code = '';
  }
  return getRouteAssociation(code, route);
};

export const getRouteAssociation = (code, route) => {
  let literalRoute = '';
  if (code) {
    literalRoute = '/' + code + route;
  } else {
    literalRoute = route;
  }
  return literalRoute;
};

export const getAssociationCode = () => {
  const pathname = window.location.pathname;
  const partsPath = pathname.split('/');
  let size = partsPath.length;
  if (partsPath.length >= 3) {
    size -= 1;
  }
  return partsPath[partsPath.length - size];
};
