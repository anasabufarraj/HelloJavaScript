// const add = require('./function');

function add() {
  return 2 + 3;
}

test('check 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toEqual(4);
});

test('check 2 + 3 to NOT to be greater than 9', () => {
  expect(add(2, 3)).not.toEqual(9);
});

test('test', () => {
  const value = 42;
  expect(value).not.toBeUndefined();
});

// Test exceptions
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);
  /* You can also use the exact error message or a regexp*/
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});
