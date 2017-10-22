import {typeofObject} from '../src/assets/js/util'

test('typeof object', () => {
  expect(typeofObject(3)).toBe('number');
  expect(typeofObject({a: 'a', b: 'b'})).toBe('object');
  expect(typeofObject(true)).toBe('boolean');
  expect(typeofObject('test')).toBe('string');
  expect(typeofObject([1,2,3])).toBe('array');
  expect(typeofObject(new Date())).toBe('date');
  expect(typeofObject(function(){return 'test'})).toBe('function');
})
