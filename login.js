function checkLogin(username, password) {
     return username === 'admin' && password === '123';
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { checkLogin };
}
