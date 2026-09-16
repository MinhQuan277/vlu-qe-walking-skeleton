const { checkLogin } = require('./login');

describe('checkLogin', () => {
  test('đúng user và pass thì trả về true', () => {
    expect(checkLogin('admin', '123')).toBe(true);
  });

  test('sai password thì trả về false', () => {
    expect(checkLogin('admin', '456')).toBe(false);
  });

  test('sai username thì trả về false', () => {
    expect(checkLogin('user', '123')).toBe(false);
  });

  test('bỏ trống thì trả về false', () => {
    expect(checkLogin('', '')).toBe(false);
  });

  test('phân biệt hoa thường', () => {
    expect(checkLogin('Admin', '123')).toBe(false);
  });
});
