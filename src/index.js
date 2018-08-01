const args = process.argv.slice(2);
const FizzBuzz = require('./fizz-buzz');

const colors = {
  'Fizz': '\x1b[35m',
  'Buzz': '\x1b[36m',
  'FizzBuzz': '\x1b[33m'
};

try {
  const game = new FizzBuzz(...args);
  const results = game.play().map(value =>
    (colors[value] || '') + value + '\x1b[0m'
  );

  console.log('\n>>> FIZZ BUZZ GAME <<<');
  console.log(results.join(' | '));
  console.log('>>> END GAME <<< \n');

} catch (error) {
  console.error(error);
}
