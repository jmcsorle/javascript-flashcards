const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('deck', function () {
  const card1 = createCard(
    1,
    'What allows you to define a set of related information using key-value pairs?',
    ['object', 'array', 'function'],
    'object'
  );
  const card2 = createCard(
    2,
    'What is a comma-separated list of related values?',
    ['array', 'object', 'function'],
    'array'
  );
  const card3 = createCard(
    3,
    'What type of prototype method directly modifies the existing array?',
    ['mutator method', 'accessor method', 'iteration method'],
    'mutator method'
  );
  const cardData = [card1, card2, card3];
  const deck = createDeck(cardData);

  it('should be a function', function () {
    expect(createDeck).to.be.a('function');
  });

  it('should be a function', function () {
    expect(countCards).to.be.a('function');
  });

  it('should create a deck from an array of card objects', function () {
    expect(deck).to.deep.equal(cardData);
  });

  it('should return a count of elements in an array', function () {
    console.log(deck);
    const count = countCards(deck);
    expect(count).to.equal(deck.length);
  });
});
