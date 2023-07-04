const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('guess', function () {
  it('should be a function', function () {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return "correct!" when the guess strictly equals the correctAnswer', function () {
    const outcome = evaluateGuess('object', 'object');
    expect(outcome).to.equal('correct!');
  });

  it('should return "incorrect!" when the guess does not strictly equal the correctAnswer', function () {
    const outcome = evaluateGuess('array', 'object');
    expect(outcome).to.equal('incorrect!');
  });
});
