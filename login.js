function checkLogin(username, password) {
     return username === 'admin' && password === '1234';
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { checkLogin };
}
