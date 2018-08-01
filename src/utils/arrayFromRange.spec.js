const arrayFromRange = require('./arrayFromRange');

describe('arrayFromRange', function () {
  it('should generate proper array from number', function () {
    expect(arrayFromRange({min: 3, max: 5})).toEqual([3, 4, 5]);
  });

  it('should throw error for not valid range object', function () {
    expect(() => arrayFromRange()).toThrowError();
    expect(() => arrayFromRange({})).toThrowError();
    expect(() => arrayFromRange({max:1})).toThrowError();
    expect(() => arrayFromRange({min:1})).toThrowError();
    expect(() => arrayFromRange({min: 10, max: 0})).toThrowError();
  });
});
