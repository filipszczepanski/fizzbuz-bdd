module.exports = (range) => {
  if (!range) {
    throw new Error('No range argument!')
  }

  if (typeof range.min !== 'number' || typeof range.max !== 'number') {
    throw new Error('Incorrect range object!')
  }

  if (range.min > range.max) {
    throw new Error('Max must be greater then min!');
  }

  const {min, max} = range;
  const amount = max - min + 1;
  return Array.from(new Array(amount), (val, index) => index + min)
};
