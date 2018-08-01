const arrayFromRange = require('./utils/arrayFromRange');
const RULES  = require('./rules');

class FizzBuzz {
  static _parseRules(number) {
    return Object.keys(RULES).reduce(FizzBuzz._rulesReducer(number), '') || number;
  }

  static _rulesReducer(number) {
    return (output, key) =>
      output + (FizzBuzz._validKeyRule(number, key)
      ? FizzBuzz._parseRule(key)
      : '')
  }

  static _parseRule(key) {
    return FizzBuzz.rules[key];
  }

  static _validKeyRule(number, keyRule) {
    return number % keyRule === 0
  };

  static get rules() {
    return RULES;
  }

  constructor(max = 100, min = 1) {
    if (arguments.length > 2) {
      throw new Error('To many arguments... (max amount of arguments is two)!')
    }

    if (max < 1 || min < 1) {
      throw new Error('Min or max can not be less then 1!');
    }

    this.setRange(min, max);
  }

  setRange(min, max) {
    this._range = {
      min: +min,
      max: +max
    };
  }

  play() {
    const numbers = arrayFromRange(this._range) || [];
    return [...numbers.map((value) => FizzBuzz._parseRules(value))]
  }
}

module.exports = FizzBuzz;
