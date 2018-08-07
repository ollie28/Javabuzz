describe('Javabuzz', function() {

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(45)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(60)).toBe(true);
    });

  });

  describe('when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(14)).toBe(false);
    });
  });

  describe('when playing, says', function() {

    it('"Fizzbuzz" when a number is divisible by 15', function() {
      expect(javabuzz.says(30)).toEqual("Javabuzz");

    });

    it('"Fizz" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");

    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");

    });

  });

});
