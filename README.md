# FizzBuzz Game with BDD
Implementation of FizzBuzz Game based on Behavior Drive Development(BDD)

## Install
- install yarn and node
- `yarn`

## Play game
- `yarn start`
- `yarn start [max]` - with max number
- `yarn start [max] [min]` - with defined range

## Rules
Players generally sit in a circle. The player designated to go first says the number "1", and each player thenceforth counts one number in turn. However, any number divisible by three is replaced by the word fizz and any divisible by five by the word buzz. Numbers divisible by both become fizz buzz. A player who hesitates or makes a mistake is eliminated from the game.

For example, a typical round of fizz buzz would start as follows:

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

..from: [wikipedia.org/wiki/Fizz_buz](https://en.wikipedia.org/wiki/Fizz_buzz)

## Used
- [yarn](https://yarnpkg.com/en/docs/install) - fast dependency management
- [Jest](https://jestjs.io/) - unit testing framework
- [serve](https://github.com/zeit/serve#readme) - for serving coverage as html

## Tests
## Run
- `yarn test`
- `yarn test-watch` - running test after changed a file

### Coverage 
- `yarn covarage`
- [http://localhost:5000](http://localhost:5000)  
