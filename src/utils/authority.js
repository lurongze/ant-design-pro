// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('antd-pro-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority || ['admin'];
}
const authorityToken = 'authority-token';
export function getAuthorityToken() {
  return localStorage.getItem(authorityToken);
}

export function setAuthority(authority, token = '') {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  localStorage.setItem(authorityToken, token);
  return localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
}
