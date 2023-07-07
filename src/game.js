const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/turn');
const { createDeck, countCards } = require('../src/deck');
const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require('../src/round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(
    deck
  )} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  let cardData = prototypeQuestions.map((card) => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer);
  });

  let deck = createDeck(cardData);

  let round = createRound(deck);

  printMessage(deck);
  printQuestion(round);
}

module.exports = { printMessage, printQuestion, start };
