const values = require('./joinStrings-solution')

describe('step 2', () => {
  test('firstName is Sebastian', () => {
    expect(values.firstName).toEqual('Sebastian');
  });
  test('lastName is Torres', () => {
    expect(values.lastName).toEqual('Torres');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2003', () => {
    expect(values.birthYear).toEqual(2003);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Sebastian Torres and I am 22 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Sebastian Torres', () => {
    expect(values.fullName).toEqual('Sebastian Torres');
  });
  test('age is 22', () => {
    expect(values.age).toEqual(22);
  });
});
