const FizzBuzz = require('./fizz-buzz');

describe('FizzBuzz', () => {
  let fizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  it('should be a class', () => {
    expect(fizzBuzz).toBeInstanceOf(FizzBuzz);
  });

  describe('constructor', () => {
    describe('no arguments', () => {
      it('should have default range', () => {
        fizzBuzz = new FizzBuzz();
        expect(fizzBuzz._range).toEqual({min: 1, max: 100})
      });
    });

    describe('one argument as max', () => {
      it('should have proper range', () => {
        fizzBuzz = new FizzBuzz(300);
        expect(fizzBuzz._range).toEqual({min: 1, max: 300});
      });
    });

    describe('two arguments as max and min', () => {
      it('should have proper range', () => {
        fizzBuzz = new FizzBuzz(200, 3);
        expect(fizzBuzz._range).toEqual({min: 3, max: 200});
      });
    });

    describe('more then two arguments', () => {
      it('should throw an error', () => {
        expect(() => new FizzBuzz(1, 2, 3)).toThrowError();
      });
    })
  });

  describe('parsingRules', () => {
    it('should be a function', () => {
      expect(typeof FizzBuzz._parseRules).toBe('function');
    });

    it('should return a number', () => {
      expect(FizzBuzz._parseRules(1)).toBe(1);
    });

    it('should return "Fizz"', () => {
      expect(FizzBuzz._parseRules(3)).toBe('Fizz');
      expect(FizzBuzz._parseRules(99)).toBe('Fizz');
    });

    it('should return "Buzz"', () => {
      expect(FizzBuzz._parseRules(5)).toBe("Buzz");
      expect(FizzBuzz._parseRules(100)).toBe("Buzz");
    });

    it('should return "FizzBuzz"', () => {
      expect(FizzBuzz._parseRules(15)).toBe("FizzBuzz");
      expect(FizzBuzz._parseRules(30)).toBe("FizzBuzz");
    });
  });

  describe('play', () => {
    it('should be a function', () => {
      expect(typeof fizzBuzz.play).toBe('function');
    });

    it('should return proper list of game results', () => {
      fizzBuzz = new FizzBuzz(5);
      expect(fizzBuzz.play()).toEqual([1, 2, "Fizz", 4, "Buzz"]);

      fizzBuzz = new FizzBuzz(20, 6);
      expect(fizzBuzz.play().length).toBe(15);
    });
  });
});