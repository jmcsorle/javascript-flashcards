const chai = require('chai');
const expect = chai.expect;

const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require('../src/round');
const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/turn');
const { createDeck, countCards } = require('../src/deck');

describe('round', function () {
  let card1;
  let card2;
  let card3;
  let cardData;
  let deck;
  let round;
  beforeEach(function () {
    card1 = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );
    card2 = createCard(
      2,
      'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array'
    );
    card3 = createCard(
      3,
      'What type of prototype method directly modifies the existing array?',
      ['mutator method', 'accessor method', 'iteration method'],
      'mutator method'
    );
    cardData = [card1, card2, card3];
    deck = createDeck(cardData);
    round = createRound(deck);
  });

  it('should create a round object with keys: "deck", "currentCard", "turns", incorrectGuesses', function () {
    expect(round).to.be.an('object');
    expect(round.deck).to.equal(deck);
    expect(round.currentCard).to.equal(card1);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should provide feedback to the user about their guess', function () {
    const guess1 = evaluateGuess('pants', 'object');

    expect(guess1).to.equal('incorrect!');

    const guess2 = evaluateGuess('array', 'array');

    expect(guess2).to.equal('correct!');
  });

  it('should increment turns and currentCard', function () {
    const turn0 = round.turns;

    const turn1 = takeTurn('banana', round);
    expect(turn1.turns).to.equal(turn0 + 1);
    expect(turn1.currentCard).to.equal(card2);

    const turn2 = takeTurn('banana', round);
    expect(turn2.turns).to.equal(turn0 + 2);
    expect(turn2.currentCard).to.equal(card3);
  });

  it('should add incorrect answer ids into the incorrectGuesses array', function () {
    const guess1 = takeTurn('pants', round);

    expect(round.incorrectGuesses.length).to.equal(1);

    const guess2 = takeTurn('potato', round);

    expect(round.incorrectGuesses.length).to.equal(2);

    console.log('THESE ARE INCORRECT', round.incorrectGuess);
  });

  it('should calculate the percent correct', function () {
    const round = {
      turns: 10,
      incorrectGuesses: [1, 14, 10],
    };
    const percentCorrect = calculatePercentCorrect(round);

    expect(percentCorrect).to.equal(70);
  });

  it('should provide a message when the round is done that includes percent correct', function () {
    const round = {
      turns: 10,
      incorrectGuesses: [1, 14, 10],
    };
    const endOfGame = endRound(round);
    expect(endOfGame).to.equal(
      `**Round Over! **You answered 70% of the questions correctly!`
    );
  });
});
